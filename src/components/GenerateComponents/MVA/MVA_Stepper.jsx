import React, { useState } from "react";
import StepperLayout from "../StepperLayout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

import TextIconHeader from "../../CommonComponents/IconTextBelowHeader";
const steps = [
  { id: 1, label: "Select Creative Size" , icon : "../assets/stepperi1.svg" },
  { id: 2, label: "Text on Image" ,icon : "../assets/stepperi2.svg" },
  { id: 3, label: "Choose Ad Objective" ,icon : "../assets/stepperi3.svg" },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const goToNext = () => setActiveStep( activeStep + 1);
  const goToPrev = () => setActiveStep(activeStep - 1);

  return (
    <StepperLayout steps={steps} activeStep={activeStep} header={
    <TextIconHeader
      title="Enhance AI Workflow"
      img="/assets/MVAIcon.svg"
      subTitle="Follow the steps to generate your creative"
    />
  }>

      {activeStep === 0 && <Step1 onNext={goToNext} />}
      {activeStep === 1 && <Step2 onNext={goToNext} />}
      {activeStep === 2 && <Step3 onNext={goToNext} />}
      {activeStep === 3 && <Step4  />}
    </StepperLayout>
  );
};

export default Stepper;
