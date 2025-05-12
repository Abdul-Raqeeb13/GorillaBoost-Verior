import React from 'react'
import BelowHeader from "../../components/InsightsComponents/BelowHeader"
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
    <BelowHeader title={"Optimize and Analyze Your Brand Strategy"} subTitle={"Unlock Data-Driven Insights for Brand Growth"} />

    <div className="flex flex-wrap gap-4 mt-7">
                {cardData.map((card) => (
                    <TextImgCard
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
                <div onClick={() => {navigate("/forecast/stepper")}} className="flex items-center justify-center p-10 rounded-lg bg-lightGray">
                    <div className="rounded-lg p-8">
                        <p className="text-xl font-semibold text-paraTextColor text-center">
                            Coming Soon
                        </p>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Forecast