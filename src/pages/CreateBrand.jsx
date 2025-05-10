import React from "react";
import BelowHeader from "../components/BrandManagementComponents/BelowHeader";
import BelowHeader2 from "../components/BrandManagementComponents/BelowHeader2";
import BMCard from "../components/BrandManagementComponents/BMCard";
import BMFooter from "../components/BrandManagementComponents/BMFooter";
import Header from "../components/CommonComponents/Header";
const BrandManagement = () => {
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"
        title="Lest Setup Your Brand"
        subtitle="Entered your brand info once to auto generated tailored and assets with AI."
        onClose={() => console.log("Close clicked")}
      />

      <BelowHeader2 />

      <div className="my-5 mx-4 text-white text-sm">
        <p>Let’s Add Your Brand – From Your Website or by Hand</p>
      </div>

      {/* Main Content */}
      {/* <main className="bg-commonBgColor flex-grow"> */}
      <BMCard />
      <BMFooter />
      {/* </main> */}
    </div>
  );
};

export default BrandManagement;
