import React from 'react'
import Heroic from '../ui/Home/Heroic'

import HomeAboutSection from '../ui/Home/About'
import Button from '../ui/Button'
import HomeService from '../ui/Home/Services'
import HomeTeam from '../ui/Home/Team'

const Home = () => {
  return (
    <div>
      <Heroic />
      <HomeAboutSection />
      <HomeService />
      <HomeTeam />
       
    </div>
  )
}

export default Home
