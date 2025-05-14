import React from 'react';
import EnhanceAICard from '../../components/EnhanceComponents/EnhanceAICard';
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"


function EnhanceBgRemoverAI() {
  const cardData = [
    {
      id: 1,
      image: "../assets/imageIcon.svg",
      title: "Uplaod Your Images",
      subtitle: "Add Example Creaties."
    },
    {
      id: 2,
      image: "../assets/removerAiIcon.svg",
      title: "Background Remover AI",
      subtitle: "Upload your image and let our smart AI instantly detect and remove the background for you.."
    },
    {
      id: 3,
      image: "../assets/removerAiIconGray.svg",
      title: "",
      subtitle: ""
    }
  ];

  return (
    <>
                <BelowHeader title={"Creative Scoring AI"} subTitle={"Evaluate your creatives based on performance, brand awareness, and engagement to drive better outcomes"} img="/assets/forecast.svg" />

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

export default EnhanceBgRemoverAI;
