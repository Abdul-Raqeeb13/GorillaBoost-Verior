import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const InspirationBelowHeader = () => {
  return (
    <header className="bg-commonBgColor text-white shadow-sm  flex flex-col sm:flex-row sm:justify-between sm:items-center ">
      
      {/* Left Section: Toggle (sm only) + Title */}
      <div className="flex items-center ">

        <div>
          <h2 className="text-lg sm:text-xl font-semibold">List of brands</h2>
            <p className="text-sm text-gray-400">View your projects and start new ones within the chosen brand</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <button className="p-2 rounded-md bg-extraLightGray text-white ">
          <FaSearch size={14} />
        </button>

        <button className="w-full flex flex-row gap-2 sm:w-auto px-4 py-2 bg-redColor text-white rounded-md text-sm">
                <img src="/assets/BtnIcon.svg" alt="" srcset="" />
          
          Generate Now
        </button>


      </div>
    </header>
  );
};

export default InspirationBelowHeader;
