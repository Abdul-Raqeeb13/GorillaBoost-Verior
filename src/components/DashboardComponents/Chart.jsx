import React from 'react';
import FlowChart from './FlowChart';
import PieChartComponent from './PieChart';

const Charts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4   mt-5">
      {/* FlowChart and PieChart stacked on mobile, side-by-side on large screens */}
      <div className="w-full lg:w-1/2">
        <FlowChart />
      </div>
      <div className="w-full lg:w-1/2">
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Charts;
