import React from 'react'
import Header from '../../components/CommonComponents/Header'
import BelowHeader from "../../components/GenerateComponents/BelowHeader"
import Card from "../../components/GenerateComponents/Cards"
function Generate() {
  return (
   <div className="min-h-screen bg-commonBgColor p-7">
      <Header
        title="Overview"
        subtitle="Welcome to your dashboard"
        profileImage="/assets/user.jpg"
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} // pass the toggle function
      />

    <BelowHeader />
    <Card />


</div>
  )
}

export default Generate