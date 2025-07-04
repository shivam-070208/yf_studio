import React from 'react'
import Heroic from '../ui/Home/Heroic'

import HomeAboutSection from '../ui/Home/About'
import Button from '../ui/Button'
import HomeService from '../ui/Home/Services'

const Home = () => {
  return (
    <div>
      <Heroic />
      <HomeAboutSection />
      <HomeService />
       
    </div>
  )
}

export default Home
