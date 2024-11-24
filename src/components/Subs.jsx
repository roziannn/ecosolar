import React from "react";

const Subs = () => {
  return (
    <section className="flex items-center">
      <div className="container max-w-7xl mx-auto px-4 bg-gray-100 rounded-3xl">
        <div className="text-center py-20">
          <p className="text-4xl font-bold leading-snug tracking-wide">Subscribe for Exclusive Offer</p>
          <p className="pt-6 pb-8 leading-relaxed">
            The ultimate plan guide to sustainable <br /> energy solutions for your home and business!
          </p>
          <div className="join">
            <input className="input input-bordered border-0 rounded-full join-item pr-32" placeholder="Enter your email address" />
            <button className="btn btn-success text-white join-item rounded-r-full">Subscribe now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subs;