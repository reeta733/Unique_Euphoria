import React from 'react'
import Navbar from './Components/NavBar'
import AppRoutes from './Routes/AppRoutes'
import Footer from './components/Footer'
import Hero from './Components/Herosection'
import Products from './Components/Products'
import InfoSection from './Components/InfoSection'
import Testimonial from './Components/Testimonial'
const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />

        {/* <AppRoutes/> */}
        <Hero />
        <Products />
        <InfoSection />
        <Testimonial/>
        <Footer/>
      <div className="color-effect absolute" />

      </div>
    </>
  )
}

export default App