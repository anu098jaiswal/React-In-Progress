import React from 'react'
import RightSection from './RightSection';
import LeftSection from './leftSection';
import "./styles/home.css";
function Home() {
  return (
    <div className="Home">
        <div className="Left">
        <LeftSection/>
        </div>
        <div className="Right">
          <RightSection/>
        </div>
      
    </div>
  )
}

export default Home
