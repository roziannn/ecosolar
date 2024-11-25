import React from "react";
import About1 from "../assets/about-1.jpg";
import logo from "../assets/logo.png";

import { Play } from "lucide-react";
import Partner1 from "../assets/partner1.svg";
import Partner2 from "../assets/partner2.svg";
import Partner3 from "../assets/partner3.svg";

const Mission = () => {
  return (
    <section className="py-12 flex items-center bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        <figure className="relative w-full lg:w-1/2">
          <img src={About1} alt="Residential Solar" className="w-full h-auto object-cover rounded-xl" />
          <div className="absolute top-8 left-4 text-white tracking-wide px-3 py-1 rounded-3xl text-lg sm:text-xl text-start italic">
            "Top Engineers <br /> Committed for The
            <br /> Best Performance" <br />
            <span className="text-sm font-bold">16 Years Operation Working</span>
          </div>
          <div className="absolute top-0 right-0 bg-white bg-opacity-30 backdrop-blur-sm leading-snug tracking-wide p-3 rounded-bl-2xl rounded-tr-lg text-lg sm:text-2xl font-bold text-start">
            <div className="bg-neutral-100 flex gap-2 px-4 sm:px-5 py-2 text-sm items-center justify-between rounded-2xl">
              <div className="flex bg-green-500 rounded-full p-2">
                <Play size={14} className="text-green-50" />
              </div>
              <p>Introduction</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white tracking-wide px-3 py-1 rounded-3xl text-base sm:text-xl text-start italic">
            <img src={logo} alt="" width={90} className="opacity-75" />
          </div>
        </figure>

        <div className="text-start w-full lg:w-1/2">
          <h2 className="text-md sm:text-lg font-semibold text-gray-400">About Us</h2>
          <p className="mt-2 max-w-full text-2xl sm:text-4xl text-gray-900 font-bold leading-relaxed tracking-wide border-b pb-5">
            Ecosolar are dedicated to providing solar and energy <br />
            <span className="text-gray-400">that empower efficient living while reducing energy costs and environmental impact.</span>
          </p>
          <h2 className="text-md sm:text-lg font-semibold text-gray-400 mt-4 mb-1">Partnership</h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <img src={Partner1} alt="partner-1" />
            <img src={Partner2} alt="partner-2" />
            <img src={Partner3} alt="partner-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
