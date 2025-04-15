
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Lightbulb, Zap, Shield, Atom } from "lucide-react";
import { motion } from "framer-motion";

const TechSpotlight = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-robotics-blue/5 to-robotics-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technology Spotlight
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore the latest technological advancements in robotics shaping industries and everyday life.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Reinforcement Learning</h3>
              <p className="text-muted-foreground mb-4">Teaching robots through trial and error with advanced reward systems.</p>
              <Link to="/topics/ai-robotics/machine-learning" className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Energy Efficiency</h3>
              <p className="text-muted-foreground mb-4">Next-generation power systems extending robot operational lifespans.</p>
              <Link to="/topics/components/power" className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Safety Protocols</h3>
              <p className="text-muted-foreground mb-4">Advanced systems ensuring human-robot collaboration safety.</p>
              <Link to="/topics/control-systems" className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Quantum Applications</h3>
              <p className="text-muted-foreground mb-4">Exploring quantum computing principles for next-gen robotics.</p>
              <Link to="/topics/future-tech/quantum-robotics" className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/topics">Explore All Technologies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechSpotlight;
