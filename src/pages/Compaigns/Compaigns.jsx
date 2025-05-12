import React from 'react'
import Header from "../../components/CommonComponents/Header";
import BelowHeader from '../../components/Compaigns/BelowHeader';
import Card from '../../components/Compaigns/Cards';
function Compaigns() {
  return (
        <div className=" min-h-screen flex flex-col flex-grow bg-commonBgColor p-7">

          <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />
<BelowHeader
  title="Inspiration Bank"
  subtitle="Discover ad ideas for your next campaign"
/>
<Card/>
      </div>
  )
}

export default Compaigns