import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Applications', value: 400 },
  { name: 'Interviews', value: 300 },
  { name: 'Offers', value: 200 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']; // Blue, Green, Yellow, Red

const PieChartComponent = () => {
  return (
    <div className="relative w-full h-96 bg-lightGray p-4 rounded-lg shadow-md">
      {/* Centered Heading */}
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
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
