import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Left Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/about'>
            <li>About</li>
            </Link>
            <Link to='/services'>
            <li>Services</li>
            </Link>
            <Link to='/contact'>
            <li>Contact</li>
            </Link>
            </ul>
          </div>

          {/* Logo Center */}
          <div className="text-2xl font-bold text-black">
            LOGO
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer">
            <button onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
           <ul className="block text-gray-700">
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/about'>
            <li>About</li>
            </Link>
            <Link to='/services'>
            <li>Services</li>
            </Link>
            <Link to='/contact'>
            <li>Contact</li>
            </Link>
            </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;