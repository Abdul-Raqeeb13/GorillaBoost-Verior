import React from 'react';

const DynamicButton = ({
  text,
  color,        // e.g., 'bg-blue-500'
  px,           // e.g., 'px-4'
  py,           // e.g., 'py-2'
  fontSize,     // e.g., 'text-sm'
  width,        // e.g., 'w-full'
  height,       // e.g., 'h-10'
  rounded,      // e.g., 'rounded-lg'
  textColor = 'text-white',  // default text color
  shadow = 'shadow-md',
  onClick,
  additionalClasses = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${color} ${px} ${py} ${fontSize}
        ${width} ${height} ${rounded}
        ${textColor} ${shadow} 
        hover:opacity-90 transition duration-200
        ${additionalClasses}
      `}
    >
      {text}
    </button>
  );
};

export default DynamicButton;
