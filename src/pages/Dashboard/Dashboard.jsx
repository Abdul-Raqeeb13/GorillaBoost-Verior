// Dashboard.jsx

import React from "react";
import BelowHeader from "../../components/BelowHeader";
import AnalyticsCard from "../../components/DashboardComponents/AnalyticsCard";
import Chart from "../../components/DashboardComponents/Chart";
import Tables from "../../components/DashboardComponents/Tables";
import { FiFilter } from "react-icons/fi";
import Header from "../../components/CommonComponents/Header";

const Dashboard = () => {
  return (
    <div className=" min-h-screen flex flex-col flex-grow bg-commonBgColor p-7">

      <Header
        title="Overview"
        subtitle=""
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />

      {/* Below Header */}
      <BelowHeader
        title="Analytics"
        subtitle="This information is from October 30 - November 30"
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
