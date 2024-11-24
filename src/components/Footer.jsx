import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer mx-auto max-w-7xl px-4 mt-32 mb-10">
        <nav className="w-2/3 text-start">
          <img src={logo} alt="logo" width={180} />

          <p className="leading-relaxed">Discover the power of solar energy and transform your life, choosing sustainable solutions. </p>
          <p className="py-3">
            Jl Nusantara Raya II Komp. Aren Jaya, <br />
            East Bekasi, West Java
          </p>
          <div className="flex gap-3 mb-4">
            <Mail className="text-gray-500 hover:text-green-700 cursor-pointer" />
            <Linkedin className="text-gray-500 hover:text-green-700 cursor-pointer" />
            <Instagram className="text-gray-500 hover:text-green-700 cursor-pointer" />
          </div>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          <a className="link link-hover mb-2">Branding</a>
          <a className="link link-hover mb-2">Design</a>
          <a className="link link-hover mb-2">Marketing</a>
          <a className="link link-hover mb-2">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <a className="link link-hover mb-2">Location</a>
          <a className="link link-hover mb-2">Branch Office</a>
          <a className="link link-hover mb-2">Address</a>
          <a className="link link-hover mb-2">Warehouse</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Career</h6>
          <a className="link link-hover mb-2">Job</a>
          <a className="link link-hover mb-2">Internship</a>
          <a className="link link-hover mb-2">Program</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Help</h6>
          <a className="link link-hover mb-2">Costumer Support</a>
          <a className="link link-hover mb-2">Installation Details</a>
          <a className="link link-hover mb-2">Terms of use</a>
          <a className="link link-hover mb-2">Privacy policy</a>
        </nav>
      </footer>
      <footer className="footer  mx-auto max-w-7xl px-4 border-t border-base-300 py-6">
        <p>Ecosolar Industries. Providing reliable eco-tech since 2008</p>
      </footer>
    </>
  );
};

export default Footer;
