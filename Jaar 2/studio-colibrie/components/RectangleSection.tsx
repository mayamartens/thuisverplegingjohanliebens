import React from "react";
import { Parameters } from "../types/types";

interface RectangleSectionProps {
  parameters: Parameters;
  onChange: (key: keyof Parameters, value: number) => void;
}

const RectangleSection: React.FC<RectangleSectionProps> = ({ parameters, onChange }) => {
  return (
    <div id="rectangleSection" className="grid grid-cols-2 gap-2 mb-4">
      <div className="mr-4">
        <label className="font-bold">
          <div className="mb-4">Lengte (cm):</div>
        </label>
        <input
          type="number"
          min={10}
          step={1}
          value={parameters.rectLength}
          onChange={(e) => onChange("rectLength", parseFloat(e.target.value))}
          className="w-full  border-black p-1 border-2"
        />
      </div>
      <div className="mr-4">
        <label className="font-bold">
          <div className="mb-4">Breedte (cm):</div>
        </label>
        <input
          type="number"
          min={10}
          step={1}
          value={parameters.rectWidth}
          onChange={(e) => onChange("rectWidth", parseFloat(e.target.value))}
          className="w-full  border-black p-1 border-2"
        />
      </div>
    </div>
  );
};

export default RectangleSection;