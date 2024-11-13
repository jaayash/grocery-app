import React from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Title subTitle="Testimonails" title="What Our Customers Say?"/>
        <Testimonials />
        <Title subTitle="Contact" title="Lets Get Connected!"/>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
