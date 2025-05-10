import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function FooterCreativeInsights() {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions((prev) => !prev);

  const options = [
    { title: "Meta Ads", img: "/assets/meta.svg", buttonText: "AD Account Connect +" },
    { title: "Google Ads", img: "/assets/googleAds.svg", buttonText: "AD Account Connect +" },
    { title: "LinkedIn Ads", img: "/assets/linkedin.svg", buttonText: "AD Account Connect +" },
    { title: "Pinterest Ads", img: "/assets/pintrest.svg", buttonText: "AD Account Connect +" },
  ];

  return (
    <div className="w-full">
      {/* Main Footer Box */}
      <div className="flex items-center justify-between p-6 gap-4 mt-5 bg-lightGray rounded-lg shadow-md w-full">
        {/* Icon */}
        <div className="p-2 rounded-full bg-iconBgColor bg-opacity-40">
          <FiGlobe className="w-6 h-6 text-white" />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-white">
            Link Your Ad Accounts to Verior for Smart Creative Analysis
          </h2>
          <p className="text-sm text-gray-300">
            Use the options below to link your ad accounts and generate your Creative Insights Report.
          </p>
        </div>

        {/* "+ Add" Button */}
        <div className="ml-auto">
          <button
            className="bg-commonBGColor px-6 py-2 text-sm text-red-500 rounded-md"
            onClick={toggleOptions}
          >
            {showOptions ? "× Close" : "+ Add"}
          </button>
        </div>
      </div>

      {/* Toggleable 4 Boxes */}
      {showOptions && (
        <div className="flex flex-wrap gap-4 mt-4 bg-lightGray">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between w-full sm:w-[48%] p-4 bg-extraLightGray rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-iconBgColor ">
                  <img src={opt.img} alt="" srcset="" />
                </div>
                <h3 className="text-white text-base">{opt.title}</h3>
              </div>
              <button className="bg-redColor px-4 py-2 text-white text-sm rounded-md">
                {opt.buttonText}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* "Continue" Button */}
      <div className="w-full flex justify-center mt-6">
        <button
          className="bg-redColor px-8 py-2 text-sm text-white rounded-md shadow-md"
          onClick={() => navigate("/seebrands")}
        >
          Generate the Creative Insights Report
        </button>
      </div>
    </div>
  );
}

export default FooterCreativeInsights;
