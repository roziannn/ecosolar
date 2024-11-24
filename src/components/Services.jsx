import { Bolt, Globe, Shield, MoveUpRight } from "lucide-react";
import ResidentImg from "../assets/resident.jpg";
import BatteryImg from "../assets/battery.jpg";
import CommercialImg from "../assets/commercial.jpg";

export default function Service() {
  return (
    <section className="py-12 h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 text-start mb-10 lg:mb-0">
          <h2 className="text-lg font-semibold text-gray-500">Our Services</h2>
          <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug">
            Empowering homes <br /> and businesses with <br /> solar energy
          </p>
          <div className="mt-10 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <Bolt className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Reliable Energy Solutions</h3>
                <p>Reliable and sustainable energy solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <Globe className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Global Expertise</h3>
                <p>Global expertise with local insights.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <Shield className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Safety & Security</h3>
                <p>Ensuring safety and security in every solution.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-9/12 grid grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <figure className="relative h-60">
              <img src={ResidentImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute flex bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl items-center font-semibold">
                Residential Solar <MoveUpRight size={13} className="ml-2" />
              </div>
            </figure>

            <div className="card-body p-5">
              <p className="leading-snug">Efficient solar solution for your home needs</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <figure className="relative h-60">
              <img src={BatteryImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute flex bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl items-center font-semibold">
                Battery Storage <MoveUpRight size={13} className="ml-2" />
              </div>
            </figure>
            <div className="card-body p-5">
              <p className="leading-snug">Energy storage with advanced battery </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <figure className="relative h-60">
              <img src={CommercialImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute flex bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl items-center font-semibold">
                Commercial Solar
                <MoveUpRight size={13} className="ml-2" />
              </div>
            </figure>
            <div className="card-body p-5">
              <p className="leading-snug">Scale your business with cost-effective</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
