import React from "react";

const Stats = () => {
  return (
    <div className="py-6 px-6">
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-8 py-8 space-y-8 md:space-y-0 md:space-x-2">
        {/* Stats Section */}
        <div className="stats stats-vertical text-center lg:stats-horizontal md:grid md:grid-cols-5 md:gap-4 w-full">
          <div className="stat">
            <div className="stat-value">2M+</div>
            <div className="stat-title">KWh Energy Saved</div>
          </div>
          <div className="stat">
            <div className="stat-value">100k+</div>
            <div className="stat-title">Customers</div>
          </div>
          <div className="stat">
            <div className="stat-value">10k+</div>
            <div className="stat-title">Hours Saved</div>
          </div>
          <div className="stat">
            <div className="stat-value">30+</div>
            <div className="stat-title">Regions</div>
          </div>
          <div className="stat">
            <div className="stat-value">500+</div>
            <div className="stat-title">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
