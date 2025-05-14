import React from 'react';

const Card = ({ title, value, trend, icon, value2 , color, week}) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[32%] lg:w-[23.91%] h-[177px] rounded-2xl p-5 bg-lightGray flex flex-col justify-between shadow-xl transition-transform hover:scale-105">
      <span className=" py-2 px-3 rounded bg-extraLightGray  inline-block w-fit font-semibold text-14 text-white">{title}</span>
      <div className="text-3xl text-white font-rgular text-40">{value}</div>
      {trend && (
        <div className="text-green-500 text-sm flex items-center">
          {icon && <span className="mr-1">{icon}</span>}
          <span>{trend}</span>
          <span className='ms-2'>{week}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
