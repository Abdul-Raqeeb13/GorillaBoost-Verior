import React, { useState } from "react";
import BelowHeader3 from "../../components/BrandManagementComponents/BelowHeader3";
import { GridView, TableView } from "../../components/BrandManagementComponents/BMCard2";
import Header from "../../components/CommonComponents/Header";
const BrandManagement2 = () => {
  const [activeView, setActiveView] = useState("grid"); // View toggle state

  return (
    <div className="min-h-screen bg-commonBgColor p-7">
      <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />


        <BelowHeader3 activeView={activeView} setActiveView={setActiveView} />

        {/* Grid and Table Views */}
        <div className="w-full">
          {activeView === "grid" ? (
            <GridView />
          ) : (
            <TableView />
          )}
        </div>
    </div>
  );
};

export default BrandManagement2;
