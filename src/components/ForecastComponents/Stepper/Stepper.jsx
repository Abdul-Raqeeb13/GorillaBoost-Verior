import React, { useState } from "react";
import StepperLayout from "./StepperLayout";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";

const steps = [
  { id: 1, label: "Select Ad Type to Score" , icon : "../assets/stepperi1.svg" },
  { id: 2, label: "Select Ad Platform" ,icon : "../assets/stepperi2.svg" },
  { id: 3, label: "Choose Ad Objective" ,icon : "../assets/stepperi3.svg" },
  { id: 4, label: "Upload Ad Creatives", icon : "../assets/stepperi4.svg" },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const goToNext = () => setActiveStep( activeStep + 1);
  const goToPrev = () => setActiveStep(activeStep - 1);

  return (
    <StepperLayout steps={steps} activeStep={activeStep}>
      {activeStep === 0 && <Step1 onNext={goToNext} />}
      {activeStep === 1 && <Step2 onNext={goToNext} />}
      {activeStep === 2 && <Step3 onNext={goToNext} />}
      {activeStep === 3 && <Step4 onNext={goToNext} />}
      {activeStep === 4 && <Step5  />}
    </StepperLayout>
  );
};

export default Stepper;
