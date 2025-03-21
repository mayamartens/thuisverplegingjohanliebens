import React from "react";
import { Parameters } from "../types/types";

interface CommonParametersProps {
  parameters: Parameters;
  onChange: (key: keyof Parameters, value: number) => void;
}

const CommonParameters: React.FC<CommonParametersProps> = ({ parameters, onChange }) => {
  return (
    <div id="commonParametersSection" className="grid grid-cols-3 gap-2 mb-4">
      <div className="mr-4">
        <label className="font-bold">
          <div className="mb-4">Hellingshoek (°):</div>
        </label>
        <input
          type="number"
          min={1}
          max={89}
          value={parameters.slopeAngle}
          onChange={(e) => onChange("slopeAngle", parseFloat(e.target.value))}
          className=" w-full  border-black p-1 border-2"
        />
      </div>
      <div className="mr-4">
        <label className="font-bold">
          <div className="mb-4">Maaiveld tot vulrand (cm):</div>
        </label>
        <input
          type="number"
          min={0}
          step={1}
          value={parameters.heightToFill}
          onChange={(e) => onChange("heightToFill", parseFloat(e.target.value))}
          className="w-full  border-black p-1 border-2"
        />
      </div>
      <div className="mr-4">
        <label className="font-bold">
          <div className="mb-4">Vulrand tot bodem (cm):</div>
        </label>
        <input
          type="number"
          min={0}
          step={1}
          value={parameters.heightToBottom}
          onChange={(e) => onChange("heightToBottom", parseFloat(e.target.value))}
          className="w-full  border-black p-1 border-2"
        />
      </div>
    </div>
  );
};

export default CommonParameters;