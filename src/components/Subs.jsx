import React from "react";

const Subs = () => {
  return (
    <section className="flex items-center py-10 px-4 lg:px-0 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 bg-gray-100 rounded-3xl">
        <div className="text-center py-10 md:py-20">
          <p className="text-2xl md:text-4xl font-bold leading-snug tracking-wide">Subscribe for Exclusive Offer</p>
          <p className="pt-4 md:pt-6 pb-6 md:pb-8 text-sm md:text-base leading-relaxed">
            The ultimate plan guide to sustainable <br className="hidden md:block" />
            energy solutions for your home and business!
          </p>
          <div className="items-center justify-center join">
            <input className="input input-bordered border-0 rounded-full join-item w-full md:w-auto pr-6 md:pr-32" placeholder="Enter your email address" />
            <button className="btn btn-success text-white join-item rounded-full md:rounded-r-full ">Subscribe now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subs;
