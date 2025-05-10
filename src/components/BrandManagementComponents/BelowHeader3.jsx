import React from "react";
import { IoSearchOutline, IoGridOutline, IoListOutline } from "react-icons/io5";

const Header = ({ activeView, setActiveView }) => {
  const handleGridView = () => setActiveView("grid");
  const handleListView = () => setActiveView("list");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  mt-5 bg-commonBgColor rounded-lg shadow-md">
      {/* Left Section */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-white">List Of Brands</h2>
        <p className="text-sm text-white">
          View your projects and start new ones within the chosen brand
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
        {/* Search Button */}
        <button className="bg-extraLightGray p-2 rounded-md text-gray-500 w-full sm:w-auto">
          <IoSearchOutline size={20} />
        </button>

        {/* Add New Brand Button */}
        <button className="bg-redColor text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 w-full sm:w-auto">
          + Add New Brand
        </button>

        {/* View Toggle Buttons */}
        <div className="bg-extraLightGray p-2 rounded-md flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleGridView}
            className={`flex items-center justify-center gap-1 px-3 py-1 rounded-lg text-gray-500 ${
              activeView === "grid" ? "bg-red-500 text-white" : "hover:text-red-700"
            } w-full sm:w-auto`}
          >
            <IoGridOutline size={20} />
            <span className="text-sm">Grid</span>
          </button>

          <button
            onClick={handleListView}
            className={`flex items-center justify-center gap-1 px-3 py-1 rounded-lg text-gray-500 ${
              activeView === "list" ? "bg-red-500 text-white" : "hover:text-red-700"
            } w-full sm:w-auto`}
          >
            <IoListOutline size={20} />
            <span className="text-sm">List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
