import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";



const WelcomeSection = () => {
  const username = localStorage.getItem("username")
  
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a2332] p-6 rounded-lg shadow-md text-center border border-blue-600"
    >
      <div className="flex items-center justify-center space-x-3">
        <FaUser className="text-blue-500 text-3xl" />
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-white"
        >
          Welcome, <span className="text-blue-400">{username}</span>
        </motion.h2>
      </div>
      <p className="text-gray-400 mt-2">
        Manage your blogs, explore new content, and customize your experience.
      </p>
    </motion.div>
  );
};

export default WelcomeSection;
