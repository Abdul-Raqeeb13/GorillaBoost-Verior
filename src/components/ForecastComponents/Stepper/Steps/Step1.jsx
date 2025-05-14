import React from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import StepsCard from "./StepsCard";

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

  ];

  return (
    <div className="relative flex flex-col h-full"> {/* Use flex-col and set h-full */} 
      <div className="flex-grow"> {/* Ensure this section grows but does not push the button down */}
        <StepsHeader
          image="../assets/stepperi1.svg"
          title="Select Ad Type to Score"
          subtitle="Select an Ad Creative to Evaluate and Score"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
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

      {/* Footer with button always positioned at the bottom */}
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

export default Step1;
