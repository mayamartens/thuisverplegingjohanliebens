import React from "react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: "dxf" | "rectangle" | "requirements") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => (
  <div className="flex mb-10 justify-between">
    <h1 className="text-6xl font-bold">Infiltratiebekken Calculator</h1>
    <div className="flex">
      <button
        className={`tab ${activeTab === "dxf" ? "border-b-black border-b-4 p-2 mr-5" : "border-b-white border-b-4 p-2 mr-5"}`}
        onClick={() => setActiveTab("dxf")}
      >
        DXF Polyline
      </button>
      <button
        className={`tab ${activeTab === "rectangle" ? "border-b-black border-b-4 p-2 mr-5" : "border-b-white border-b-4 p-2 mr-5"}`}
        onClick={() => setActiveTab("rectangle")}
      >
        Rechthoek
      </button>
      <button
        className={`tab ${activeTab === "requirements" ? "border-b-black border-b-4 p-2 mr-5" : "border-b-white border-b-4 p-2 mr-5"}`}
        onClick={() => setActiveTab("requirements")}
      >
        Vereisten
      </button>
    </div>
    
  </div>
);

export default Tabs;