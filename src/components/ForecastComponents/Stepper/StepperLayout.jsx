import React from "react";
import StepIndicator from "./StepperIndicator";
import BelowHeader from "../../InsightsComponents/BelowHeader";
const StepperLayout = ({ steps, activeStep, children }) => {
  return (
    <>
      <BelowHeader
        title="Optimize and Analyze Your Brand Strategy"
        subTitle="Unlock Data-Driven Insights for Brand Growth."
        img="/assets/forecast.svg"
      />

      <div className="flex w-full gap-4">



        {/* Sidebar Step Indicator */}
        <div className="w-72 bg-lightGray p-6 rounded-xl">
          <StepIndicator steps={steps} activeStep={activeStep} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 bg-lightGray  rounded-xl">
          {children}
        </div>

      </div>
    </>

  );
};

export default StepperLayout;
