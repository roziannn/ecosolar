import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

import ImgWork1 from "../assets/green-farm.jpg";
import ImgWork2 from "../assets/solar-bloom.jpg";
import ImgWork3 from "../assets/hydro-nest.jpg";

const Projects = () => {
  return (
    <section className="py-12 min-h-screen flex items-center bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-start 2">
          <h2 className="text-lg font-semibold text-gray-700">Our Works</h2>
          <div className="flex justify-between">
            <p className="mt-4 max-w-5xl text-4xl text-gray-800 font-bold leading-snug tracking-wide mb-6">We take pride in delivering impactful projects that prioritize innovation and community growth.</p>
            <button className="btn btn-default rounded-3xl ">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="items-stretch">
          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out border-b">
            <img src={ImgWork1} alt="GreenFarm Duke - A sustainable farming initiative" className="w-full lg:w-1/5 h-auto object-fit rounded-3xl shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">GreenFarm Duke</h3>
                <div className="text-gray-700">
                  <p className="max-w-2xl mb-4 leading-relaxed">GreenFarm Duke operates in the Durham area, utilizing local farmland to develop smart farming solutions that can be replicated in other regions with similar needs.</p>
                  <p className="text-xs flex items-center">
                    <MapPin size={12} className="mr-1" />
                    Durham, North Carolina, US
                  </p>
                </div>
              </div>
              <button className="btn btn-success rounded-3xl text-white absolute top-0 right-0">View Project</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out border-b">
            <img src={ImgWork2} alt="Solar Bloom Sydney - Promoting renewable energy solutions" className="w-full lg:w-1/5 h-auto object-fit rounded-3xl shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">Solar Bloom Sydney</h3>
                <div className="text-gray-700">
                  <p className="max-w-2xl mb-4 leading-relaxed">
                    Solar Bloom Sydney operates in Sydney, implementing advanced solar systems to empower residential and commercial properties. The project aims to serve as a model for other regions to embrace renewable energy innovations.
                  </p>
                  <p className="text-xs flex items-center">
                    <MapPin size={12} className="mr-1 " />
                    Sydney, NSW Australia
                  </p>
                </div>
              </div>
              <button className="btn btn-success rounded-3xl text-white absolute top-0 right-0">View Project</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out border-b">
            <img src={ImgWork3} alt="Hydro Nest - Innovative water storage solutions" className="w-full lg:w-1/5 h-auto object-fit rounded-3xl shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">Hydro Nest</h3>
                <div className="text-gray-700">
                  <p className="max-w-2xl mb-4 leading-relaxed">
                    Hydro Nest operates in the Brisbane area, utilizing cutting-edge technology to design water storage systems that optimize resource usage and minimize environmental impact. The project serves as a benchmark for
                    sustainable water management.
                  </p>
                  <p className="text-xs flex items-center">
                    <MapPin size={12} className="mr-1 " />
                    Brisbane, Australia
                  </p>
                </div>
              </div>
              <button className="btn btn-success rounded-3xl text-white absolute top-0 right-0">View Project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
