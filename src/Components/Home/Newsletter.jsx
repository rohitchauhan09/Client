import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-[#0b1120] text-white p-8 shadow-lg w-full text-center "
    >
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-400 mb-6">
        Stay updated with the latest blog posts, news, and special updates. Enter your email below to subscribe.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="bg-[#1a2332] text-white p-3 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="bg-[#1a2332] text-white p-3 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-all"
        >
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Newsletter;