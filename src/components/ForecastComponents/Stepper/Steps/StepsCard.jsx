import React from "react";

const StepsCard = ({ image, title, subtitle }) => {
  return (
    <div className="bg-extraLightGray rounded-lg px-4 p-6  flex flex-wrap flex-col items-center text-center text-white w-60 grow">
      <img src={image} alt="Card" className="mb-4" />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  );
};

export default StepsCard;
