import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer text-base-content p-10 px-16 mt-20">
        <nav className="w-2/3 text-start">
          <h1 className="text-2xl font-bold mb-3">ecosolar</h1>
          <p>Discover the power of solar energy and transform your life, choosing sustainable solutions. </p>
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
          <a className="link link-hover mb-2">About us</a>
          <a className="link link-hover mb-2">Contact</a>
          <a className="link link-hover mb-2">Jobs</a>
          <a className="link link-hover mb-2">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Career</h6>
          <a className="link link-hover mb-2">About us</a>
          <a className="link link-hover mb-2">Contact</a>
          <a className="link link-hover mb-2">Jobs</a>
          <a className="link link-hover mb-2">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-3">Help</h6>
          <a className="link link-hover mb-2">Costumer Support</a>
          <a className="link link-hover mb-2">Installation Details</a>
          <a className="link link-hover mb-2">Terms of use</a>
          <a className="link link-hover mb-2">Privacy policy</a>
        </nav>
      </footer>
      <footer className="footer text-base-content border-t border-base-300 px-16 py-6">
        <p>Ecosolar Industries. Providing reliable eco-tech since 2008</p>
      </footer>
    </>
  );
};

export default Footer;
