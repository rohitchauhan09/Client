import React from "react";
import { IoMdAlert } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1120] text-white ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1a2332] text-white px-4 py-6 rounded-2xl shadow-xl flex flex-col items-center w-[480px] text-center"
      >
        <IoMdAlert className="text-red-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
        <p className="text-gray-400 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition duration-300 shadow-lg"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
