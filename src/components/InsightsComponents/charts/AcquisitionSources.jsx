import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Applications', value: 400 },
  { name: 'Interviews', value: 300 },
  { name: 'Offers', value: 200 },
  { name: 'Testing', value: 100 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const PieChartComponent = () => {
  return (
    <div className="relative w-full h-96 bg-lightGray p-4 rounded-lg shadow-md flex">
      {/* Pie Chart Section */}
      <div className="w-3/5 h-full relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-sm font-semibold text-center leading-tight">
            Ad Format<br />Distribution
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              labelLine={false}
              label={({ value }) => `${value}`} // 👈 shows value inside each segment              padAngle={4}
              cornerRadius={8}
              stroke="#222230"
              strokeWidth={7}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section */}
      <div className="w-1/3 flex flex-col justify-center pl-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mb-3">
            <div
              className="w-3 h-3 rounded-full mr-3"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-white text-sm font-medium">{entry.name}</span>
            <span className="ml-auto text-sm text-white font-semibold">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
