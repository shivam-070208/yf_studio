import React from 'react'
import Heroic from '../ui/Home/Heroic'

import HomeAboutSection from '../ui/Home/About'
import Button from '../ui/Button'
import HomeService from '../ui/Home/Services'
import HomeTeam from '../ui/Home/Team'
import Casestudy from '../ui/Home/Casestudy'
import ProductCarousel from '../ui/Home/Product'
const Home = () => {
  return (
    <div>
      <Heroic />
      <HomeAboutSection />
      <HomeService />
      <HomeTeam />
     <Casestudy />
     <ProductCarousel />
       
    </div>
  )
}

export default Home
