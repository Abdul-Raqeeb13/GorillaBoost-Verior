import React from 'react'
import BelowHeader from "../../components/InsightsComponents/BelowHeader";
import InspirationBelowHeader from "../../components/InsightsComponents/InspirationBankBelowHeader";
import InspirationBankMainContent from '../../components/InsightsComponents/InspirationBankMainContent';
function InspirationBank() {
  return (
    <>
    <BelowHeader
                title="Presenting Competitor Insights "
                subTitle="See insights from your competitors’ websites."
            />
<InspirationBelowHeader/>
<InspirationBankMainContent/>
    </>
  )
}

export default InspirationBank