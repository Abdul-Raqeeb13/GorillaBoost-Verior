import React from 'react';

const StepCardWithOptions = ({ img, cardId }) => {
  return (
    <div className="p-4 bg-extraLightGray rounded-xl shadow-md">
      <div className="flex items-center flex-col space-y-4" key={cardId}>
        {/* Image section */}
        <img src={img} alt="Step Icon" className="w-full h-auto rounded-md" />

        {/* Bottom section with icon and text on the same line */}
<div className='flex space-x-12 text-white'>
  <div className="flex items-center space-x-1">
    <img src="/assets/convert.svg" alt="Convert Icon" className="" />
    <p className="text-12 font-medium">Convert</p>
  </div>
  <div className="flex items-center space-x-1">
    <img src="/assets/editicon.svg" alt="Edit Icon" className="" />
    <p className="text-12 font-medium">Edit</p>
  </div>
  <div className="flex items-center space-x-1">
    <img src="/assets/download.svg" alt="Download Icon" className="" />
    <p className="text-12 font-medium">Download</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default StepCardWithOptions;
