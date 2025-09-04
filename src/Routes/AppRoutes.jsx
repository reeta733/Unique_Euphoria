import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Testimonials, Collection, Navbar, Footer } from "../Pages";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
