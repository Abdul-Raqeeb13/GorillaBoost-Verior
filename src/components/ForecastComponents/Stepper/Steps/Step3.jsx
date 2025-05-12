import React from "react";
import StepsHeader from "./StepsHeader";
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
     <div className="flex flex-col justify-between min-h-screen text-white"> {/* Use flex-col and justify-between */}
      <div>
        <StepsHeader image="../assets/stepperi1.svg" title="Select Ad Type to Score" subtitle="Select an Ad Creative to Evaluate and Score" />
      <div className="flex flex-wrap gap-6">
        {cardData.map((card, index) => (

             <StepsCard
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
        ))}
      </div>

      {/* Input Field */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-6 gap-4 mt-5 bg-extraLightGray w-full rounded-md">
      
      {/* Logo + Heading */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-lightGray">
          <FiGlobe className="w-6 h-6 text-white" />
        </div>
        <Typography className="text-base lg:text-lg font-semibold text-white">
          Extract Data From Web
        </Typography>
      </div>

      {/* Input Field */}
      <div className="w-full lg:flex-1">
        <div className="p-2 rounded-lg bg-lightGray  w-full">
          <Input
            maxLength={16}
            label="Enter your URL"
            className="w-full border-none text-white "
          />
        </div>
      </div>


    </div>
    
    </div>
          {/* Submit Button */}
         <div className="flex justify-end mt-2"> {/* Flex container to align the button */}
        <button
          onClick={onNext}
          className="bg-redColor px-4 py-2 rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>

  );
};

export default Step3;
