import { Bolt, Globe, Shield, MoveUpRight } from "lucide-react";
import ResidentImg from "../assets/resident.jpg";
import BatteryImg from "../assets/battery.jpg";
import CommercialImg from "../assets/commercial.jpg";

export default function Service() {
  return (
    <section className="py-12 h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 text-start mb-10 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-500">Our Services</h2>
          <p className="mt-4 max-w-lg text-4xl text-gray-800 font-bold leading-snug">
            Empowering homes <br /> and businesses with <br /> solar energy
          </p>
          <div className="mt-10 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-200 p-3 rounded-full">
                <Bolt className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold text-gray-800">Reliable Energy Solutions</h3>
                <p className="text-sm text-gray-700">Reliable and sustainable energy solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-200 p-3 rounded-full">
                <Globe className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold text-gray-800">Global Expertise</h3>
                <p className="text-sm text-gray-700">Global expertise with local insights.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-200 p-3 rounded-full">
                <Shield className="text-green-600 w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold text-gray-800">Safety & Security</h3>
                <p className="text-sm text-gray-700">Ensuring safety and security in every solution.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-9/12 grid grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <figure className="relative h-60">
              <img src={ResidentImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl text-sm font-semibold">Residential Solar</div>
            </figure>

            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-start text-gray-600 leading-snug">
                  Efficient solar solution <br /> for your home needs
                </p>
                <button className="w-7 h-7 flex items-center justify-center bg-success text-white rounded-full hover:bg-primary-focus" aria-label="Next">
                  <MoveUpRight size={13} />
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-start text-gray-600 leading-snug">
                  Energy storage with <br />
                  advanced battery
                </p>
                <button className="w-7 h-7 flex items-center justify-center bg-success text-white rounded-full hover:bg-primary-focus" aria-label="Next">
                  <MoveUpRight size={13} />
                </button>
              </div>
            </div>
            <figure className="relative h-60">
              <img src={BatteryImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl text-sm font-semibold">Battery Storage</div>
            </figure>
          </div>

          <div className="card bg-base-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
            <figure className="relative h-60">
              <img src={CommercialImg} alt="Residential Solar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white bg-white bg-opacity-20 border border-neutral-500 backdrop-blur-sm px-3 py-1 rounded-3xl text-sm font-semibold">Commercial Solar</div>
            </figure>
            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-start text-gray-600 leading-snug">
                  Scale your business <br /> with cost-effective
                </p>
                <button className="w-7 h-7 flex items-center justify-center bg-success text-white rounded-full hover:bg-primary-focus" aria-label="Next">
                  <MoveUpRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
