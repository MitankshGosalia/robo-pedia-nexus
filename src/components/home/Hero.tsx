
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-muted dark:from-robotics-background dark:to-robotics-background/80 py-20 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>The comprehensive robotics encyclopedia</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            RoboPedia: The Online Encyclopedia of Robotics
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A free, structured, and visual encyclopedia for everything robotics.
            From basic components to cutting-edge AI integration and future technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
