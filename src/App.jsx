import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Services />
      <Footer />
    </>
  );
}

export default App;
