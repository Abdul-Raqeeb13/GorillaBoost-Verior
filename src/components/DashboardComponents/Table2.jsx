import React from 'react';
import BelowHeader from '../BelowHeader';
import {SlCalender} from "react-icons/sl";
const ProgressBar = ({ label, value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100); // Clamp between 0–100

  return (
    <div className="mb-5 w-full relative">
      <div className="w-full bg-extraLightGray  rounded-md h-12 relative overflow-hidden flex items-center ">
        {/* Label on the left */}
        <span className="text-20 text-white font-bold absolute left-3 z-10  ">{label}</span>

        {/* Filled progress bar */}
        <div
          className="bg-redColor h-12 rounded-md "
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
    <div className="w-full p-4 bg-lightGray rounded-lg shadow-md overflow-hidden">
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
      <div className=" mt-5 ">

        {/* Horizontal Progress Bars */}
        <ProgressBar label="Impressions" value={80}  />
        <ProgressBar label="Clicks" value={40} />
        <ProgressBar label="Conversions" value={20} />
      </div>
    </div>
  );
}

export default Table2;
