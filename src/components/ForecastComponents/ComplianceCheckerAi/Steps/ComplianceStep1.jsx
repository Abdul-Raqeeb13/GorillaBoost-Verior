import React from "react";
import StepsHeader from "../../Stepper/Steps/StepsHeader";
import StepsCard from "../../Stepper/Steps/StepsCard";

const Step1 = ({ onNext }) => {

  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 2,
      image: "../assets/videoIcon.svg",
      title: "Video Ad",
      subtitle: "Single-image ads without any movement."
    },
    {
      id: 3,
      image: "../assets/videoIcon.svg",
      title: "Video Ad",
      subtitle: "Single-image ads without any movement."
    },

  ];

  return (
    <div className="flex flex-col justify-between min-h-screen"> {/* Use flex-col and justify-between */}
      <div>
        <StepsHeader image="../assets/stepperi1.svg" title="Select Ad Type to Score" subtitle="Select an Ad Creative to Evaluate and Score" />
        
        <div className="flex gap-8 flex-wrap">
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

      {/* Button positioned at the bottom-right */}
      <div className="flex justify-end"> {/* Flex container to align the button */}
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

export default Step1;
