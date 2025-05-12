import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/CommonComponents/Sidebar"
import Header from "../components/CommonComponents/Header"
function DashboardLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />


      {/* Main content shifts based on sidebar width */}


      <main
        className={`transition-all duration-300 flex-1
    ${isExpanded ? "lg:ml-[220px]" : "lg:ml-[72.75px]"}`}
      >



        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
