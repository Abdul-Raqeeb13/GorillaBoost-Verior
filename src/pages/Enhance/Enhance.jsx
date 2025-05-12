import React from 'react'
import Header from "../../components/CommonComponents/Header";
import BelowHeader from "../../components/InsightsComponents/BelowHeader"
import TextImgCard from "../../components/InsightsComponents/TextImgCard"

function Enhance() {

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
        ,{
            id: 2,
            title: 'Competitor Insights',
            subtitle:
                'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
            image: './assets/generateCardImage.png',
        },{
            id: 2,
            title: 'Competitor Insights',
            subtitle:
                'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
            image: './assets/generateCardImage.png',
        }
    ]


  return (
    <>
        <BelowHeader title={"Optimize and Analyze Your Brand Strategy"} subTitle={"Unlock Data-Driven Insights for Brand Growth"} img="/assets/forecast.svg"/>

        
    <div className="flex flex-wrap gap-4 mt-7">
                {cardData.map((card) => (
                    <TextImgCard
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
                <div onClick={() => {navigate("/forecast/stepper")}} className="flex items-center justify-center  rounded-lg bg-lightGray sm:basis-[48%] md:basis-[31%] lg:basis-[23%] ">
                    <div className="rounded-lg p-8">
                        <p className="text-xl font-semibold text-paraTextColor text-center">
                            More Features Coming Soon
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Enhance