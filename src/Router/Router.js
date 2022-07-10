import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Garden from "../pages/Garden/Garden";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}
