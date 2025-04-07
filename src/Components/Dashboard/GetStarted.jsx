import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a2332] p-8 mt-6 rounded-lg shadow-md text-center border border-blue-600"
    >
      <h3 className="text-3xl font-semibold text-white">Get Started</h3>
      <p className="text-gray-400 mt-4 text-lg">
        Ready to share your thoughts? Click{" "}
        <span className="text-blue-400 font-bold">"Create Blog"</span> to start
        your journey!
      </p>
    </motion.div>
  );
};

export default GetStarted;
