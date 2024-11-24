import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Services />
      <Projects />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
