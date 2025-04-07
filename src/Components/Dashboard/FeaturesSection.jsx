import { motion } from "framer-motion";
const FeaturesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a2332] p-8 mt-6 rounded-lg shadow-md border border-blue-600"
    >
      <h3 className="text-3xl font-semibold text-white text-center">
        Key Features
      </h3>
      <ul className="text-gray-400 mt-4 text-lg list-disc pl-8">
        <li>Create and publish blog posts effortlessly</li>
        <li>Manage and edit your content seamlessly</li>
        <li>Interact with readers through an engaging comment system</li>
        <li>Experience a sleek and modern dark-themed UI</li>
      </ul>
    </motion.div>
  );
};

export default FeaturesSection
