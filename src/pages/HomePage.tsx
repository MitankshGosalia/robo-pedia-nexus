
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedTopics from "@/components/home/FeaturedTopics";
import RecentArticles from "@/components/home/RecentArticles";
import GlossaryPreview from "@/components/home/GlossaryPreview";
import TechSpotlight from "@/components/home/TechSpotlight";
import IndustryInsights from "@/components/home/IndustryInsights";
import RoboticsTimeline from "@/components/home/RoboticsTimeline";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FeaturedTopics />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <TechSpotlight />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <RecentArticles />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <RoboticsTimeline />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <IndustryInsights />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <GlossaryPreview />
      </motion.div>
    </Layout>
  );
};

export default HomePage;
