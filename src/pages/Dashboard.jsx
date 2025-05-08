import React from "react";
import Header from "../components/Header";
import DefaultSidebar from "../components/CommonComponents/Sidebar";
import BelowHeader from "../components/BelowHeader";
import AnalyticsCard from "../components/DashboardComponents/AnalyticsCard";
import FlowChart from "../components/DashboardComponents/FlowChart";
import Chart from "../components/DashboardComponents/Chart";
import Tables from "../components/DashboardComponents/Tables";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar - hidden on small screens */}
            <div className="hidden lg:block w-[72.75px]">
                <DefaultSidebar />
            </div>

            {/* Main Area - vertical scrollable content */}
            <div className="flex-1 flex flex-col">
                {/* Wrap content in a scrollable div */}
                <div className="flex flex-col w-full">
                    {/* Header */}
                    <Header
                        title="Overview"
                        subtitle=""
                        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
                    />

                    {/* Below Header */}
                    <BelowHeader
                        title="Job Listings"
                        subtitle="Filter based on your preferences"
                        icon=""
                        btnName="Filter"
                        color="bg-cardColor"
                        px="px-5"
                        py="py-0"
                    />

                    {/* Main Content */}
                    <main className="p-4 sm:p-6 bg-cardColor flex-grow">
                        <AnalyticsCard />
                        <Chart />
                        <Tables />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
