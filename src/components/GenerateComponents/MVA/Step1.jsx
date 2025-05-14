import React from "react";
import StepsHeader from "../../CommonComponents/StepsHeader";
// import StepsCard from "./StepsCard";
import { SharedCardHeader, ImgSizesCard } from "../smallCard";

const Step1 = ({ onNext }) => {

  const cardData = [
    {
      id: 1,
      image: "/assets/landscape.svg",
      title: "Post size",
      subtitle: "(1200x628)"
    },
    {
      id: 2,
      image: "/assets/landscape.svg",
      title: "Post Size",
      subtitle: "(1200x628)"
    },
    {
      id: 3,
      image: "/assets/landscape.svg",
      title: "Post Size",
      subtitle: "(1200x628)"
    },
    {
      id: 4,
      image: "/assets/landscape.svg",
      title: "Post Size",
      subtitle: "(1200x628)"
    },
    {
      id: 5,
      image: "/assets/landscape.svg",
      title: "Post Size",
      subtitle: "(1200x628)"
    },
    // Add more card objects here if needed
  ];

return (
  <div className=" flex flex-col h-full ">
    {/* <div className="flex-grow"> */}
      <StepsHeader
        image="../assets/stepperi1.svg"
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
      />

      <SharedCardHeader
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
        icons={[
          "../assets/stepperi1.svg",
          "../assets/stepperi2.svg",
          "../assets/stepperi3.svg",
        ]}
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardData.map((card) => (
          <ImgSizesCard
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      <SharedCardHeader
        title="Select Ad Type to Score"
        subtitle="Select an Ad Creative to Evaluate and Score"
        icons={[
          "../assets/stepperi1.svg",
          "../assets/stepperi2.svg",
          "../assets/stepperi3.svg",
        ]}
      />

      {/* Second Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardData.map((card) => (
          <ImgSizesCard
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      {/* Bottom Right Button */}
      <div className="flex justify-end mt-auto"> {/* Push the button to the bottom */}
        <button
          onClick={onNext}
          className="bg-redColor w-32 h-12 rounded-md font-bold text-20 text-white"
        >
          Next
        </button>
      </div>
    </div>
  // </div>
);

};

export default Step1;
