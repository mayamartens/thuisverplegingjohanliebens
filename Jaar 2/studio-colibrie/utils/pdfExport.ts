import { jsPDF } from "jspdf";
import { CalculationResults } from "../types/types";
import { visualizePolylines } from "./visualization";

export const exportToPDF = (results: CalculationResults, params: any) => {
  const doc = new jsPDF();
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext("2d")!;
  const visualImage = visualizePolylines(results.vertices, results.vulrandVlak, results.bodemVlak, ctx, 2, true);

  doc.setFontSize(16);
  doc.text("Infiltratiebekken Calculator", 105, 20, { align: "center" });
  doc.setFontSize(10);
  doc.text(`Datum: ${new Date().toLocaleString("nl-NL")}`, 10, 30);
  doc.text("colibriCAD - Michael Martens", 200, 30, { align: "right" });

  doc.addImage(visualImage!, "PNG", 10, 40, 190, 142.5);

  doc.setFontSize(12);
  doc.text("Resultaten:", 10, 190);
  doc.setFontSize(10);
  doc.text(`Buffervolume: ${results.volumeL} L`, 10, 200);
  doc.text(`Totale infiltratieoppervlakte: ${results.totaleOppervlakteM2} m²`, 10, 210);
  doc.text(`Oppervlakte zijvlakken: ${results.schuineZijdenOppervlakteM2} m²`, 10, 220);
  doc.text(`Oppervlakte bodem: ${results.bodemOppervlakteM2} m²`, 10, 230);
  doc.text(`Uitgraving: ${results.uitgravingsVolumeM3} m³`, 10, 240);
  doc.text(`Uitgraafhoek: ${params.slopeAngle}°`, 10, 250);
  doc.text(`Afstand maaiveld tot vulrand: ${params.heightToFill} cm`, 10, 260);
  doc.text(`Afstand vulrand tot bodem: ${params.heightToBottom} cm`, 10, 270);

  doc.save("Infiltratiebekken_Resultaten.pdf");
};