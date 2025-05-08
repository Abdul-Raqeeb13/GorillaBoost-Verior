import React from 'react';
import BelowHeader from '../BelowHeader';

const ProgressBar = ({ label, value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100); // Clamp between 0–100

  return (
    <div className="mb-2 w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="w-full bg-progressBarBgColor rounded-full h-4 overflow-hidden">
        <div
          className={`bg-progressForegroundColor h-4 rounded-full`}
          style={{ width: `${clampedValue}%` }}
        ></div>
      </div>
    </div>
  );
};

function Table2() {
  return (
    <div className="w-full bg-customBlue rounded-lg shadow-md overflow-hidden">
      <BelowHeader
        title="Ad Fatigue Trends"
        subtitle="Audience Engagement Decline."
        icon=""
        btnName="Monthly"
        color="bg-customBlue"
        px="px-5"
        py="py-3"
      />

      {/* Ad Fatigue Trends Box */}
      <div className="max-w-2xl mx-auto bg-customBlue rounded-lg shadow-md p-6">

        {/* Horizontal Progress Bars */}
        <ProgressBar label="Impressions" value={80}  />
        <ProgressBar label="Clicks" value={40} />
        <ProgressBar label="Conversions" value={20} />
      </div>
    </div>
  );
}

export default Table2;
