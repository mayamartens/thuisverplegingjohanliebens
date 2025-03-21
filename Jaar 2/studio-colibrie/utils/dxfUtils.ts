import DxfParser from "dxf-parser";
import { PolylineData } from "../types/types";

// Interface voor een DXF-entiteit
interface IEntity {
  type: string;
  vertices?: { x: number; y: number; z?: number }[]; // Optioneel, want niet alle entiteiten hebben vertices
}

// Interface voor het DXF-object dat door parseSync wordt geretourneerd
interface IDxf {
  entities: IEntity[];
}

// Type voor het resultaat van parseSync (kan null zijn)
type ParseResult = IDxf | null;

export const parseDxfFile = (file: File, setPolylineData: (data: PolylineData | null) => void) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parser = new DxfParser();
      const dxf: ParseResult = parser.parseSync(e.target!.result as string);

      // Controleer of dxf null is
      if (!dxf || !dxf.entities) {
        console.error("Geen geldig DXF-bestand of geen entiteiten gevonden.");
        setPolylineData(null);
        return;
      }

      const entities = dxf.entities;
      for (const entity of entities) {
        if (entity.type === "LWPOLYLINE" || entity.type === "POLYLINE") {
          // Controleer of vertices bestaat en een array is
          if (entity.vertices && Array.isArray(entity.vertices)) {
            const vertices: PolylineData = entity.vertices.map((v) => ({ x: v.x, y: v.y }));
            setPolylineData(vertices);
            return;
          } else {
            console.error("Geen vertices gevonden in polylijn.");
            setPolylineData(null);
            return;
          }
        }
      }

      console.error("Geen LWPOLYLINE of POLYLINE gevonden in het DXF-bestand.");
      setPolylineData(null);
    } catch (error) {
      console.error("DXF parse error:", error);
      setPolylineData(null);
    }
  };
  reader.onerror = () => {
    console.error("Fout bij het lezen van het bestand.");
    setPolylineData(null);
  };
  reader.readAsText(file);
};