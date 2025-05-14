import React from 'react'
import Header from "../../components/CommonComponents/Header";
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader"
import TextImgCard from "../../components/InsightsComponents/TextImgCard"
import { useNavigate } from 'react-router-dom';
function Enhance() {

    const nav = useNavigate()
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
        , {
            id: 2,
            title: 'Competitor Insights',
            subtitle:
                'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
            image: './assets/generateCardImage.png',
        }, {
            id: 2,
            title: 'Competitor Insights',
            subtitle:
                'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
            image: './assets/generateCardImage.png',
        }
    ]


    return (
        <>
            <BelowHeader title={"Optimize and Analyze Your Brand Strategy"} subTitle={"Unlock Data-Driven Insights for Brand Growth"} img="/assets/forecast.svg" />


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">                {cardData.map((card) => (
                <TextImgCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    subtitle={card.subtitle}
                />
            ))}
                <div
                    onClick={() => nav("/enhance/bgremover")}
                    className="bg-lightGray rounded-lg shadow overflow-hidden sm:basis-[48%] md:basis-[31%] lg:basis-[23%] cursor-pointer flex flex-col justify-center items-center h-[300px] p-5"
                >
                    <div className="p-4 text-white text-center">
                        <h2 className="text-lg font-semibold">Coming Soon</h2>
                        <p className="text-sm mt-3 text-paraTextColor">
                            This feature will be available in future updates.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Enhance