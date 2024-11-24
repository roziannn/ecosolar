import React from "react";
import { ArrowRight } from "lucide-react";

import About1 from "../assets/about-1.jpg";

const Projects = () => {
  return (
    <section className="py-12 min-h-screen flex items-center bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-lg font-semibold text-gray-500">Our Works</h2>
          <div className="flex justify-between">
            <p className="mt-4 max-w-5xl text-4xl text-gray-800 font-bold leading-snug tracking-wide">We take pride in delivering impactful projects that prioritize innovation and community growth.</p>
            <button className="btn btn-default rounded-3xl ">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="items-stretch">
          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out">
            <img src={About1} alt="GreenFarm Duke - A sustainable farming initiative" className="w-full lg:w-1/4 h-auto object-cover rounded-2xl shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">GreenFarm Duke</h3>
                <p className="max-w-2xl mb-4">GreenFarm Duke operates in the Durham area, utilizing local farmland to develop smart farming solutions that can be replicated in other regions with similar needs.</p>
                <p>Durham, North Carolina, US</p>
              </div>
              <button className="btn btn-success rounded-3xl text-white absolute top-0 right-0">View Project</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out">
            <img src={About1} alt="Solar Bloom Sydney - Promoting renewable energy solutions" className="w-full lg:w-1/4 h-auto object-cover rounded-lg shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">Solar Bloom Sydney</h3>
                <p className="max-w-2xl mb-4">
                  Solar Bloom Sydney operates in Sydney, implementing advanced solar systems to empower residential and commercial properties. The project aims to serve as a model for other regions to embrace renewable energy innovations.
                </p>
                <p>Sydney, NSW Australia</p>
              </div>
              <button className="btn btn-success rounded-3xl text-white absolute top-0 right-0">View Project</button>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="flex flex-col lg:flex-row items-center p-4 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out">
            <img src={About1} alt="Hydro Nest - Innovative water storage solutions" className="w-full lg:w-1/4 h-auto object-cover rounded-lg shadow-md" />
            <div className="flex flex-col w-full ml-6 relative">
              <div className="mb-6 text-start">
                <h3 className="font-bold text-2xl mb-2">Hydro Nest</h3>
                <p className="max-w-2xl mb-4">
                  Hydro Nest operates in the Brisbane area, utilizing cutting-edge technology to design water storage systems that optimize resource usage and minimize environmental impact. The project serves as a benchmark for sustainable
                  water management.
                </p>
                <p>Brisbane, Australia</p>
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
