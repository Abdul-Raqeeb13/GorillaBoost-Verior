import React, { useState } from 'react';
import { p } from '@material-tailwind/react';

function StepsHeaderWithButton({ image, title, subtitle, buttons = [] }) {

      const [activeButton, setActiveButton] = useState(null); // To track the active button


  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left side: Icon, Title, Subtitle */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-redColor clip-hexagon flex items-center justify-center">
          <img src={image} alt="Step Icon" className="w-8 h-8" />
        </div>
        <div>
          <p  className="text-white font-medium text-40">{title}</p>
          <p  className="text-paraTextColor text-20 font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right side: Multiple Buttons */}
      
       {/* Right side: Multiple Buttons */}
      <div className="flex gap-3 text-white">
        {buttons.map(({ text, icon: Icon, onClick, img }, index) => {
          const isActive = activeButton === index;
          return (
            <button
              key={index}
              onClick={() => {
                setActiveButton(isActive ? null : index); // Toggle active state
                onClick(); // Call the onClick handler
              }}
              className={`flex items-center gap-2 px-2 py-3 rounded-md ${
                isActive
                  ? 'bg-redColor text-white' // Active button color
                  : 'bg-extraLightGray '
              }`}
            >
              <img src={img} alt="" className='w-4 h-4' />
              <span className='font-normal text-16'>{text}</span>
            </button>
          );
        })}
      </div>


    </div>
  );
}

export default StepsHeaderWithButton;
