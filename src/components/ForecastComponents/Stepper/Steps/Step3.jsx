import React from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import { Input, Typography } from "@material-tailwind/react";
import { FiGlobe } from "react-icons/fi";
import StepsCard from "./StepsCard";

const cardData = [
  {
    image: "/assets/conversion.svg",
    title: "Conversion",
    subtitle:
      "Enhance your ad creatives to boost conversions and deliver clear, trackable outcomes.",
  },
  {
    image: "/assets/brand-awareness.svg",
    title: "Brand Awareness",
    subtitle:
      "Assess and improve your creatives to boost brand visibility and memorability.",
  },
  {
    image: "/assets/engagement.svg",
    title: "Engagement",
    subtitle:
      "Rate your creatives to boost engagement and spark more likes, comments, and shares.",
  },
];

const Step3 = ({ onNext }) => {
  return (
    <div className="relative flex flex-col h-full text-white">
      {/* Scrollable / growing content */}
      <div className="flex-grow overflow-auto">
        <StepsHeader
          image="../assets/stepperi1.svg"
          title="Select Ad Type to Score"
          subtitle="Select an Ad Creative to Evaluate and Score"
        />

        {/* 3 Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cardData.map((card, index) => (
            <StepsCard
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>

        {/* Input Field */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-6 gap-4 mt-5 bg-extraLightGray w-full rounded-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-lightGray">
              <FiGlobe className="w-6 h-6 text-white" />
            </div>
            <Typography className="text-18 font-bold text-white">
              Extract Data From Web
            </Typography>
          </div>

          <div className="w-full lg:flex-1">
            <div className="p-2 rounded-lg bg-lightGray w-full">
              <Input
                maxLength={16}
                label="Enter your URL"
                className="w-full border-none text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Button at Bottom Right */}
      <div className="mt-20 flex justify-end "> {/* Push the button to the bottom */}
        <button
          onClick={onNext}
          className="bg-redColor w-32 h-12 rounded-md font-bold text-20 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
