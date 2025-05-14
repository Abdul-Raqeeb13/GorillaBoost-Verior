import React from 'react';
import EnhanceAICard from '../../components/EnhanceComponents/EnhanceAICard';
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"


function EnhanceFaceAI() {
  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Uplaod Your Images",
      subtitle: "Add Example Creaties."
    },
    {
      id: 2,
      image: "../assets/faceenhanceAi.svg",
      title: "Image Upscaler AI",
      subtitle: "Upload your image for facial enhancement. Our cutting-edge AI will automatically detect and refine the faces for improved clarity.."
    },
    {
      id: 3,
      image: "../assets/faceenhanceAiGray.svg",
      title: "",
      subtitle: ""
    }
  ];

  return (
    <>
                <BelowHeader title={"Face Enhancer AI"} subTitle={"Enhance your images with sharp details and precision using AI technology.."} img="/assets/forecast.svg" />

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

export default EnhanceFaceAI;
