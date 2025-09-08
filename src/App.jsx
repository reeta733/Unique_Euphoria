import React from 'react'
import Navbar from './Components/NavBar'
import AppRoutes from './Routes/AppRoutes'

import Hero from './Components/Herosection'
import Products from './Components/Products'
import InfoSection from './Components/InfoSection'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'
import TestimonialCard from './Components/TestimonialCard'
import Appointment from './Components/Appointment'
const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />

        {/* <AppRoutes/> */}
        <Hero />
        <Products />
        <InfoSection />
        <TestimonialCard />
        <Testimonial />
        <Newsletter />
        <Appointment />
        <Footer />

      <div className="color-effect absolute" />

      </div>
    </>
  )
}

export default App