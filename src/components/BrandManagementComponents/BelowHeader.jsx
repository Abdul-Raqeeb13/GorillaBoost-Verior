import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({ image, title, subtitle, onClose }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4 bg-commonBgColor w-full">
      {/* Image */}
      <img
        src={image}
        alt="Profile"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
      />

      {/* Title and Subtitle */}
      <div className="flex flex-col text-center sm:text-left">
        <h2 className="text-base sm:text-lg font-semibold text-redColor">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center justify-center gap-1 text-sm sm:text-base bg-extraLightGray text-gray-500 hover:text-red-700 px-4 py-2 rounded-md"
      >
        <span>Close</span>
        <IoCloseSharp size={16} />
      </button>
    </div>
  );
};

export default Header;
