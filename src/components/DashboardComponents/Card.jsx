import React from 'react';

const Card = ({ title, value, trend, icon, value2 }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[32%] lg:w-[23%] h-[177px] rounded-2xl p-5 bg-customBlue flex flex-col justify-between shadow-xl transition-transform hover:scale-105">
      <span className="text-sm py-2 px-3 rounded bg-cardColor text-white inline-block w-fit">{title}</span>
      <div className="text-3xl font-bold text-white">{value}</div>
      {trend && (
        <div className="text-green-500 text-sm flex items-center">
          {icon && <span className="mr-1">{icon}</span>}
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
