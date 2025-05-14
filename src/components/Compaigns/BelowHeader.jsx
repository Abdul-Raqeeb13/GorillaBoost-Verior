import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function BelowHeader({ title, subtitle }) {
  const handleFilterSelect = (value) => {
    console.log("Selected Filter:", value);
  };

  return (
    <div className="relative">
      <header className="bg-commonBgColor text-white  flex flex-col sm:flex-row sm:justify-between sm:items-center my-5">
        {/* Left: Dynamic Title and Subtitle */}
        <div>
          <h2 className="text-20 sm:text-xl font-semibold">{title}</h2>
          <p className="text-14 text-paraTextColor my-3">{subtitle}</p>
        </div>

        {/* Right Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-3 sm:mt-0">
          {/* Search */}
          <button className="p-2 rounded-md bg-extraLightGray text-white">
            <FaSearch size={16} />
          </button>

          {/* Filter Dropdown with Material Tailwind */}
          <Menu placement="bottom-end">
            <MenuHandler>
              <button className="flex items-center gap-2 px-4 py-2 bg-extraLightGray text-white rounded-md text-sm">
                <FaFilter />
                Filters
              </button>
            </MenuHandler>
            <MenuList className="bg-extraLightGray text-white shadow-lg p-1 rounded-md w-40">
              {["Monthly", "Yearly", "Daily"].map((label, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => handleFilterSelect(label)}
                  className="hover:bg-blue-100 hover:text-blue-700 px-3 py-2 text-sm rounded-md"
                >
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Generate Button */}
          <button className="px-4 py-2 bg-redColor text-white rounded-md text-sm flex items-center gap-2">
            <img src="/assets/BtnIcon.svg" alt="icon" />
            Generate Now
          </button>
        </div>
      </header>

      {/* Fixed Section Title Below Header */}
      <div>
        <h2 className="text-24 text-white font-semibold">
          Creative Scoring AI
        </h2>
        <p className="text-16 font-medium  text-white">
          A Curated Showcase of Your Photo Advertising Campaigns
        </p>
      </div>
    </div>
  );
}

export default BelowHeader;
