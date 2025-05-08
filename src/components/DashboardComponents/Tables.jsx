import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
const Tables = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-4">
      {/* Flex container for responsive layout */}
      <div className="flex flex-wrap gap-4 overflow-hidden">
        {/* Ensure each table takes full width on small screens and 48% width on larger screens */}
        <div className="w-full sm:w-[48%]">
          <Table1 />
        </div>
        <div className="w-full sm:w-[48%]">
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Tables;
