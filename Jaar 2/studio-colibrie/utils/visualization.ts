import { Point } from "../types/types";

export const createOffsetPolyline = (vertices: Point[], offset: number): Point[] => {
  const n = vertices.length - 1;
  const offsetSegments: { start: Point; end: Point }[] = [];
  for (let i = 0; i < n; i++) {
    const p1 = vertices[i];
    const p2 = vertices[(i + 1) % n];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const nx = -dy / length;
    const ny = dx / length;
    offsetSegments.push({
      start: { x: p1.x + nx * offset, y: p1.y + ny * offset },
      end: { x: p2.x + nx * offset, y: p2.y + ny * offset },
    });
  }
  const result: Point[] = [];
  for (let i = 0; i < n; i++) {
    const seg1 = offsetSegments[i];
    const seg2 = offsetSegments[(i + 1) % n];
    const intersection = findSegmentIntersection(seg1.start, seg1.end, seg2.start, seg2.end);
    result.push(intersection || seg1.end);
  }
  result.push({ x: result[0].x, y: result[0].y });
  return result;
};

const findSegmentIntersection = (p1: Point, p2: Point, p3: Point, p4: Point): Point | null => {
  const dx1 = p2.x - p1.x;
  const dy1 = p2.y - p1.y;
  const dx2 = p4.x - p3.x;
  const dy2 = p4.y - p3.y;
  const det = dx1 * dy2 - dx2 * dy1;
  if (Math.abs(det) < 1e-10) return null;
  const t = ((p3.x - p1.x) * dy2 - (p3.y - p1.y) * dx2) / det;
  return { x: p1.x + t * dx1, y: p1.y + t * dy1 };
};

export const calculatePolygonArea = (vertices: Point[]): number => {
  let area = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    area += vertices[i].x * vertices[i + 1].y - vertices[i + 1].x * vertices[i].y;
  }
  return Math.abs(area / 2);
};

export const calculatePerimeter = (vertices: Point[]): number => {
  let perimeter = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    const dx = vertices[i + 1].x - vertices[i].x;
    const dy = vertices[i + 1].y - vertices[i].y;
    perimeter += Math.sqrt(dx * dx + dy * dy);
  }
  return perimeter;
};

export const hasSelfIntersections = (vertices: Point[]): boolean => {
  const n = vertices.length;
  for (let i = 0; i < n - 1; i++) {
    const line1Start = vertices[i];
    const line1End = vertices[i + 1];
    for (let j = i + 2; j < n - 1; j++) {
      if (i === 0 && j === n - 2) continue;
      const line2Start = vertices[j];
      const line2End = vertices[j + 1];
      if (linesIntersect(line1Start, line1End, line2Start, line2End)) return true;
    }
  }
  return false;
};

const linesIntersect = (p1: Point, p2: Point, p3: Point, p4: Point): boolean => {
  const d1x = p2.x - p1.x;
  const d1y = p2.y - p1.y;
  const d2x = p4.x - p3.x;
  const d2y = p4.y - p3.y;
  const det = d1x * d2y - d1y * d2x;
  if (Math.abs(det) < 1e-10) return false;
  const dx = p3.x - p1.x;
  const dy = p3.y - p1.y;
  const t1 = (dx * d2y - dy * d2x) / det;
  const t2 = (dx * d1y - dy * d1x) / det;
  return t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1;
};

export const visualizePolylines = (
  maaiveld: Point[],
  vulrand: Point[],
  bodem: Point[],
  ctx: CanvasRenderingContext2D,
  scaleFactor: number = 1,
  addDimensions: boolean = false
): string | null => {
  ctx.scale(scaleFactor, scaleFactor);
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  const allPoints = [...maaiveld, ...vulrand, ...bodem];
  allPoints.forEach((p) => {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  });

  const margin = 30;
  const legendSpace = addDimensions ? 40 : 0;
  const boundingWidth = maxX - minX;
  const boundingHeight = maxY - minY;
  const scaleX = (400 / scaleFactor - 2 * margin) / boundingWidth;
  const scaleY = (300 / scaleFactor - 2 * margin - legendSpace) / boundingHeight;
  const scale = Math.min(scaleX, scaleY);

  const centerX = 400 / (2 * scaleFactor);
  const centerY = (300 - legendSpace) / (2 * scaleFactor);
  const polylineCenterX = (minX + maxX) / 2;
  const polylineCenterY = (minY + maxY) / 2;

  const transformPoint = (p: Point): Point => ({
    x: centerX + (p.x - polylineCenterX) * scale,
    y: centerY - (p.y - polylineCenterY) * scale,
  });

  // Teken maaiveld
  ctx.beginPath();
  const firstMaaiveldPoint = transformPoint(maaiveld[0]);
  ctx.moveTo(firstMaaiveldPoint.x, firstMaaiveldPoint.y);
  maaiveld.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.fillStyle = "rgba(240, 240, 240, 0.5)";
  ctx.fill();

  // Teken vulrand
  ctx.beginPath();
  const firstVulrandPoint = transformPoint(vulrand[0]);
  ctx.moveTo(firstVulrandPoint.x, firstVulrandPoint.y);
  vulrand.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.fillStyle = "rgba(100, 180, 255, 0.6)";
  ctx.fill();

  // Teken bodem
  const hasBottomIntersections = hasSelfIntersections(bodem);
  ctx.beginPath();
  const firstBottomPoint = transformPoint(bodem[0]);
  ctx.moveTo(firstBottomPoint.x, firstBottomPoint.y);
  bodem.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.fillStyle = hasBottomIntersections ? "rgba(220, 50, 50, 0.7)" : "rgba(30, 120, 210, 0.7)";
  ctx.fill();

  // Lijnen
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2 / scaleFactor;
  ctx.beginPath();
  ctx.moveTo(firstMaaiveldPoint.x, firstMaaiveldPoint.y);
  maaiveld.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  ctx.strokeStyle = "#3366CC";
  ctx.beginPath();
  ctx.moveTo(firstVulrandPoint.x, firstVulrandPoint.y);
  vulrand.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  ctx.strokeStyle = hasBottomIntersections ? "#CC0000" : "#0033AA";
  ctx.beginPath();
  ctx.moveTo(firstBottomPoint.x, firstBottomPoint.y);
  bodem.slice(1).forEach((p) => {
    const point = transformPoint(p);
    ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  if (addDimensions) {
    ctx.font = `${16 / scaleFactor}px Arial`;
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    for (let i = 0; i < maaiveld.length - 1; i++) {
      const p1 = transformPoint(maaiveld[i]);
      const p2 = transformPoint(maaiveld[i + 1]);
      const dx = maaiveld[i + 1].x - maaiveld[i].x;
      const dy = maaiveld[i + 1].y - maaiveld[i].y;
      const length = Math.sqrt(dx * dx + dy * dy).toFixed(0);
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const offset = 10 / scaleFactor;

      if (angle > Math.PI / 2 && angle <= (3 * Math.PI) / 2) angle += Math.PI;

      ctx.save();
      ctx.translate(midX, midY);
      ctx.rotate(angle);
      const textWidth = ctx.measureText(`${length} cm`).width;
      ctx.fillText(`${length} cm`, -textWidth / 2, offset);
      ctx.restore();
    }

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(10, 260, 150, 30);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
    ctx.strokeRect(10, 260, 150, 30);
    ctx.font = `${12 / scaleFactor}px Arial`;
    ctx.fillStyle = "#000000";
    ctx.fillText("Maaiveld", 20, 270);
    ctx.fillStyle = "#3366CC";
    ctx.fillText("Vulrand", 70, 270);
    ctx.fillStyle = hasBottomIntersections ? "#CC0000" : "#0033AA";
    ctx.fillText("Bodem", 120, 270);
  }

  return addDimensions ? ctx.canvas.toDataURL("image/png", 1.0) : null;
};