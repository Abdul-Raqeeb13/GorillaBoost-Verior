import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  // defs,
} from 'recharts';
import { format } from 'date-fns';
import BelowHeader from '../BelowHeader';
import { SlCalender } from "react-icons/sl";

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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded shadow-md">
        <p className="font-semibold">{label}</p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const FlowChart = () => {
  const [data] = useState(staticData);

  const formattedData = data.map(item => ({
    ...item,
    time: format(new Date(item.time), 'MMM dd'),
  }));

  return (
    <div className="w-full h-96 bg-lightGray p-5 rounded-lg shadow-md">
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

      <ResponsiveContainer className="mt-5" width="100%" height="70%">
        <LineChart data={formattedData}>
          <defs>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#ccc' }} />
          <YAxis domain={[0, 3.5]} tick={{ fontSize: 12, fill: '#ccc' }} />

          <Tooltip content={<CustomTooltip />} />

          {/* Area for fill under the line */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#lineFill)"
          />

          {/* Actual red line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 4, stroke: '#ef4444', strokeWidth: 2, fill: '#fff' }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlowChart;
