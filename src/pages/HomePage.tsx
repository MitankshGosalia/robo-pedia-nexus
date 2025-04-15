
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedTopics from "@/components/home/FeaturedTopics";
import RecentArticles from "@/components/home/RecentArticles";
import GlossaryPreview from "@/components/home/GlossaryPreview";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedTopics />
      <RecentArticles />
      <GlossaryPreview />
    </Layout>
  );
};

export default HomePage;
