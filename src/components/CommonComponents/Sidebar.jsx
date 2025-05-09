import React from "react";
import { NavLink } from "react-router-dom";

function DefaultSidebar({ isExpanded, setIsExpanded }) {
  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  const getLinkClasses = ({ isActive }) =>
    `w-full flex items-center px-4 py-1 rounded transition-all ${
      isActive ? "bg-extraLightGray" : "hover:bg-gray-700"
    }`;

  return (
    <div
      className={`hidden lg:flex fixed top-0 left-0 h-screen transition-all duration-300
        ${isExpanded ? "w-[250px]" : "w-[72.75px]"}
        flex-col bg-sidebarBgColor shadow-xl z-50`}
    >
      {/* Top Section */}
      <div className="flex items-center w-full h-20 px-4">
        <div className="flex items-center w-full gap-3">
          <div className="w-[34.24px] h-[34.24px] rounded-[4.28px] bg-[rgba(246,105,77,1)] text-white text-sm font-bold flex items-center justify-center select-none">
            V
          </div>
        </div>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col items-center gap-1 w-full px-2">
        {/* Toggle Button */}
        <button
          className="hover:bg-gray-700 w-full flex items-center px-4 pb-2 rounded transition-all"
          onClick={toggleSidebar}
        >
          <img src="/assets/i1.svg" className="w-5 h-5" alt="Toggle" />
          {isExpanded && <span className="ml-3 text-white text-sm">Toggle</span>}
        </button>

        <NavLink to="/notifications" className={getLinkClasses}>
          <img src="/assets/bell.svg" className="w-5 h-5" alt="Notifications" />
          {isExpanded && <span className="ml-3 text-white text-sm">Notifications</span>}
        </NavLink>

        <NavLink to="/" className={getLinkClasses}>
          <img src="/assets/Vector (8).svg" className="w-5 h-5" alt="Notifications" />
          {isExpanded && <span className="ml-3 text-white text-sm">Dashboard</span>}
        </NavLink>

        <NavLink to="/brandmanagement" className={getLinkClasses}>
          <img src="/assets/Vector (9).svg" className="w-5 h-5" alt="Notifications" />
          {isExpanded && <span className="ml-3 text-white text-sm">Brand Management</span>}
        </NavLink>

        <NavLink to="/menu2" className={getLinkClasses}>
          <img src="/assets/Vector (2).svg" className="w-5 h-5" alt="Menu 2" />
          {isExpanded && <span className="ml-3 text-white text-sm">Menu 2</span>}
        </NavLink>

        <NavLink to="/menu3" className={getLinkClasses}>
          <img src="/assets/Vector (3).svg" className="w-5 h-5" alt="Menu 3" />
          {isExpanded && <span className="ml-3 text-white text-sm">Menu 3</span>}
        </NavLink>

        <NavLink to="/menu4" className={getLinkClasses}>
          <img src="/assets/Vector (4).svg" className="w-5 h-5" alt="Menu 4" />
          {isExpanded && <span className="ml-3 text-white text-sm">Menu 4</span>}
        </NavLink>

        <NavLink to="/menu5" className={getLinkClasses}>
          <img src="/assets/Vector (5).svg" className="w-5 h-5" alt="Menu 5" />
          {isExpanded && <span className="ml-3 text-white text-sm">Menu 5</span>}
        </NavLink>
      </div>

      <div className="flex-grow" />

      {/* Bottom Icons */}
      <div className="px-2 mb-4 mt-auto flex flex-col gap-1">
        <NavLink to="/help" className={getLinkClasses}>
          <img src="/assets/Component 1.svg" className="w-5 h-5" alt="Help" />
          {isExpanded && <span className="ml-3 text-white text-sm">Help</span>}
        </NavLink>

        <NavLink to="/logout" className={getLinkClasses}>
          <img src="/assets/Component 2.svg" className="w-5 h-5" alt="Logout" />
          {isExpanded && <span className="ml-3 text-white text-sm">Logout</span>}
        </NavLink>
      </div>

      {/* Profile Section */}
      <div className="flex items-center w-full px-4 mb-6">
        <div className="flex items-center gap-3 w-full relative">
          <div className="w-[34.24px] h-[34.24px] rounded-[4.28px] bg-[#1467b3] text-white text-sm font-bold flex items-center justify-center select-none">
            AK
          </div>
          <span className="absolute bottom-[2px] right-[10px] w-[8px] h-[8px] bg-green-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
}

export default DefaultSidebar;
