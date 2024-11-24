import React, { useState } from "react";
import { Menu, Eclipse } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 text-center border-b border-slate-200 max-w-7xl px-4 mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-lg font-extrabold bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text">
          <Eclipse size={20} className="text-green-600" />
          ecosolar
        </a>
      </div>

      <div className="hidden lg:flex flex-1 justify-center space-x-4">
        <a className="btn btn-sm btn-ghost">About</a>
        <a className="btn btn-sm btn-ghost">Services</a>
        <a className="btn btn-sm btn-ghost">Projects</a>
        <a className="btn btn-sm btn-ghost">Testimonial</a>
      </div>

      <div className="justify-end hidden lg:block">
        <button className="btn btn-sm btn-success rounded-3xl text-white">Contact Us</button>
      </div>

      <div className="navbar-end flex md:hidden">
        <div className="dropdown">
          <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            <Menu />
          </button>
          {isMenuOpen && (
            <ul
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow transform absolute right-0 ${isMenuOpen ? "translate-y-0" : "translate-y-full"} transition-transform duration-300`}
              style={{ left: "auto", right: "0" }}
            >
              <li className="mb-2">
                <a>Homepage</a>
              </li>
              <li className="mb-2">
                <a>Portfolio</a>
              </li>
              <li className="mb-2">
                <a>About</a>
              </li>
              <li className="mb-2">
                <a>Pricing</a>
              </li>
              <li className="mb-2">
                <a>Testimonial</a>
              </li>
              <li className="mb-2">
                <button className="btn btn-sm btn-outline btn-success">Contact Us</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
