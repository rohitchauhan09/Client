import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-[#0b1120] text-white py-24 px-12 flex flex-col md:flex-row items-center justify-center md:justify-between">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <p className="text-gray-400 text-lg">Welcome to Our Blog!</p>
        <h1 className="text-6xl font-bold mt-2">
          Discover <span className="text-blue-400">Inspiring Stories</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Explore insightful articles, latest trends, and engaging content curated 
          by passionate writers. Stay updated and inspired with our handpicked 
          blogs on technology, lifestyle, and more.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="mt-8 md:mt-0"
      >
        <motion.img 
          src="banner.webp" 
          alt="Blogger Illustration" 
          className="w-[500px] h-[350px] rounded-lg shadow-lg object-cover"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
