import { Parameters, PolylineData, CalculationResults, ValidationResult, Point } from "../types/types";
import { calculatePerimeter, calculatePolygonArea, createOffsetPolyline } from "./visualization";

export const validateParameters = (
  params: Parameters,
  activeTab: string,
  polylineData: PolylineData | null
): ValidationResult => {
  if (activeTab === "dxf" && !polylineData) {
    return { isValid: false, message: "Laad eerst een DXF-bestand." };
  }
  if (activeTab === "rectangle") {
    const totalDepth = params.heightToFill + params.heightToBottom;
    const narrowestDimension = Math.min(params.rectLength, params.rectWidth);
    const minSlopeAngle = Math.atan(2 * totalDepth / narrowestDimension) * (180 / Math.PI);
    const maxDepth = (narrowestDimension / 2) * Math.tan(params.slopeAngle * (Math.PI / 180));
    if (params.slopeAngle < minSlopeAngle || totalDepth > maxDepth) {
      return {
        isValid: false,
        message: `De combinatie van diepte en hellingshoek is niet realistisch.\nMinimale hellingshoek: ${Math.ceil(
          minSlopeAngle
        )}°\nMaximale diepte: ${Math.floor(maxDepth)} cm`,
      };
    }
  }
  return { isValid: true };
};

export const calculateBasin = (
  activeTab: string,
  params: Parameters,
  polylineData: PolylineData | null
): CalculationResults => {
  let vertices: Point[] = [];
  let inputMethod = "";
  if (activeTab === "dxf" && polylineData) {
    vertices = [...polylineData];
    inputMethod = "DXF Polyline";
  } else if (activeTab === "rectangle" || activeTab === "requirements") {
    const halfLength = params.rectLength / 2;
    const halfWidth = params.rectWidth / 2;
    vertices = [
      { x: -halfLength, y: -halfWidth },
      { x: halfLength, y: -halfWidth },
      { x: halfLength, y: halfWidth },
      { x: -halfLength, y: halfWidth },
      { x: -halfLength, y: -halfWidth },
    ];
    inputMethod = `Rechthoek ${params.rectLength} x ${params.rectWidth} cm`;
  }

  const hoek = 90 - params.slopeAngle;
  const offsetVulrand = params.heightToFill * Math.tan(hoek * (Math.PI / 180));
  const offsetBodem = params.heightToBottom * Math.tan(hoek * (Math.PI / 180));

  const vulrandVlak = createOffsetPolyline(vertices, -offsetVulrand);
  const bodemVlak = createOffsetPolyline(vulrandVlak, -offsetBodem);

  const originalArea = calculatePolygonArea(vertices);
  const vulrandArea = calculatePolygonArea(vulrandVlak);
  const bodemArea = calculatePolygonArea(bodemVlak);

  const vulrandPerimeter = calculatePerimeter(vulrandVlak);
  const bodemPerimeter = calculatePerimeter(bodemVlak);

  const schuineHoogte = params.heightToBottom / Math.sin(params.slopeAngle * (Math.PI / 180));
  const schuineZijdenOppervlakte = ((vulrandPerimeter + bodemPerimeter) / 2) * schuineHoogte;

  const volumeVulrandTotBodem =
    (params.heightToBottom *
      (vulrandArea + bodemArea + Math.sqrt(vulrandArea * bodemArea))) /
    3;
  const volumeMaaiveldTotVulrand =
    (params.heightToFill *
      (originalArea + vulrandArea + Math.sqrt(originalArea * vulrandArea))) /
    3;
  const totaalVolume = volumeVulrandTotBodem + volumeMaaiveldTotVulrand;

  return {
    vertices,
    vulrandVlak,
    bodemVlak,
    volumeL: Math.round(volumeVulrandTotBodem / 1000),
    totaleOppervlakteM2: ((bodemArea + schuineZijdenOppervlakte) / 10000).toFixed(2),
    bodemOppervlakteM2: (bodemArea / 10000).toFixed(2),
    schuineZijdenOppervlakteM2: (schuineZijdenOppervlakte / 10000).toFixed(2),
    uitgravingsVolumeM3: (totaalVolume / 1000000).toFixed(2),
    inputMethod,
    length: params.rectLength,
    width: params.rectWidth,
    slopeAngle: params.slopeAngle,
    heightToFill: params.heightToFill,
    heightToBottom: params.heightToBottom,
    detailData: {
      volumeMaaiveldTotVulrandM3: (volumeMaaiveldTotVulrand / 1000000).toFixed(2),
      volumeVulrandTotBodemM3: (volumeVulrandTotBodem / 1000000).toFixed(2),
      maaiveldOppervlakteM2: (originalArea / 10000).toFixed(2),
      vulrandOppervlakteM2: (vulrandArea / 10000).toFixed(2),
    },
  };
};

export const calculateDimensionsFromRequirements = (params: Parameters): number => {
  const requiredVolumeCm3 = params.requiredVolume * 1000;
  const requiredSurfaceCm2 = params.requiredSurface * 10000;
  const slopeAngle = 30;
  const heightToFill = 20;
  const heightToBottom = 30;
  const hoek = 90 - slopeAngle;
  const offsetPerCm = Math.tan(hoek * (Math.PI / 180));
  const totalOffset = heightToFill * offsetPerCm + heightToBottom * offsetPerCm;

  const schuineHoogte = heightToBottom / Math.sin(slopeAngle * (Math.PI / 180));
  const A = 1;
  const B = 4 * schuineHoogte;
  const C = 4 * totalOffset * schuineHoogte - requiredSurfaceCm2;
  const discriminant = B * B - 4 * A * C;

  if (discriminant < 0) return 0;

  const bodemSize = (-B + Math.sqrt(discriminant)) / (2 * A);
  const maaiveldSize = bodemSize + 2 * totalOffset;
  return Math.ceil(maaiveldSize / 50) * 50;
};