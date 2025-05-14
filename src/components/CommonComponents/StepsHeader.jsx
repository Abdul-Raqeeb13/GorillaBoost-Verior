import React from 'react';

function StepsHeader({ image, title, subtitle }) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-16 h-16 bg-redColor clip-hexagon flex items-center justify-center">
        <img src={image} alt="Step Icon" className="w-8 h-8" />
      </div>
      <div>
        <h2 className="text-32 font-semibold text-white">{title}</h2>
        <p className="text-20 font-medium text-paraTextColor">{subtitle}</p>
      </div>
    </div>
  );
}

export default StepsHeader;
