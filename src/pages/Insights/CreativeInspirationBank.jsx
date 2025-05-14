import React from 'react'
import BelowHeader from "../../components/CommonComponents/IconTextBelowHeader";
import InspirationBelowHeader from "../../components/InsightsComponents/InspirationBankBelowHeader";
import InspirationBankMainContent from '../../components/InsightsComponents/InspirationBankMainContent';
function InspirationBank() {
  return (
    <>
    <BelowHeader
                title="Inspiration Bank "
                subTitle="Just one click away from your next breakthrough ad idea.."
                img="/assets/inspirationicon.svg"
            />
<InspirationBelowHeader/>
<InspirationBankMainContent/>
    </>
  )
}

export default InspirationBank