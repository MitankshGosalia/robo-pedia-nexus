
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TopicPageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  gradientColors?: string;
}

const TopicPageLayout = ({ 
  children, 
  title, 
  description,
  gradientColors = "from-primary/5 via-accent/5 to-secondary/5"
}: TopicPageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className={`relative bg-gradient-to-br ${gradientColors} py-12 lg:py-20 overflow-hidden`}>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/topics" className="inline-flex">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-background/40 group transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Topics
            </Button>
          </Link>
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
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
            className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"
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
            className="absolute top-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full filter blur-2xl"
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
      </div>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="animate-scale-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default TopicPageLayout;
