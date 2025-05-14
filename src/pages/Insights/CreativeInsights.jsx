import React from "react";
import Header from "../../components/CommonComponents/Header";
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader";
import TextImgCard from "../../components/InsightsComponents/TextImgCard";
import TextCardCreativeInsights from "../../components/InsightsComponents/TextCardCreativeInsights";
import FooterCreativeInsights from "../../components/InsightsComponents/FooterCreativeInsights";
const CreativeInsights = () => {
    return (


        <>
            <BelowHeader
                title="Presenting Creative Insights AI"
                subTitle="Please connect your ad accounts below for data driven insights in your creative insights report"
                img="/assets/creativeinsighticon.svg"
            />

        <TextCardCreativeInsights/>
        <FooterCreativeInsights/>

        </>


    );
};

export default CreativeInsights;
