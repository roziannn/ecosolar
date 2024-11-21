import React from "react";
import About1 from "../assets/about-1.jpg";
import { Play } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-12 h-screen flex items-center bg-neutral-100">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        <figure className="relative w-1/2">
          <img src={About1} alt="Residential Solar" className="h-auto object-cover rounded-xl " />
          <div className="absolute top-14 left-4 text-white leading-snug tracking-wide px-3 py-1 rounded-3xl text-3xl text-start">
            Top Engineers <br /> Committed for <br /> Best Performance
          </div>
          <div className="absolute top-0 right-0 bg-white bg-opacity-30 backdrop-blur-sm leading-snug tracking-wide px-5 py-5 rounded-bl-2xl rounded-tr-lg text-2xl font-bold text-start">
            <div className="bg-neutral-100 flex gap-2 px-5 py-3 text-sm items-center justify-between rounded-2xl">
              <div className="flex bg-green-500  rounded-full p-2">
                <Play size={14} className="text-green-50" />
              </div>
              <p>Introduction</p>
            </div>
          </div>
        </figure>

        <div className="text-start">
          <h2 className="text-2xl font-semibold text-gray-400">About Us</h2>
          <p className="mt-4 max-w-lg text-3xl text-gray-900 font-bold leading-snug tracking-wide border-b pb-5">
            Ecosolar are dedicated to providing solar and energy <br /> <span className="text-gray-600"> that empower efficient living while reducing energy costs, environmental impact.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
