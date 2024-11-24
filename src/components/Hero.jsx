import React from "react";
import HeroImg from "../assets/hero.jpg";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold text-neutral-50">Sustainable Energy, Brighter Tomorrow</h1>
          <p className="mb-5 text-xl font-semibold">Building a Greener Future with Solar Technology</p>
          <div className="join mt-4 mb-8">
            <button className="btn btn-success join-item text-neutral-50 border-0 rounded-3xl">
              Get Started <MoveUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute text-left bottom-8 right-8 w-64 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4">
        <p className="text-md font-bold text-neutral-300">Go Green, Life Clean</p>
        <p className="text-xs mt-1 text-neutral-300 ">Discover the power of solar energy and transform your life by choosing sustainable solutions today. Let’s embrace a greener future together.</p>
      </div>
      <div className="absolute text-left top-32 left-8 text-wrap">
        <p className="text-xs text-neutral-300 font-semibold">
          Smart <br /> Tomorrow <br /> 2025
        </p>
      </div>
      <div className="absolute text-left bottom-24 left-8 w-60 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4">
        <p className="text-md font-bold text-neutral-300">Eco-Friendly Solutions</p>
        <p className="text-xs mt-1 text-neutral-300 ">Join us in creating a world where eco-friendly choices lead to positive changes for the environment and your future.</p>
      </div>
    </div>
  );
};

export default Hero;
