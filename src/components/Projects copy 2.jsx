import React from "react";
import { CircleCheckBig } from "lucide-react";

import About1 from "../assets/about-1.jpg";

const Projects = () => {
  return (
    <section className="py-16 h-screen bg-neutral-100 flex flex-col">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-gray-600 mb-12">Our Projects</h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center lg:items-start">
          {/* Left Side - Community Development Card */}
          {/* <div className="w-full lg:w-2/5 bg-white p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Community Development</h2>
            <p className="text-gray-600 text-lg mb-8 text-justify">
              We take pride in delivering impactful projects that prioritize innovation, community growth, and practical solutions. Our initiatives are designed to optimize resource utilization and contribute with precision-engineered
              strategies.
            </p>
            <ul className="space-y-4 text-left text-gray-700">
              <li className="flex items-center">
                <CircleCheckBig className="text-green-500 w-5 h-5 mr-3" />
                <span>Community-Centric</span>
              </li>
              <li className="flex items-center">
                <CircleCheckBig className="text-green-500 w-5 h-5 mr-3" />
                <span>Renewable Energy</span>
              </li>
              <li className="flex items-center">
                <CircleCheckBig className="text-green-500 w-5 h-5 mr-3" />
                <span>Eco-Friendly Practices</span>
              </li>
              <li className="flex items-center">
                <CircleCheckBig className="text-green-500 w-5 h-5 mr-3" />
                <span>Long-Term Viability</span>
              </li>
            </ul>
          </div> */}

          {/* Right Side - Project Cards */}
          <div className="w-full lg:w-3/5 flex flex-col gap-12">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 border-b pb-6 hover:shadow-xl transition-all duration-300 ease-in-out">
              <img src={About1} alt="GreenFarm Duke" className="w-full lg:w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <div className="text-gray-700 lg:w-2/3">
                <h3 className="font-bold text-lg mb-2">GreenFarm Duke</h3>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 border-b pb-6 hover:shadow-xl transition-all duration-300 ease-in-out">
              <img src={About1} alt="Solar Bloom Sydney" className="w-full lg:w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <div className="text-gray-700 lg:w-2/3">
                <h3 className="font-bold text-lg mb-2">Solar Bloom Sydney</h3>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 hover:shadow-xl transition-all duration-300 ease-in-out">
              <img src={About1} alt="Hydro Nest" className="w-full lg:w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <div className="text-gray-700 lg:w-2/3">
                <h3 className="font-bold text-lg mb-2">Hydro Nest</h3>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
