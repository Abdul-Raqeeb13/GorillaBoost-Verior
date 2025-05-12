import React from 'react';

function StepsHeader({ image, title, subtitle }) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <img src={image} alt="Step Icon" className="w-10 h-10 p-2 rounded-full bg-redColor" />
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-paraTextColor">{subtitle}</p>
      </div>
    </div>
  );
}

export default StepsHeader;
