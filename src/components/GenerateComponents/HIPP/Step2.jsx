import React from "react";
import StepsHeader from "../../CommonComponents/StepsHeader";
// import StepsCard from "./StepsCard";
import { SharedCardHeader, ImgSizesCard } from "../smallCard";
import UploadImageCardWithInput from "../UploadImageCard";
import DoubleInputField from "../DoubleInputField";

const Step2 = ({ onNext }) => {

  //   const cardData = [
  //     {
  //       id: 1,
  //       image: "/assets/landscape.svg",
  //       title: "Post size",
  //       subtitle: "(1200x628)"
  //     },
  //     {
  //       id: 2,
  //       image: "/assets/landscape.svg",
  //       title: "Post Size",
  //       subtitle: "(1200x628)"
  //     },
  //     {
  //       id: 3,
  //       image: "/assets/landscape.svg",
  //       title: "Post Size",
  //       subtitle: "(1200x628)"
  //     },
  //     {
  //       id: 4,
  //       image: "/assets/landscape.svg",
  //       title: "Post Size",
  //       subtitle: "(1200x628)"
  //     },
  //     {
  //       id: 5,
  //       image: "/assets/landscape.svg",
  //       title: "Post Size",
  //       subtitle: "(1200x628)"
  //     },
  //     // Add more card objects here if needed
  //   ];

  return (
    <div className="flex flex-col gap-5">
      {/* <div className="flex-grow"> */}
      <StepsHeader
        image="../assets/HIPPIcon.svg"
        title="Background Removal"
        subtitle="Easily remove backgrounds for cleaner, sharper product images"
      />

      <UploadImageCardWithInput title="Upload a Product image" subTitle="or drag & drop a background image here." img="/assets/imageIcon.svg" />

      <DoubleInputField />

      {/* Bottom Right Button */}
      <div className=" flex justify-end "> {/* Push the button to the bottom */}
        <button
          onClick={onNext}
          className="bg-redColor w-32 h-12 rounded-md font-bold text-20 text-white"
        >
          Next
        </button>
      </div>
    </div>
    // </div>
  );

};

export default Step2;
