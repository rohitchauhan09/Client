import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const hotTopics = [
  { title: "Business", articles: 45, image: "Bussiness.webp" },
  { title: "Travel", articles: 36, image: "Travel.webp" },
  { title: "Culture", articles: 18, image: "Culture.webp" },
  { title: "Lifestyle", articles: 44, image: "LifeStyle.webp" },
];

const HotTopics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hotTopics.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + hotTopics.length) % hotTopics.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Adjusted speed for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0b1120] text-white p-6 shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Left Container */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/4 bg-[#1a2332] p-6 rounded-lg shadow-lg text-center md:text-left"
      >
        <h2 className="text-2xl font-bold mb-3">Hot Topics</h2>
        <p className="text-gray-400">
          Don't miss out on the latest news about Travel tips, Hotel reviews, Food guides...
        </p>
        <div className="flex justify-center md:justify-start space-x-3 mt-4">
          <button onClick={prevSlide} className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
            <FaArrowLeft className="text-white" />
          </button>
          <button onClick={nextSlide} className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </motion.div>

      {/* Right Container - Slideshow */}
      <div className="w-full md:w-3/4 flex items-center overflow-hidden relative">
        <div className="w-full flex gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory">
          {hotTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.6,
                scale: index === currentIndex ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
              className={`min-w-[70%] md:min-w-[30%] lg:min-w-[25%] bg-[#2a3348] rounded-lg shadow-md p-4 text-center transition-transform snap-center ${
                index === currentIndex ? "scale-105" : "scale-95"
              }`}
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-gray-400">{topic.articles} Articles</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotTopics;
