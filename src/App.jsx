import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Certification from "./components/certification/Certification";
import Background from "./components/background/Background";

const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Nav />
      <Header />
      <About />
      <Experience />
      <Certification />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
