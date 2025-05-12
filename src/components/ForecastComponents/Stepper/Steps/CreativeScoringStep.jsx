import React from 'react'
import Header from "../../../CommonComponents/Header";
import BelowHeader from '../../../Compaigns/BelowHeader';
import Card from './CreativeScoreAIStepCard';
function StepCreativeScoring() {
  return (
        <div className=" min-h-screen flex flex-col flex-grow bg-commonBgColor">
<BelowHeader
  title="Inspiration Bank"
  subtitle="Discover ad ideas for your next campaign"
/>
<Card/>

      </div>
  )
}

export default StepCreativeScoring