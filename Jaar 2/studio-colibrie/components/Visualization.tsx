import { CalculationResults } from "@/types/types";
import { visualizePolylines } from "@/utils/visualization";
import React, { useRef, useEffect } from "react";


interface VisualizationProps {
  results: CalculationResults | null;
}

const Visualization: React.FC<VisualizationProps> = ({ results }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (results && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, 400, 300);
        visualizePolylines(results.vertices, results.vulrandVlak, results.bodemVlak, ctx);
      }
    }
  }, [results]);

  if (!results) {
    return (
      null
    );
  }

  return (
    <div className=" bg-white p-2 border-2 border-black relative">
      <canvas ref={canvasRef} width={400} height={300} className="w-full" />
      {results?.outdated && (
        <div className="outdated-notice absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
          Herbereken nodig
        </div>
      )}
    </div>
  );
};

export default Visualization;