import React, { useState } from "react";
import StepperLayout from "../StepperLayout";
import TextIconHeader from "../../CommonComponents/IconTextBelowHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const steps = [
  { id: 1, label: "Select Creative Size" , icon : "../assets/HIPPIcon.svg" },
  { id: 2, label: "Background Removal" ,icon : "../assets/bgremoveraiicon.svg" },
  { id: 3, label: "AI Background Styles" ,icon : "../assets/aibgstyle.svg" },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const goToNext = () => setActiveStep( activeStep + 1);
  const goToPrev = () => setActiveStep(activeStep - 1);

  return (
    <StepperLayout steps={steps} activeStep={activeStep} header={
    <TextIconHeader
      title="High-Impact Product Photography"
      img="/assets/hippiconheader.svg"
      subTitle="Turn ordinary product shots into stunning advertisements"
    />
  }>

      {activeStep === 0 && <Step1 onNext={goToNext} />}
      {activeStep === 1 && <Step2 onNext={goToNext} />}
      {activeStep === 2 && <Step3 onNext={goToNext} />}
      {/* {activeStep === 3 && <Step4 onNext={goToNext} />} */}
      {/* {activeStep === 4 && <Step5/>} */}
    </StepperLayout>
  );
};

export default Stepper;
