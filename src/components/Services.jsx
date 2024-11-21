import { Bolt, Globe, Shield } from "lucide-react";
import ResidentImg from "../assets/resident.jpg";

export default function Service() {
  return (
    <section className="py-12 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-start mb-10 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-500">Our Services</h2>
          <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug">
            Empowering homes <br /> and businesses with <br /> solar energy
          </p>
          <div className="mt-6 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500 p-3 rounded-full">
                <Bolt className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-semibold text-gray-800">Reliable Energy Solutions</h3>
                <p className="text-sm text-gray-700">Reliable and sustainable energy solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500 p-3 rounded-full">
                <Globe className="text-sm text-white w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-semibold text-gray-800">Global Expertise</h3>
                <p className="text-sm text-gray-700">Global expertise with local insights.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500 p-3 rounded-full">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-semibold text-gray-800">Safety & Security</h3>
                <p className="text-sm text-gray-700">Ensuring safety and security in every solution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="lg:w-9/12 grid grid-cols-3 gap-4">
          <div className="card card-compact bg-base-100 w-60 shadow-xl rounded-3xl">
            <figure className="w-full h-56 relative">
              <img src={ResidentImg} alt="Shoes" className="rounded-3xl object-cover w-full h-full" />
            </figure>
            <div className="card-body">
              <p className="text-lg card-title">Residential Solar</p>
              <p className="text-start">Power your home efficiently.</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-60 shadow-xl rounded-3xl">
            <div className="card-body">
              <p className="text-lg card-title">Residential Solar</p>
              <p className="text-start">Power your home efficiently.</p>
            </div>
            <figure className="w-full h-56 relative">
              <img src={ResidentImg} alt="Shoes" className="rounded-3xl object-cover w-full h-full" />
            </figure>
          </div>
          <div className="card card-compact bg-base-100 w-60 shadow-xl rounded-3xl">
            <figure className="w-full h-56 relative">
              <img src={ResidentImg} alt="Shoes" className="rounded-3xl object-cover w-full h-full" />
            </figure>
            <div className="card-body">
              <p className="text-lg card-title">Commercial Solar</p>
              <p className="text-start">Scale your business with sustainable energy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
