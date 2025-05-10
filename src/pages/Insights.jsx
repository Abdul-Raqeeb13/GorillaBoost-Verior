import React from "react";
import Header from "../components/CommonComponents/Header";
import BelowHeader from "../components/InsightsComponents/BelowHeader";
import TextImgCard from "../components/InsightsComponents/TextImgCard";
const Insights = () => {
  return (
    <div className="bg-commonBgColor min-h-screen p-7 flex flex-col">

      <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />

      {/* Below Header */}
      <BelowHeader
        title="Optimize and Analyze Your Brand Strategy"
        subTitle="Unlock Data-Driven Insights for Brand Growth."
      />

      <TextImgCard/>


    </div>
  );
};

export default Insights;
