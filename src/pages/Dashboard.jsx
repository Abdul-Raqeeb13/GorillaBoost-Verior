// Dashboard.jsx

import React from "react";
import BelowHeader from "../components/BelowHeader";
import AnalyticsCard from "../components/DashboardComponents/AnalyticsCard";
import FlowChart from "../components/DashboardComponents/FlowChart";
import Chart from "../components/DashboardComponents/Chart";
import Tables from "../components/DashboardComponents/Tables";
import { FiFilter } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-grow bg-commonBgColor">

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

      {/* Main Content */}
      <main className="p-4 sm:p-6 bg-commonBgColor flex-grow">
        <AnalyticsCard />
        <Chart />
        <Tables />
      </main>
    </div>
  );
};

export default Dashboard;
