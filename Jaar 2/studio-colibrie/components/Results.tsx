import React, { useState } from "react";
import { CalculationResults } from "../types/types";

interface ResultsProps {
  results: CalculationResults | null;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  const [showDetails, setShowDetails] = useState(false);
  if (!results) {
    return (
      null
    );
  }

  return (
    <div id="resultsContainer" className="ml-10">
      <h2 className="text-3xl font-bold ">Resultaten</h2>
      <div
        id="results"
        className={` ${results.outdated ? "opacity-60 grayscale" : ""}`}
      >
        <div className="flex ">
          <div className="mr-10 mt-10">
            <div className="">Buffervolume</div>
            <div className="text-xl">{results.volumeL} L</div>
          </div>
          <div className="mr-10 mt-10">
            <div className="">Uitgraving</div>
            <div className="text-xl">{results.uitgravingsVolumeM3} m³</div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-10 mt-10">
            <div className="">Infiltratieopp.</div>
            <div className="text-xl">{results.totaleOppervlakteM2} m²</div>
          </div>
          <div className="mr-10 mt-10">
            <div className="">Opp. zijvlakken</div>
            <div className="text-xl">
              {results.schuineZijdenOppervlakteM2} m²
            </div>
          </div>
          <div className="mr-10 mt-10">
            <div className="">Opp. bodem</div>
            <div className="text-xl">{results.bodemOppervlakteM2} m²</div>
          </div>
        </div>
        {results.outdated && (
          <div className="alert alert-warning mt-2 py-1">
            <span className="text-xs">
              Parameters gewijzigd - klik op Bereken voor nieuwe resultaten
            </span>
          </div>
        )}
        <button
          className="bg-black p-2 px-4 rounded-full text-white mt-10"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Verberg detailberekening   ▲" : "Toon detailberekening   ▼"}
        </button>
        {showDetails && results.detailData && (
          <div id="detailResults" className="mt-5 p-3 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-4">Detailberekening</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="mb-2">
                  <strong>Volume maaiveld tot vulrand:</strong>{" "}
                  {results.detailData.volumeMaaiveldTotVulrandM3} m³
                </p>
                <p className="mb-2">
                  <strong>Volume vulrand tot bodem:</strong>{" "}
                  {results.detailData.volumeVulrandTotBodemM3} m³
                </p>
                <p className="mb-2">
                  <strong>Totale uitgraving:</strong> {results.uitgravingsVolumeM3} m³
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>Oppervlakte maaiveld:</strong>{" "}
                  {results.detailData.maaiveldOppervlakteM2} m²
                </p>
                <p className="mb-2">
                  <strong>Oppervlakte vulrand:</strong>{" "}
                  {results.detailData.vulrandOppervlakteM2} m²
                </p>
                <p className="mb-2">
                  <strong>Oppervlakte bodem:</strong> {results.bodemOppervlakteM2} m²
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;