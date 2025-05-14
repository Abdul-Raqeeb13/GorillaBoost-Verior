import React from "react";

const StepsCard = ({ image, title, subtitle }) => {
  return (
    <div className="bg-extraLightGray rounded-lg py-5 px-4 flex flex-col items-center text-center text-white grow">
      <img src={image} alt="Card" className="mb-4" />
      <h2 className="text-24 font-medium mb-1">{title}</h2>
      <p className="text-white font-ibm font-medium text-18 ">{subtitle}</p>
    </div>
  );
};


export default StepsCard;
