import React from "react";

const StepIndicator = ({ steps, activeStep }) => {
  return (
    <div className="flex flex-col justify-between h-full"> {/* Ensure full height */}
      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-4 top-4 bottom-4 w-1 bg-redColor" />

        <div className="space-y-12 relative">
          {steps.map((step, index) => (
            <div key={step.id || index} className="flex items-center space-x-3 relative">
              <div className="relative z-10">
                <div
                  className={`w-10 h-10 flex items-center justify-center clip-hexagon
  ${index === activeStep
                      ? "bg-redColor"
                      : index < activeStep
                        ? "bg-redColor"
                        : "bg-gray-600"}`}
                >
                  <img src={step.icon} alt={`Step ${index + 1}`} className="w-5 h-5" />
                </div>

              </div>
              <span className={`font-medium text-18 ${index === activeStep ? "text-white" : "text-paraTextColor"} "}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Guide box pinned at the bottom */}
      <div className="w-full text-white bg-extraLightGray p-2 py-4 mt-8 rounded-lg">
        <div className="flex items-center gap-2">
          <img src="/assets/lightIcon.svg" alt="icon" className="" />
          <p className="text-20 font-medium">Guide</p>
        </div>
        <p className="mt-4 text-16 font-medium leading-normal text-paraTextColor">
          lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,         </p>
      </div>
    </div>
  );
};

export default StepIndicator;
