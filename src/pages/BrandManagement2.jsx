import React, { useState } from "react";
import BelowHeader3 from "../components/BrandManagementComponents/BelowHeader3";
import { GridView, TableView } from "../components/BrandManagementComponents/BMCard2";

const BrandManagement2 = () => {
  const [activeView, setActiveView] = useState("grid"); // View toggle state

  return (
    <div className="min-h-screen bg-commonBgColor p-4 sm:p-6">
      <main className="bg-commonBgColor flex-grow">
        <BelowHeader3 activeView={activeView} setActiveView={setActiveView} />

        {/* Grid and Table Views */}
        <div className="w-full">
          {activeView === "grid" ? (
            <GridView />
          ) : (
            <TableView />
          )}
        </div>
      </main>
    </div>
  );
};

export default BrandManagement2;
