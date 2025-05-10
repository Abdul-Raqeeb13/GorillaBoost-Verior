import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-commonBgColor  text-white shadow-sm mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center ">
      
      {/* Left Section: Toggle (sm only) + Title */}
      <div className="flex items-center ">
       
        <div>
          <p className="text-lg sm:text-md font-semibold">AI-Powered Asset Library </p>
            <p className="text-sm text-gray-400">Choose the Type of Asset You Want to Create with AI</p>
        </div>
      </div>

      {/* Right Section */}

        <button className="w-full flex flex-row gap-2 items-center sm:w-auto px-4 py-2 bg-redColor text-white rounded-md text-sm">
                <img src="/assets/BtnIcon.svg" alt="" srcset="" />
          Generate Now
        </button>


    </header>
  );
};

export default Header;
