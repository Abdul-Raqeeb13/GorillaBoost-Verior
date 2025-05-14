import React from 'react';
import EnhanceAICard from '../../components/EnhanceComponents/EnhanceAICard';
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"


function EnhanceEraserReplacerAi() {
  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Uplaod Your Images",
      subtitle: "Add Example Creaties."
    },
    {
      id: 2,
      image: "../assets/EraseReplaceAiIcon.svg",
      title: "Eraser and Replacer AI",
      subtitle: "Upload an image, select an area, and choose to either remove or replace it with AI-generated content."
    },
    {
      id: 3,
      image: "../assets/EraseReplaceAiIconGray.svg",
      title: "",
      subtitle: ""
    }
  ];

  return (
    <>
                <BelowHeader title={"Eraser and Replacer AI"} subTitle={"Upload an image, highlight an area, and opt to either remove or replace it with AI-generated content."} img="/assets/forecast.svg" />

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

export default EnhanceEraserReplacerAi;
