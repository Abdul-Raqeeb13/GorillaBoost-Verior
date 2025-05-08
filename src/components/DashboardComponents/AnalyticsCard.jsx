import React, { useEffect, useState } from 'react';
import Card from './Card';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const AnalyticsCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = [
      { title: 'Total Views', value: '5,000', trend: '+5%', value2: "3.2", color: "text-green-500" },
      { title: 'New Users', value: '1,200', trend: '+3%', value2: "3.2", color: "text-red-500" },
      { title: 'Revenue', value: '$12,000', trend: '+8%', value2: "3.2", color: "text-green-500" },
      { title: 'Applications', value: '350', trend: '+2%', value2: "3.2", color: "text-green-500" },
    ];
    setData(dummyData);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pb-6 justify-center sm:justify-start">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          value={item.value}
          trend={item.trend}
          value2={item.value2}
          color={item.color}
          icon={<ArrowUpIcon className="w-4 h-4" />}
        />
      ))}
    </div>
  );
};

export default AnalyticsCard;
