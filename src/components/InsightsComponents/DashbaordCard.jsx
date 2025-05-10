import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
// import Card from '../DashboardComponents/Card'
const CompetitorDashboardCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = [
      { title: 'Total Views', value: '5,000', trend: '+5%', value2: "3.2", color: "text-green-500", week: "Last Week" },
      { title: 'New Users', value: '1,200', trend: '+3%', value2: "3.2", color: "text-red-500", week: "Last Week" },
      { title: 'Revenue', value: '$12,000', trend: '+8%', value2: "3.2", color: "text-green-500", week: "Last Week" },
    ];
    setData(dummyData);
  }, []);

  return (
   <div className="flex flex-wrap grow gap-4 mt-5 justify-center sm:justify-start">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          value={item.value}
          trend={item.trend}
          value2={item.value2}
          color={item.color}
          week = {item.week}
          icon={<ArrowUpIcon className="w-4 h-4" />}
        />
      ))}
    </div>
  );
};





const Card = ({ title, value, trend, icon, color, week }) => {
  return (
    <div className="w-full  md:w-[48%] lg:w-[32.2%] h-[177px] rounded-2xl p-5 bg-lightGray flex flex-col justify-between shadow-xl transition-transform hover:scale-105 text-white">
      <span className="text-sm py-2 px-3 rounded bg-extraLightGray inline-block w-fit">{title}</span>

      <div className="text-3xl font-bold">{value}</div>

      {trend && (
        <div className={`text-sm flex items-center ${color}`}>
          {icon && <span className="mr-1">{icon}</span>}
          <span>{trend}</span>
          <span className="ms-2 text-gray-300">{week}</span>
        </div>
      )}
    </div>
  );
};




export default CompetitorDashboardCard;
