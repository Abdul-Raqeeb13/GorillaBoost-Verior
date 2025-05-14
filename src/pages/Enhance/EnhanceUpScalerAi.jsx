import React from 'react';
import EnhanceAICard from '../../components/EnhanceComponents/EnhanceAICard';
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"


function EnhanceUpScaleAI() {
  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Uplaod Your Images",
      subtitle: "Add Example Creaties."
    },
    {
      id: 2,
      image: "../assets/upScalerAiIcon.svg",
      title: "Image Upscaler AI",
      subtitle: "Upload your image and let our smart AI instantly detect and remove the background for you."
    },
    {
      id: 3,
      image: "../assets/upScalerAiIconGray.svg",
      title: "",
      subtitle: ""
    }
  ];

  return (
    <>
                <BelowHeader title={"Image Upscaler AI"} subTitle={"Upscale your images with AI while keeping every detail sharp."} img="/assets/forecast.svg" />

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 min-h-screen'>
 {cardData.map((card, index) => (
  <div
    key={card.id}
    className={`${index === 2 ? 'lg:col-span-2' : ''}`}
  >
    <EnhanceAICard
      image={card.image}
      title={card.title}
      subtitle={card.subtitle}
      allowUpload={index === 0} // enable upload only for the first card
    />
  </div>
))}

</div>


    </>
  );
}

export default EnhanceUpScaleAI;
