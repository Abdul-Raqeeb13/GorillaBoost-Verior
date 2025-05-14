import React from 'react';
import BelowHeader from '../../BelowHeader';
import {SlCalender} from "react-icons/sl";
const ProgressBar = ({ label, value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100); // Clamp between 0–100

  return (
    <div className="mb-4 w-full relative">
      <div className="w-full rounded-md h-8 relative overflow-hidden flex items-center px-3">
        {/* Label on the left */}
        <span className="text-sm text-white font-medium absolute left-3 z-10">{label}</span>

        {/* Filled progress bar */}
        <div
          className="bg-redColor h-8 rounded-md transition-all duration-500 absolute top-0 left-0"
          style={{ width: `${clampedValue}%` }}
        ></div>

        {/* Value on the right (outside fill) */}
        <span className="text-sm text-white font-medium absolute right-3 z-10">{clampedValue}%</span>
      </div>
    </div>
  );
};



function Table2() {
  return (
<div className="w-full h-full p-4 bg-lightGray rounded-lg shadow-md overflow-hidden flex flex-col">
      <BelowHeader
  title="Ad Fatigue Trends"
  subtitle="Audience Engagement Decline."
  btnName="Monthly"
  icon={<SlCalender />}
  options={[
    { label: "Yearly", value: "yearly" },
    { label: "Monthly", value: "monthly" },
    { label: "Daily", value: "daily" },
  ]}
  onSelectOption={(option) => console.log("Selected:", option)}
/>

      {/* Ad Fatigue Trends Box */}
      <div className="max-w-2xl  mt-5 rounded-lg ">

        {/* Horizontal Progress Bars */}
        <ProgressBar label="FaceBook" value={80}  />
        <ProgressBar label="YouTube" value={60} />
        <ProgressBar label="Instagram" value={40} />
        <ProgressBar label="LinkedIn" value={20} />
      </div>
    </div>
  );
}

export default Table2;
