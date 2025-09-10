import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";


const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Testimonials = lazy(() => import("../Pages/Testimonials"));
const Collection = lazy(() => import("../Pages/Collection"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;