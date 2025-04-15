
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in delay-100">
            {description}
          </p>
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-gentle"></div>
          <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse-gentle delay-150"></div>
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full filter blur-2xl animate-pulse-gentle delay-300"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="animate-scale-in">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopicPageLayout;
