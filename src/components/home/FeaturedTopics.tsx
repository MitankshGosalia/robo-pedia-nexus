
import TopicCard from "../shared/TopicCard";
import { Bot, Cpu, Sliders, Brain, Rocket, ArrowRight } from "lucide-react";

const FeaturedTopics = () => {
  return (
    <section className="py-16 bg-white dark:bg-robotics-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Explore Robotics Topics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into our comprehensive collection of robotics knowledge. From basic components
            to advanced control systems and future technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCard
            title="Robot Types"
            description="Explore industrial, service, mobile, and humanoid robots with detailed classifications and real-world applications."
            icon={<Bot className="h-6 w-6" />}
            href="/topics/robot-types"
            className="animate-fade-in" 
            style={{ animationDelay: "0ms" }}
          />
          
          <TopicCard
            title="Components"
            description="Learn about sensors, actuators, power systems, and other essential hardware that make up robotic systems."
            icon={<Cpu className="h-6 w-6" />}
            href="/topics/components"
            className="animate-fade-in" 
            style={{ animationDelay: "100ms" }}
          />
          
          <TopicCard
            title="Control Systems"
            description="Understand the software and algorithms that enable robots to perceive, plan, and act in their environment."
            icon={<Sliders className="h-6 w-6" />}
            href="/topics/control-systems"
            className="animate-fade-in" 
            style={{ animationDelay: "200ms" }}
          />
          
          <TopicCard
            title="AI in Robotics"
            description="Explore how machine learning, computer vision, and natural language processing are revolutionizing robotics."
            icon={<Brain className="h-6 w-6" />}
            href="/topics/ai-robotics"
            className="animate-fade-in" 
            style={{ animationDelay: "300ms" }}
          />
          
          <TopicCard
            title="Future Technologies"
            description="Discover emerging trends and innovations that will shape the next generation of robotic applications."
            icon={<Rocket className="h-6 w-6" />}
            href="/topics/future-tech"
            className="animate-fade-in" 
            style={{ animationDelay: "400ms" }}
          />
          
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 rounded-lg p-6 flex flex-col items-center justify-center text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h3 className="font-display text-xl font-medium mb-2">Want to contribute?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Share your robotics knowledge and help expand our encyclopedia.
            </p>
            <a 
              href="/contribute" 
              className="text-primary hover:text-primary/90 font-medium flex items-center"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
