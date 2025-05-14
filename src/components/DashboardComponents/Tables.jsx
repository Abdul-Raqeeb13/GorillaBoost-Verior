import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
const Tables = () => {
  return (
    <div className="w-full ">
      {/* Flex container for responsive layout */}
    <div className="flex flex-col lg:flex-row gap-4 mt-5">
        {/* Ensure each table takes full width on small screens and 48% width on larger screens */}
        <div className="w-full lg:w-1/2">
          <Table1 />
        </div>
        <div className="w-full lg:w-1/2">
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Tables;
