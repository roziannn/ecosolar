import React from "react";
import ImgBlog1 from "../assets/img-blog-1.jpg";
import ImgBlog2 from "../assets/img-blog-2.jpg";
import ImgBlog3 from "../assets/img-blog-3.jpg";
import ImgBlog4 from "../assets/img-blog-4.jpg";

const Blogs = () => {
  return (
    <section className="py-12 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-start mb-8">
          <h2 className="text-lg font-semibold text-gray-500">Latest News</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="mt-4 max-w-lg text-3xl md:text-4xl text-gray-800 font-bold leading-snug tracking-wide">Stay updated with our works and industry news</p>
            <div className="mt-4 md:mt-0 md:block hidden">
              <button className="btn btn-success rounded-3xl text-white w-full md:w-auto">View More</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full">
            <figure>
              <img src={ImgBlog1} alt="News 1" className="w-full h-56 md:h-72 object-cover rounded-3xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-gray-500 font-semibold text-xs my-2">Oct 15, 2024</p>
              <h2 className="text-base md:text-lg font-semibold mb-3">The Future of Solar Panels Key Trends to Watch</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">Explore emerging renewable energy trends, including solar and storage innovations of clean power.</p>
            </div>
          </div>
          <div className="w-full">
            <figure>
              <img src={ImgBlog2} alt="News 2" className="w-full h-56 md:h-72 object-cover rounded-3xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-gray-500 font-semibold text-xs my-2">Oct 6, 2024</p>
              <h2 className="text-base md:text-lg font-semibold mb-3">Solar Power for Homes Is it Worth the Investment</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">A benefits and costs of residential solar panel installations, and how homeowners can achieve long-term energy savings.</p>
            </div>
          </div>
          <div className="w-full">
            <figure>
              <img src={ImgBlog3} alt="News 3" className="w-full h-56 md:h-72 object-cover rounded-3xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-gray-500 font-semibold text-xs my-2">Nov 23, 2024</p>
              <h2 className="text-base md:text-lg font-semibold mb-3">Considerations Before Installing Solar Panels on Roof</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">Learn about roof suitability, installation costs, and permits to consider before making the decision to go solar.</p>
            </div>
          </div>
          <div className="w-full">
            <figure>
              <img src={ImgBlog4} alt="News 4" className="w-full h-56 md:h-72 object-cover rounded-3xl" />
            </figure>
            <div className="p-2 text-start">
              <p className="text-gray-500 font-semibold text-xs my-2">Dec 7, 2024</p>
              <h2 className="text-base md:text-lg font-semibold mb-3">How Wind Turbines Generate Electricity</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">Understand the science behind wind turbines, from harnessing wind energy to converting it into usable electricity.</p>
            </div>
            <div className="my-4 md:mt-0 md:hidden">
              <button className="btn btn-success rounded-3xl text-white w-full md:w-auto">View More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
