import React from "react";
import Navbar from "./Components/NavBar";
import AppRoutes from "./Routes/AppRoutes";

import Hero from "./Components/Herosection";
import Products from "./Components/Products";
import InfoSection from "./Components/InfoSection";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";
import TestimonialCard from "./Components/TestimonialCard";
import Appointment from "./Components/Appointment";
import Icon from "./Components/Icon";
const App = () => {
  return (
    <>
      <div className="">
        {/* <Navbar /> */}

        <AppRoutes/>
        {/* <Hero /> */}
        {/* <Products /> */}
        {/* <InfoSection /> */}
        {/* <TestimonialCard /> */}
        {/* <Icon /> */}
        {/* <Testimonial /> */}
        {/* <Newsletter /> */}
        {/* <Appointment /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
