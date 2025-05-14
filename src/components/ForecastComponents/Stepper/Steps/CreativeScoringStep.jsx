import React from 'react'
import Header from "../../../CommonComponents/Header";
import BelowHeader from '../../../Compaigns/BelowHeader';
import Card from './CreativeScoreAIStepCard';
function StepCreativeScoring() {
  return (
        <div className=" min-h-screen flex flex-col flex-grow my-8 bg-commonBgColor">
<BelowHeader
  title="List Of Creative Scoring  Ai"
  subtitle="A Comprehensive Overview of Your Creative scoring"
/>
<Card/>

      </div>
  )
}

export default StepCreativeScoring