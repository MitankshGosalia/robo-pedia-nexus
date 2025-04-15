
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Search, Robot, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-1/3 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/3 w-64 h-64 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              <span>The comprehensive robotics encyclopedia</span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              RoboPedia: The Online Encyclopedia of Robotics
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              A free, structured, and visual encyclopedia for everything robotics.
              From basic components to cutting-edge AI integration and future technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link to="/topics">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/glossary">
                <Button size="lg" variant="outline">
                  Robotics Glossary
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground text-sm">Topics Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <div className="text-muted-foreground text-sm">Technical Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-muted-foreground text-sm">Updated Content</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[400px] w-full">
              {/* Animated robot visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[300px] h-[300px]">
                  {/* Orbiting elements */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-[280px] h-[280px] rounded-full border border-primary/20"
                    style={{ marginTop: '-140px', marginLeft: '-140px' }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear"
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-card shadow-md border border-primary flex items-center justify-center"
                      style={{ marginLeft: '-20px', marginTop: '-5px' }}
                    >
                      <Robot className="h-5 w-5 text-primary" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-[220px] h-[220px] rounded-full border border-accent/20"
                    style={{ marginTop: '-110px', marginLeft: '-110px' }}
                    animate={{ rotate: -360 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear"
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-card shadow-md border border-accent flex items-center justify-center"
                      style={{ marginLeft: '-20px', marginTop: '-5px' }}
                    >
                      <Code className="h-5 w-5 text-accent" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-[160px] h-[160px] rounded-full border border-secondary/20"
                    style={{ marginTop: '-80px', marginLeft: '-80px' }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 25,
                      ease: "linear"
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-card shadow-md border border-secondary flex items-center justify-center"
                      style={{ marginLeft: '-20px', marginTop: '-5px' }}
                    >
                      <Zap className="h-5 w-5 text-secondary" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Center robot icon */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-card shadow-lg border-2 border-primary flex items-center justify-center"
                    style={{ marginTop: '-40px', marginLeft: '-40px' }}
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(147, 51, 234, 0)", "0 0 30px rgba(147, 51, 234, 0.7)", "0 0 0 rgba(147, 51, 234, 0)"]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <Robot className="h-9 w-9 text-primary" />
                  </motion.div>
                </div>
              </div>
              
              {/* Animated wave effect at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                <motion.div 
                  className="absolute bottom-[-10px] left-[-100px] right-[-100px] h-32 bg-primary/5"
                  style={{
                    borderRadius: "100% 100% 0 0"
                  }}
                  animate={{
                    scaleX: [1, 1.2, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-[-15px] left-[-100px] right-[-100px] h-32 bg-accent/5"
                  style={{
                    borderRadius: "100% 100% 0 0"
                  }}
                  animate={{
                    scaleX: [1.2, 1, 1.2],
                    y: [0, -8, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
