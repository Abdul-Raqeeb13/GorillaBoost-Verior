import React from "react";
import Header from "../components/CommonComponents/Header";
import BelowHeader from "../components/InsightsComponents/BelowHeader";
import TextImgCard from "../components/InsightsComponents/TextImgCard";
import TextCardCreativeInsights from "../components/InsightsComponents/TextCardCreativeInsights";
import FooterCreativeInsights from "../components/InsightsComponents/FooterCreativeInsights";
import TextCardCompetitorInsights from "../components/InsightsComponents/TextCardCompetitorInsights";
import FooterCompetitorInsights from "../components/InsightsComponents/FooterCompetitiorInsights";

const CompetitorInsights = () => {
    return (


        <>
            <BelowHeader
                title="Presenting Competitor Insights "
                subTitle="See insights from your competitors’ websites."
            />

            <TextCardCompetitorInsights/>
            <FooterCompetitorInsights/>

      

        </>


    );
};

export default CompetitorInsights;
