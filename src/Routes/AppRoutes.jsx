import { Routes, Route } from "react-router-dom";
import { Home, About, Testimonials, Collection } from "../Pages";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
};

export default AppRoutes;