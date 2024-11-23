import React from "react";
import { CircleCheckBig } from "lucide-react";

import About1 from "../assets/about-1.jpg";

const Projects = () => {
  return (
    <section className="py-12 h-screen flex items-center bg-neutral-100">
      <div className="container max-w-7xl mx-auto px-4 text-start">
        <h2 className="text-3xl font-semibold text-gray-400 py-12">Our Projects</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Community Development Box */}
          <div className="w-full lg:w-2/5 max-w-full bg-white p-10 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold mb-8">Community Development</h1>
            <p className="text-gray-600 text-justify mb-6">
              We take pride in delivering impactful projects that prioritize innovation, community growth, and practical solutions. Our initiatives are designed to optimize resource utilization and contribute with precision-engineered
              strategies.
            </p>
            <ul className="space-y-4">
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
          </div>

          {/* Project Cards */}
          <div className="w-full lg:w-3/5 max-w-full">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6 border-b pb-4">
              <img src={About1} alt="GreenFarm Duke" className="w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <p className="text-gray-600">
                <span className="font-bold text-lg">GreenFarm Duke</span>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.
              </p>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6 border-b pb-4">
              <img src={About1} alt="Solar Bloom Sydney" className="w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <p className="text-gray-600">
                <span className="font-bold text-lg">Solar Bloom Sydney</span>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.
              </p>
            </div>
            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6 border-b pb-4">
              <img src={About1} alt="Hydro Nest" className="w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <p className="text-gray-600">
                <span className="font-bold text-lg">Hydro Nest</span>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi quidem molestiae odit commodi repellendus quibusdam eos exercitationem placeat maiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
