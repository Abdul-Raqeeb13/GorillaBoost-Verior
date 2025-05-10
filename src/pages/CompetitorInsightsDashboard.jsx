// Dashboard.jsx

import React from "react";
import BelowHeader from "../components/BelowHeader";
import AnalyticsCard from "../components/DashboardComponents/AnalyticsCard";
import FlowChart from "../components/DashboardComponents/FlowChart";
import Chart from "../components/DashboardComponents/Chart";
import Tables from "../components/DashboardComponents/Tables";
import { FiFilter } from "react-icons/fi";
import Header from "../components/CommonComponents/Header";
import CompetitorInsights from "./competitorInsights";
import CompetitorDashboardCard from "../components/InsightsComponents/DashbaordCard";
import GenderDistribution from '../components/InsightsComponents/charts/genderDistribution';
import AgeDistribution from '../components/InsightsComponents/charts/AgeDistribution' ;
import SocialMediaUsage from '../components/InsightsComponents/charts/SocialMediaUsage' ;
import AcquisitionSources from '../components/InsightsComponents/charts/AcquisitionSources' ;
import UserLocationMap from '../components/InsightsComponents/charts/UserLocationMap' ;
import UsersPerCountry from '../components/InsightsComponents/charts/UsersPerCountry' ;
const CompetitorInsightsDashboard = () => {
  return (
    <div className=" min-h-screen flex flex-col flex-grow bg-commonBgColor ">


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

      <CompetitorDashboardCard />
       <div className="bg-gray-950 min-h-screen mt-5 grid grid-cols-2 gap-6 text-white">
      <GenderDistribution />
      <AgeDistribution />
      <SocialMediaUsage />
      <AcquisitionSources />
      <UserLocationMap />
      <UsersPerCountry />
    </div>
    </div>
  );
};

export default CompetitorInsightsDashboard;
