import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Working from "./sections/Working.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
