import React from 'react'
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"
import TextImgCard from "../../components/InsightsComponents/TextImgCard"
import { useNavigate } from "react-router-dom";
function Forecast() {

  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: 'Creative Insights',
      subtitle:
        'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
      image: './assets/generateCardImage.png',
    },
    {
      id: 2,
      title: 'Competitor Insights',
      subtitle:
        'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
      image: './assets/generateCardImage.png',
    }
  ]
  return (
    <>
      <BelowHeader title={"Forecast and Refine Your Brand Strategy"} subTitle={"Leverage data-driven predictions to stay ahead of market trends and make smarter strategic decisions."} img="/assets/forecasticon.svg" />

      <div className="flex flex-wrap gap-4 mt-7">
        {cardData.map((card) => (
          <TextImgCard
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
        <div
          onClick={() => navigate("/forecast/stepper")}
          className="bg-lightGray rounded-lg shadow overflow-hidden sm:basis-[48%] md:basis-[31%] lg:basis-[23%] cursor-pointer flex flex-col justify-center items-center p-5"
        >

          <div className="p-4 text-white text-center">
            <p className="text-sm mt-3 text-paraTextColor">
              More Features Coming Soon.
            </p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Forecast