import React, { useState } from "react";
import Header from "../components/CommonComponents/Header";
import { Outlet } from "react-router-dom";

const InsightsLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-commonBgColor min-h-screen p-7 flex flex-col">
      <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      />

      <Outlet /> {/* This will show each inner page like /insights/details */}
    </div>
  );
};

export default InsightsLayout;
