import React from "react";
import SolarFarm from "../assets/solar-farm.jpg";
import Img2 from "../assets/solar-blog-1.jpg";

const Blogs = () => {
  return (
    <section className="py-12 h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-start mb-8">
          <h2 className="text-2xl font-semibold text-gray-400">Latest News</h2>
          <div className="flex justify-between">
            <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug tracking-wide">Stay updated with our works and industry news</p>
            <h2 className="flex justify-normal gap-1 text-gray-400">lihat semua</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-600 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-2 w-full">Wind Turbine for Farm Expansion</h2>
              <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi a animi ex, quaerat maiores.</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={Img2} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-600 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-2 w-full">Wind Turbine for Farm Expansion</h2>
              <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi a animi ex, quaerat maiores.</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-600 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-2 w-full">Wind Turbine for Farm Expansion</h2>
              <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi a animi ex, quaerat maiores.</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-600 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-2 w-full">Wind Turbine for Farm Expansion</h2>
              <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi a animi ex, quaerat maiores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
