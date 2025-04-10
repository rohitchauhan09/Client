import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

const CreateBlogInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1120] text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1a2332] text-white px-8 py-10 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-md"
      >
        <FaLock className="text-blue-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold">Login Required</h1>
        <p className="text-gray-400 mt-2">
          You need to be logged in to create a blog post. Please log in to
          continue.
        </p>
        <Link
          to="/login"
          className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition duration-300 shadow-lg"
        >
          Login Now
        </Link>
      </motion.div>
    </div>
  );
};

export default CreateBlogInfo;
