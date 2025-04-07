import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0b1120] text-white py-4 px-6 md:px-16 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-400 flex items-center gap-2">
        <img className="w-20 md:w-24" src="logo.png" alt="Logo" />
      </div>

      <button
        className="text-white md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="hidden md:flex space-x-6 font-medium gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/latestblogs"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          Latest Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white hover:text-blue-400"
          }
        >
          Create Account
        </NavLink>
      </div>

      <div className="hidden md:flex items-center">
        <Link to="/login">
          <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Create Blog
          </button>
        </Link>
      </div>

      {/* Mobile Menu - Responsive */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0b1120] text-white flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden">
          <NavLink
            to="/"
            className="text-white hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/latestblogs"
            className="text-white hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Latest Posts
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className="text-white hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Create Account
          </NavLink>
          <Link to="/dashboard/homedashboard">
            <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Create Blog
            </button>
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
