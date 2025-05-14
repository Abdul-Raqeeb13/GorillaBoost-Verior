import React from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import StepsCard from "./StepsCard";

const Step2 = ({ onNext }) => {

  const cardData = [
    {
      id: 1,
      image: "../assets/MetaLarge.svg",
      title: "Meta",
      subtitle: "Score your Facebook and Instagram Ads."
    },
    {
      id: 2,
      image: "../assets/goodleAdsLarge.svg",
      title: "Meta",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 3,
      image: "../assets/MetaLarge.svg",
      title: "Meta",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 4,
      image: "../assets/MetaLarge.svg",
      title: "Meta",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 5,
      image: "../assets/goodleAdsLarge.svg",
      title: "Meta",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 6,
      image: "../assets/googleAds.svg",
      title: "Meta",
      subtitle: "Single-image ads without any movement."
    },
  ];

  return (
    <div className="flex flex-col justify-between"> {/* Full screen height, with flex layout */}
      <div>
        <StepsHeader image="../assets/stepperi2.svg" title="Select Ad Platform" subtitle="Select the ad platform where the creatives will be advertised." />
        
        {/* 3 cards per row with gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardData.map((card) => (
            <StepsCard
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>

      {/* Button at the bottom */}
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

export default Step2;
