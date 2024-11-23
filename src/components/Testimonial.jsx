import React from "react";
import { Star, CircleArrowLeft, CircleArrowRight, Circle } from "lucide-react";

const Testimonial = () => {
  const totalStars = 5;
  const filledStars = 4;

  return (
    <section className="py-12 h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-start mb-8">
          <h2 className="text-2xl font-semibold text-gray-400">Testimonials</h2>
          <div className="flex justify-between">
            <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug tracking-wide">A few Reviews From Our Happy Customers</p>
            <h2 className="flex justify-normal gap-1 text-gray-400">
              <CircleArrowLeft size={32} />
              <CircleArrowRight size={32} />
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg bg-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Customer" className="object-cover w-full h-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Kansas Smith</h3>
                <div className="flex mt-1">
                  {Array.from({ length: totalStars }).map((_, index) => (
                    <Star key={index} className={`w-3 h-3 ${index < filledStars ? "text-green-500" : "text-neutral-200"}`} fill={index < filledStars ? "currentColor" : "currentColor"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-start text-gray-900 italic mb-2">"Thanks to Ecosolar, we are now fully reliant on solar energy. The product is durable, has a modern design, and is incredibly efficient. The best investment ever"</p>
            <p className="text-xs text-start font-semibold text-gray-500 mb-0">Surabaya, Indonesia</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Customer" className="object-cover w-full h-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Charlotte Aston</h3>
                <div className="flex mt-1">
                  {Array.from({ length: totalStars }).map((_, index) => (
                    <Star key={index} className={`w-3 h-3 ${index < filledStars ? "text-green-500" : "text-neutral-200"}`} fill={index < filledStars ? "currentColor" : "currentColor"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-start text-gray-900 italic mb-2">"I've been using Ecosolar for 6 months now, and I couldn’t be happier. It’s a reliable product that has helped us save energy.."</p>
            <p className="text-xs text-start font-semibold text-gray-500 mb-0">Bandung, Indonesia</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Customer" className="object-cover w-full h-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Edwarn Moorey</h3>
                <div className="flex mt-1">
                  {Array.from({ length: totalStars }).map((_, index) => (
                    <Star key={index} className={`w-3 h-3 ${index < filledStars ? "text-green-500" : "text-neutral-200"}`} fill={index < filledStars ? "currentColor" : "currentColor"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-start text-gray-900 italic mb-2">"The installation was simple, and our electricity bills have significantly decreased! Absolutely satisfied with its performance, and it's eco-friendly too!!"</p>
            <p className="text-xs text-start font-semibold text-gray-500 mb-0">Brisbane, Australia</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Customer" className="object-cover w-full h-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Jonathan K.</h3>
                <div className="flex mt-1">
                  {Array.from({ length: totalStars }).map((_, index) => (
                    <Star key={index} className={`w-3 h-3 ${index < filledStars ? "text-green-500" : "text-neutral-200"}`} fill={index < filledStars ? "currentColor" : "currentColor"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-start text-gray-900 italic mb-2">
              "Perfect solution for reducing our carbon footprint. Its performance is stable even on cloudy days. The support team was also very helpful during the installation process"
            </p>
            <p className="text-xs text-start font-semibold text-gray-500 mb-0">Darfield, New Zealand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
