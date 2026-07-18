import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../pages/Navbar";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="skills" element={<Home />} />
        <Route path="projects" element={<Home />} />
        <Route path="experience" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
