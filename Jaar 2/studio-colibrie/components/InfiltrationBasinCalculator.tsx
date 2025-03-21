import React, { useState } from "react";

import { calculateBasin, calculateDimensionsFromRequirements, validateParameters } from "@/utils/calculations";
import { CalculationResults, PolylineData, Parameters } from "@/types/types";
import { exportToPDF } from "@/utils/pdfExport";
import DxfSection from "./DxfSection";
import Tabs from "./Tabs";
import RectangleSection from "./RectangleSection";
import RequirementsSection from "./RequirementsSection";
import CommonParameters from "./CommonParameters";
import Visualization from "./Visualization";
import Results from "./Results";
import Modal from "./Modal";
import { div } from "framer-motion/client";
import Header from "./Header";
import Footer from "./Footer";

const InfiltrationBasinCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dxf" | "rectangle" | "requirements">("dxf");
  const [polylineData, setPolylineData] = useState<PolylineData | null>(null);
  const [calculationResults, setCalculationResults] = useState<CalculationResults | null>(null);
  const [showWarning, setShowWarning] = useState<string>();
  const [parameters, setParameters] = useState<Parameters>({
    slopeAngle: 30,
    heightToFill: 20,
    heightToBottom: 30,
    rectLength: 600,
    rectWidth: 400,
    requiredVolume: 3000,
    requiredSurface: 10,
  });

  const handleCalculate = () => {
    if (activeTab === "requirements") {
      const dimension = calculateDimensionsFromRequirements(parameters);
      if (dimension > 0) {
        setParameters((prev) => ({
          ...prev,
          rectLength: dimension,
          rectWidth: dimension,
          slopeAngle: 30,
          heightToFill: 20,
          heightToBottom: 30,
        }));
        setActiveTab("rectangle");
        const results = calculateBasin("rectangle", { ...parameters, rectLength: dimension, rectWidth: dimension }, null);
        setCalculationResults(results);
        return;
      }
    }
    const validation = validateParameters(parameters, activeTab, polylineData);
    if (validation.isValid) {
      const results = calculateBasin(activeTab, parameters, polylineData);
      setCalculationResults(results);
    } else {
      setShowWarning(validation.message);
    }
  };

  const handleParameterChange = (key: keyof Parameters, value: number) => {
    setParameters((prev) => ({ ...prev, [key]: value }));
    if (calculationResults) {
      // Markeer resultaten als verouderd
      setCalculationResults((prev) => prev && { ...prev, outdated: true });
    }
  };

  const handleExport = () => {
    if (calculationResults) {
      exportToPDF(calculationResults, parameters);
    }
  };

  return (
    <div>
      <Header place={""}></Header>
      <div className="w-[80%] mx-[10%] mt-24 mb-24">
        <div className="">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "dxf" && <DxfSection setPolylineData={setPolylineData} />}
          {activeTab === "rectangle" && (
            <RectangleSection parameters={parameters} onChange={handleParameterChange} />
          )}
          {activeTab === "requirements" && (
            <RequirementsSection  parameters={parameters} onChange={handleParameterChange} />
          )}
          {activeTab !== "requirements" && (
            <CommonParameters parameters={parameters} onChange={handleParameterChange} />
          )}
          <div className="flex mt-10 mb-10">
            <div>
              <button className="bg-black p-2 px-4   rounded-full text-white mr-4" onClick={handleCalculate}>
                Bereken
              </button>
            </div>
            <button
              className="bg-black p-2 px-4   rounded-full text-white"
              disabled={!calculationResults}
              onClick={handleExport}
            >
              Exporteer naar PDF
            </button>
          </div>
          {!showWarning && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Visualization results={calculationResults} />
              <Results results={calculationResults} />
            </div>
          )}
        </div>
        {showWarning && (
          <Modal
            title="Onrealistische parameters"
            message={showWarning}
            onClose={() => setShowWarning("")}
            onProceed={() => {
              const results = calculateBasin(activeTab, parameters, polylineData);
              setCalculationResults(results);
              setShowWarning("");
            }}
          />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InfiltrationBasinCalculator;