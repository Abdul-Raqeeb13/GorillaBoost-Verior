import { Typography } from "@material-tailwind/react";
import { FiGlobe } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Button from '../CommonComponents/Button';

function BMFooter() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between p-6 gap-4 mt-5 bg-bmComponentBgColor rounded-lg shadow-md w-full">
        {/* Logo */}
        <div className="p-2 rounded-full bg-gray-600 bg-opacity-40">
          <FiGlobe className="w-6 h-6 text-white" />
        </div>

        {/* Heading */}
        <Typography className="text-sm font-semibold text-white whitespace-nowrap">
          Set Up More Options
        </Typography>

        {/* Submit Button */}
        <div className="flex items-center ml-auto">
          <button
            className="bg-commonBGColor px-10 py-2 text-sm text-red-500 rounded-md"
            onClick={() => alert('Clicked + Add')}
          >
            + Add
          </button>
        </div>
      </div>

      {/* New button aligned to bottom right */}
      <div className="w-full flex justify-end my-4">
        <button
          className="bg-redColor px-8 py-2 text-sm text-white rounded-md shadow-md"
           onClick={() => navigate("/seebrands")}
        >
          Create Brand
        </button>
      </div>
    </>
  );
}

export default BMFooter;
