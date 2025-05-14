import React from "react";
import { SharedCardHeader, ImgSizesCard } from "../smallCard";
import StepHeaderWithButton from "../StepHeaderWithButton";
import StepCardWithOptions from "../StepCardWithOptions";

const Step4 = () => {

const cardsData = [
  {
    id: "mvacard1", 
    image: "/assets/business.png"
  },
  {
    id: "mvacard2", 
    image: "/assets/business.png"
  },
  {
    id: "mvacard3", 
    image: "/assets/business.png"
  },
  {
    id: "mvacard4", 
    image: "/assets/business.png"
  },
  {
    id: "mvacard5", 
    image: "/assets/business.png"
  },
  {
    id: "mvacard6", 
    image: "/assets/business.png"
  },
  // Add more card data as needed
];


    return (
        <div className="flex flex-col ">

            <StepHeaderWithButton
                image="/assets/galleryIcon.svg"
                title="AI-Generated Assets"
                subtitle="AI-generated assets tailored to your selected strategy."
                buttons={[
                    {
                        text: "Convert",
                        img: "/assets/convert.svg",
                        onClick: () => console.log("Add New clicked"),
                    },
                    {
                        text: "Convert",
                        img: "/assets/editicon.svg",
                        onClick: () => console.log("Upload clicked"),
                    },
                    {
                        text: "Download",
                        img: "/assets/download.svg",
                        onClick: () => console.log("Upload clicked"),
                    },
                ]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardsData.map((card) => (
                    <StepCardWithOptions
                        key={card.id}
                        img={card.image}
                    // Pass other props needed for StepCardWithOptions
                    />
                ))}
            </div>

           
        </div>
        // </div>
    );

};

export default Step4;
