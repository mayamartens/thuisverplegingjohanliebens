import { PolylineData } from "@/types/types";
import { parseDxfFile } from "@/utils/dxfUtils";
import React from "react";


interface DxfSectionProps {
  setPolylineData: (data: PolylineData | null) => void;
}

const DxfSection: React.FC<DxfSectionProps> = ({ setPolylineData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      parseDxfFile(file, setPolylineData);
    }
  };

  return (
    <div className="mb-10">
      <label className="label py-1">
        <div className="label-text font-bold mb-4">Upload DXF bestand:</div>
      </label>
      <input
        type="file"
        accept=".dxf"
        className="file-input file-input-sm w-full max-w-md  bg-[#ffffff] text-black file:border-[#000000] file:mr-4 file:bg-[#ffffff] file:text-black"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default DxfSection;