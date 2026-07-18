import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../pages/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;