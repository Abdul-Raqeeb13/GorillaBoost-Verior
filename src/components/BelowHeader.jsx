import React from "react";

const BelowHeader = ({ title, subtitle, btnName, color, px, py }) => {
  return (
    <header
      className={`${color} shadow-sm text-white ${px} ${py} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0`}
    >
      {/* Left: Title & Subtitle */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-400">{subtitle}</p>
        )}
      </div>

      {/* Right: Filter Button */}
      <button className="flex items-center space-x-2 px-4 py-2 bg-customBlue text-gray-700 rounded-full hover:bg-gray-200 transition">
        {/* Filter Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        <span className="text-sm font-medium">{btnName}</span>
      </button>
    </header>
  );
};

export default BelowHeader;
