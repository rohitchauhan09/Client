import { motion } from "framer-motion";
import WelcomeSection from "./WelcomeSection";
import AboutWebsite from "./AboutWebsite";
import FeaturesSection from "./FeaturesSection";
import GetStarted from "./GetStarted";

const HomeDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 text-white bg-[#0b1120]"
    >
      <WelcomeSection />
      <AboutWebsite />
      <FeaturesSection />
      <GetStarted />
    </motion.div>
  );
};

export default HomeDashboard;
