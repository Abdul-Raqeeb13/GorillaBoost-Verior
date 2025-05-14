import React from "react";
import StepIndicator from "./StepsIndicator";

const StepperLayout = ({ steps, activeStep, children, header }) => {
  return (
    <>
      {header}

      <div className="flex w-full gap-4 h-screen overflow-hidden">
        {/* Sidebar Step Indicator */}
        <div className="w-80 bg-lightGray p-6 rounded-xl h-full overflow-y-auto no-scrollbar">
          <StepIndicator steps={steps} activeStep={activeStep} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 bg-lightGray rounded-xl overflow-y-auto h-full no-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
};

export default StepperLayout;
