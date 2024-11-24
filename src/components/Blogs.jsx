import React from "react";
import SolarFarm from "../assets/solar-farm.jpg";
import Img2 from "../assets/solar-blog-1.jpg";

const Blogs = () => {
  return (
    <section className="py-12 h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className="text-start mb-8">
          <h2 className="text-lg font-semibold text-gray-500">Latest News</h2>
          <div className="flex justify-between">
            <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug tracking-wide">Stay updated with our works and industry news</p>
            {/* <h2 className="flex justify-normal gap-1 text-gray-400">lihat semua</h2> */}
            <button className="btn btn-success rounded-3xl text-white">View More</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-700 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-3 w-full">The Future of Solar Panels Key Trends to Watch</h2>
              <p className="text-sm text-gray-700 leading-relaxed">Explore emerging renewable energy trends, including solar advancements and storage innovations of clean power</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={Img2} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-700 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-3 w-full">Solar Power for Homes Is it Worth the Investment</h2>
              <p className="text-sm text-gray-700 leading-relaxed">A benefits and costs of residential solar panel installations, and how homeowners can achieve long-term energy savings.</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-700 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-3 w-full">Considerations Before Installing Solar Panels on Your Roof</h2>
              <p className="text-sm text-gray-700 leading-relaxed">Learn about roof suitability, installation costs, and permits to consider before making the decision to go solar</p>
            </div>
          </div>
          <div className="w-auto">
            <figure>
              <img src={SolarFarm} alt="Shoes" className="w-full h-48 object-cover rounded-2xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-green-700 font-semibold text-xs my-2">October 15, 2024</p>
              <h2 className="text-lg font-semibold mb-3 w-full">How Wind Turbines Generate Electricity</h2>
              <p className="text-sm text-gray-700 leading-relaxed">Understand the science behind wind turbines, from harnessing wind energy to converting it into usable electricity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
