import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({ title, subtitle, profileImage, onToggleSidebar }) => {
  return (
    <header className="bg-commonBgColor text-white shadow-sm  flex flex-col sm:flex-row sm:justify-between sm:items-center ">

      {/* Left Section: Toggle (sm only) + Title */}
      <div className="flex items-center ">
        {/* Sidebar Toggle Button: show on small screens only */}
        <button
          className="lg:hidden p-2 rounded-md bg-extraLightGray text-white"
          onClick={onToggleSidebar}
        >
          <FaSearch size={20} />
        </button>

        <div>
          <h2 className=" font-ibm font-semibold text-30">{title}</h2>      
          {subtitle && (
            <p className="font-normal text-18">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <button className="p-2 rounded-md bg-extraLightGray text-white ">
          <FaSearch size={14} />
        </button>

        <button className="w-full flex flex-row gap-2 sm:w-auto px-4 py-2 bg-redColor text-white rounded-md font-ibm font-semibold text-16.37">
          <img src="/assets/BtnIcon.svg" alt="" srcset="" />

          Generate Now
        </button>

        <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
