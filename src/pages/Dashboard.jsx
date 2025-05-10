// Dashboard.jsx

import React from "react";
import BelowHeader from "../components/BelowHeader";
import AnalyticsCard from "../components/DashboardComponents/AnalyticsCard";
import FlowChart from "../components/DashboardComponents/FlowChart";
import Chart from "../components/DashboardComponents/Chart";
import Tables from "../components/DashboardComponents/Tables";
import { FiFilter } from "react-icons/fi";
import Header from "../components/CommonComponents/Header";

const Dashboard = () => {
  return (
    <div className=" min-h-screen flex flex-col flex-grow bg-commonBgColor p-7">

      <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />

      {/* Below Header */}
      <BelowHeader
        title="Job Listings"
        subtitle="Filter based on your preferences"
        btnName="Filter"
        icon={<FiFilter />}
        options={[
          { label: "All Jobs", value: "all" },
          { label: "Active", value: "active" },
          { label: "Archived", value: "archived" },
        ]}
        onSelectOption={(option) => console.log("Selected:", option)}
      />

        <AnalyticsCard />
      <Chart />
      <Tables />
    </div>
  );
};

export default Dashboard;
