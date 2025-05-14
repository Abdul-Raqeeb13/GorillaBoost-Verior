import React from "react";

// 🔷 Shared Header component
const SharedCardHeader = ({ title, subtitle, icons = [] }) => {

  return (
    <div className="flex justify-between items-center mt-3">
      {/* Left: Title + Subtitle (row) */}
      <div className="flex flex-row items-center gap-2">
        <span className="text-white font-bold text-17">{title}</span>
        <span className="text-14 font-medium text-paraTextColor">{subtitle}</span>
      </div>

      {/* Right: Icons (row) */}
      <div className="flex items-center gap-2">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-5 h-5 object-contain" />
        ))}
      </div>
    </div>
  );
};


// 🔷 Card component
const ImgSizesCard = ({ image, title, subtitle }) => (
  <div className=" rounded-lg shadow p-4 mt-5 mb-6 flex flex-col items-center text-center bg-extraLightGray text-white">
    <img src={image} alt={title} className=" object-contain mb-4" />
    <h3 className="text-14 font-bold">{title}</h3>
    <p className="text-10 font-medium">{subtitle}</p>
  </div>
);

// 🔷 Main component


export { SharedCardHeader, ImgSizesCard };
