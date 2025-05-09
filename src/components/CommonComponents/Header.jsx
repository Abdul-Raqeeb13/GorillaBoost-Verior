import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({ title, subtitle, profileImage, onToggleSidebar }) => {
  return (
    <header className="bg-commonBgColor text-white shadow-sm p-4 px-5 ps-9 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      
      {/* Left Section: Toggle (sm only) + Title */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button: show on small screens only */}
        <button
          className="lg:hidden p-2 rounded-md bg-extraLightGray text-white"
          onClick={onToggleSidebar}
        >
          <FaSearch size={20} />
        </button>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <button className="p-2 rounded-full hover:bg-gray-100 text-white hover:text-black transition">
          <FaSearch size={18} />
        </button>

        <button className="w-full sm:w-auto px-4 py-2 bg-redColor text-white rounded-md text-sm">
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
