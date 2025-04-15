
import { Layout } from "@/components/layout";
import TopicCard from "@/components/shared/TopicCard";
import { motion } from "framer-motion";
import { Bot, Factory, Cpu, Sliders, Brain, Zap } from "lucide-react";

const TopicsPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Robotics Topics
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the fascinating world of robotics through our comprehensive collection of topics. 
            From industrial automation to futuristic technologies, dive into the knowledge that powers innovation.
          </p>
        </motion.div>

        {/* Main Topics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <TopicCard
              title="Robot Types"
              description="Explore different categories of robots designed for various applications and industries."
              icon={<Bot className="h-6 w-6" />}
              href="/topics/robot-types"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>

          <motion.div variants={item}>
            <TopicCard
              title="Components"
              description="Learn about the essential parts that make up robotic systems, from sensors to actuators."
              icon={<Cpu className="h-6 w-6" />}
              href="/topics/components"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>

          <motion.div variants={item}>
            <TopicCard
              title="Control Systems"
              description="Understand the principles behind robot movement, stability, and precision."
              icon={<Sliders className="h-6 w-6" />}
              href="/topics/control-systems"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>

          <motion.div variants={item}>
            <TopicCard
              title="AI in Robotics"
              description="Discover how artificial intelligence is revolutionizing robotic capabilities."
              icon={<Brain className="h-6 w-6" />}
              href="/topics/ai-robotics"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>

          <motion.div variants={item}>
            <TopicCard
              title="Future Technologies"
              description="Preview the cutting-edge innovations shaping the next generation of robotics."
              icon={<Zap className="h-6 w-6" />}
              href="/topics/future-tech"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>

          <motion.div variants={item}>
            <TopicCard
              title="Industrial Robotics"
              description="Explore how robots are transforming manufacturing and production processes."
              icon={<Factory className="h-6 w-6" />}
              href="/topics/robot-types/industrial"
              className="h-full hover:scale-[1.02] transition-all"
            />
          </motion.div>
        </motion.div>

        {/* Interactive Feature */}
        <motion.div 
          className="mt-24 mb-12 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl font-bold mb-4">Robotics Exploration</h2>
              <p className="mb-6 text-muted-foreground">
                Our comprehensive robotics encyclopedia offers in-depth knowledge on various aspects of robotics.
                From educational materials for beginners to advanced technical specifications for experts.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Neural Networks</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Autonomous Systems</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1], 
                    opacity: [0.7, 0.4, 0.7] 
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                  }}
                >
                  <div className="w-40 h-1 bg-accent/30 rounded-full" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear"
                  }}
                >
                  <div className="w-1 h-40 bg-primary/30 rounded-full" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-lg font-bold"
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(147, 51, 234, 0)", "0 0 20px rgba(147, 51, 234, 0.7)", "0 0 0 rgba(147, 51, 234, 0)"]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <Bot className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TopicsPage;
