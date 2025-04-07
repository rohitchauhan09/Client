import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/App Layout/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen bg-[#0b1120] text-white flex flex-col items-center justify-center px-6 md:px-16"
    >
      <div className="max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
          About <span className="text-white">Us</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to our blog—a space where ideas flourish, creativity thrives,
          and voices are heard. We are passionate about sharing insightful
          stories, expert opinions, and thought-provoking discussions.
        </p>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-300">
              We are a team of writers, creators, and thinkers committed to
              delivering high-quality content. Our goal is to inspire, educate,
              and connect people through meaningful storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              What We Do
            </h3>
            <p className="text-gray-300">
              Our platform covers a variety of topics, including culture,
              technology, self-growth, and trending discussions. We believe in
              the power of words to create impact and drive change.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest articles and engage with our vibrant
            community.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
      </motion.section>
    </>
      
  );
};

export default AboutUs;
