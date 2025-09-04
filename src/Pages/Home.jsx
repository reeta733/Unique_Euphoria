import React from 'react'
import Herosection from '../Components/Herosection'
import Products from '../Components/Products'
import AboutSection from '../Components/AboutSection'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <Herosection />
      <Products />
      <AboutSection />
      <Newsletter />
    </div>
  )
}

export default Home