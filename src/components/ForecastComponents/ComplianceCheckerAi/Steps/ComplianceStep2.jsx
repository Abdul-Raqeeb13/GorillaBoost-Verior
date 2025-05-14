import React from "react";
import StepsHeader from "../../../CommonComponents/StepsHeader";
import StepsCard from "../../Stepper/Steps/StepsCard";

const Step2 = ({ onNext }) => {
  const cardData = [
    {
      id: 1,
      image: "../assets/meta.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 2,
      image: "../assets/googleAds.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 3,
      image: "../assets/meta.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 4,
      image: "../assets/googleAds.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 5,
      image: "../assets/meta.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
    {
      id: 6,
      image: "../assets/googleAds.svg",
      title: "Static Ad",
      subtitle: "Single-image ads without any movement.",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <StepsHeader
        image="../assets/stepperi1.svg"
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
      />

      {/* Cards: 3 in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <StepsCard
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={onNext}
          className="bg-redColor px-6 py-3 rounded text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
