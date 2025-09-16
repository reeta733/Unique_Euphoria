import React from 'react'
import Hero from '../Components/Herosection'
import Products from '../Components/Products'
import TestimonialCard from '../Components/TestimonialCard'
import Newsletter from '../Components/Newsletter'
import ConsultationSection from '../Components/ConsultationSection'
import InfoSection from '../Components/InfoSection'
import Icon from '../Components/Icon'
import Testimonial from '../Components/Testimonial'
import Navbar from '../Components/NavBar'
import RealLife from '../Components/RealLife'
const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <Products />
    <InfoSection />
    <RealLife />
    <TestimonialCard />
    <Icon />
    <Testimonial />
    <Newsletter />
    <ConsultationSection />

    </>
  )
}

export default Home