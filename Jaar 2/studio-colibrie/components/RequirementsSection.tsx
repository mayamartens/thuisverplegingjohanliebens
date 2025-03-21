import React, { useState, useEffect } from "react";
import { Parameters } from "../types/types";
import { calculateDimensionsFromRequirements } from "../utils/calculations";

interface RequirementsSectionProps {
  parameters: Parameters;
  onChange: (key: keyof Parameters, value: number) => void;
}

const RequirementsSection: React.FC<RequirementsSectionProps> = ({ parameters, onChange }) => {
  const [recommendation, setRecommendation] = useState<string>("");

  useEffect(() => {
    const dimension = calculateDimensionsFromRequirements(parameters);
    if (dimension > 0) {
      setRecommendation(
        `Op basis van de ingevoerde gegevens zou een vierkant bekken met afmetingen ${dimension} × ${dimension} cm kunnen voldoen. Klik op 'Bereken' om deze waarden over te nemen.`
      );
    } else {
      setRecommendation("");
    }
  }, [parameters.requiredVolume, parameters.requiredSurface]);

  return (
    <div id="requirementsSection">
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="mr-4">
          <label className="font-bold">
            <div className="mb-4">Vereist buffervolume (liter):</div>
          </label>
          <input
            type="number"
            min={10}
            step={10}
            value={parameters.requiredVolume}
            onChange={(e) => onChange("requiredVolume", parseFloat(e.target.value))}
            className="w-full  border-black p-1 border-2"
          />
        </div>
        <div className="mr-4">
          <label className="font-bold">
            <div className="mb-4">Vereiste infiltratieoppervlakte (m²):</div>
          </label>
          <input
            type="number"
            min={1}
            step={0.1}
            value={parameters.requiredSurface}
            onChange={(e) => onChange("requiredSurface", parseFloat(e.target.value))}
            className="w-full  border-black p-1 border-2"
          />
        </div>
      </div>
      {recommendation && (
        <div id="requirementsResultSection" className="mb-4">
          <div className="mt-5">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 text-success"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium ml-2">{recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequirementsSection;