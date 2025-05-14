import React from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import StepsCard from "../../Stepper/Steps/StepsCard";

const Step1 = ({ onNext }) => {
  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 2,
      image: "../assets/videoIcon.svg",
      title: "Video Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 3,
      image: "../assets/videoIcon.svg",
      title: "Video Ad",
      subtitle: "Single-image ads without any movement.",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header + Cards */}
      <div>
        <StepsHeader
          image="../assets/stepperi1.svg"
          title="Select Ad Type to Score"
          subtitle="Select an Ad Creative to Evaluate and Score"
        />

        {/* 3 Cards in a row using grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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

      {/* Next Button at the bottom */}
      <div className="flex justify-end "> {/* Push the button to the bottom */}
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
