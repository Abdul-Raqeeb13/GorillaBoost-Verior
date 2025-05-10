import React, { useEffect, useState } from 'react';
import Card from './Card';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const AnalyticsCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = [
      { title: 'Total Views', value: '5,000', trend: '+5%', value2: "3.2", color: "text-green-500" , week :"Last Week" },
      { title: 'New Users', value: '1,200', trend: '+3%', value2: "3.2", color: "text-red-500", week :"Last Week"  },
      { title: 'Revenue', value: '$12,000', trend: '+8%', value2: "3.2", color: "text-green-500", week :"Last Week"  },
      { title: 'Applications', value: '350', trend: '+2%', value2: "3.2", color: "text-green-500", week :"Last Week"  },
    ];
    setData(dummyData);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mt-5 justify-center sm:justify-start">
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

export default AnalyticsCard;
