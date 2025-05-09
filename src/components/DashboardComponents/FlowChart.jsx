import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns'; // Import date-fns for date formatting
import BelowHeader from '../BelowHeader';
import { SlCalender } from "react-icons/sl";

// Static data with dates and values between 0 to 3
const staticData = [
  { time: '2025-05-01', value: 0.5 },
  { time: '2025-05-02', value: 1.2 },
  { time: '2025-05-03', value: 2.0 },
  { time: '2025-05-04', value: 2.5 },
  { time: '2025-05-05', value: 1.8 },
  { time: '2025-05-06', value: 0.9 },
  { time: '2025-05-07', value: 1.4 },
  { time: '2025-05-08', value: 2.1 },
  { time: '2025-05-09', value: 3.0 },
  { time: '2025-05-10', value: 0.7 },
];

const FlowChart = () => {
  const [data, setData] = useState(staticData);

  // Format the date for the X-axis to display month and day
  const formattedData = data.map(item => ({
    ...item,
    time: format(new Date(item.time), 'MMM dd'), // Format as "Month Day" (e.g., "May 01")
  }));

  return (
    <div className="w-full h-96 bg-lightGray p-4 rounded-lg shadow-md">
         <BelowHeader
  title="Job Listings"
  subtitle="Filter based on your preferences"
  btnName="Monthly"
  icon={<SlCalender />}
  options={[
    { label: "Yearly", value: "yearly" },
    { label: "Monthly", value: "monthly" },
    { label: "Daily", value: "daily" },
  ]}
  onSelectOption={(option) => console.log("Selected:", option)}
/>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 3]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FF0000" strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlowChart;
