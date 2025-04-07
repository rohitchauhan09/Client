import { motion } from "framer-motion";

const AboutWebsite = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a2332] p-6 mt-6 rounded-lg shadow-md border border-blue-600"
    >
      <h3 className="text-3xl font-semibold text-white text-center">
        About This Blog Platform
      </h3>
      <p className="text-gray-400 mt-2">
        This platform allows users to create, edit, and manage blog posts
        easily. Stay connected with the latest trends, share insights, and
        engage with your audience.
      </p>
    </motion.div>
  );
};

export default AboutWebsite;
