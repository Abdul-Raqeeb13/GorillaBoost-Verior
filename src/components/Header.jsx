import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ title, subtitle, profileImage }) => {
  return (
    <header className="bg-cardColor text-white shadow-sm p-4 px-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      {/* Left Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-400">{subtitle}</p>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        {/* Search Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 text-white hover:text-black transition">
          <FaSearch size={18} />
        </button>

        {/* Generate Now Button */}
        <button className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-full text-sm">
          Generate Now
        </button>

        {/* Profile Picture */}
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
