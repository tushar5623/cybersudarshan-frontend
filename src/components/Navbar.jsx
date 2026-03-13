import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Active link ab Cyan ki jagah Yellow glow karega
  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400";
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ================= LOGO SECTION START ================= */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            
            {/* Logo image ka shadow ab Cyber-Gold hai */}
            <img
              src={logo}
              alt="Cyber Sudarshan Logo"
              className="h-14 w-14 object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.8)] transition-all"
            />

            {/* Stacked Text (Gold & Amber Gradient) */}
            <div className="flex flex-col items-start justify-center leading-none">
              <span className="text-xl md:text-2xl font-extrabold uppercase bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
                CYBER
              </span>
              <span className="text-xl md:text-2xl font-extrabold uppercase bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tight -mt-0.5 md:-mt-1">
                SUDARSHAN
              </span>
            </div>
          </Link>
          {/* ================= LOGO SECTION END ================= */}


          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Home</Link>
              <Link to="/blogs" className={`${isActive('/blogs')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Blogs</Link>
              <a href="/#about" className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/#services" className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
              
              {/* Contact Us button theme updated */}
              <a href="/#contact" className="bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full text-sm font-medium transition-all">Contact Us</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className={`${isActive('/')} block px-3 py-2 rounded-md text-base font-medium`}>Home</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} className={`${isActive('/blogs')} block px-3 py-2 rounded-md text-base font-medium`}>Blogs</Link>
            <a href="/#services" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;