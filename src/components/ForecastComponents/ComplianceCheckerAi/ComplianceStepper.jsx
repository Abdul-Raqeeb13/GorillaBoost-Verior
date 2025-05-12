import React, { useState } from "react";
import StepperLayout from "../Stepper/StepperLayout";
import Step1 from "./Steps/ComplianceStep1";
import Step2 from "./Steps/ComplianceStep2";
import Step3 from "./Steps/ComplianceStep3";
import Step4 from "./Steps/ComplianceStep4";

const steps = [
  { id: 1, label: "Select Compliance Type" , icon : "../assets/stepperi1.svg" },
  { id: 2, label: "Additional Info" ,icon : "../assets/stepperi2.svg" },
  { id: 3, label: "upload AD Creatives" ,icon : "../assets/stepperi3.svg" },
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
      {activeStep === 3 && <Step4  />}
    </StepperLayout>
  );
};

export default Stepper;
