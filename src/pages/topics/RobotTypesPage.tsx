
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Bot, Factory, Cpu, Cog, Navigation, Brain } from "lucide-react";
import { motion } from "framer-motion";
import RobotAnimation from "@/components/animations/RobotAnimation";
import InfoSection from "@/components/topics/InfoSection";

const RobotTypesPage = () => {
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
    <TopicPageLayout
      title="Robot Types"
      description="Explore the diverse world of robotics, from industrial automation to humanoid companions. Learn about different robot categories, their applications, and unique characteristics."
      gradientColors="from-robotics-purple/10 via-robotics-blue/5 to-robotics-darkPurple/10"
    >
      <motion.div 
        className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-muted/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <RobotAnimation type="industrial" size={180} />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-display font-bold mb-3">The Evolution of Robotics</h2>
          <p className="text-muted-foreground mb-4">
            Robots have evolved from simple mechanical machines to complex autonomous systems capable of perception, 
            decision-making, and adaptation. Today's robotics landscape encompasses diverse types of robots designed 
            for specific tasks and environments, each with unique capabilities, control systems, and applications.
          </p>
          <p className="text-muted-foreground">
            This overview explores the major categories of robots, their defining characteristics, 
            industrial applications, and the technologies that power them. From factory floors to operating 
            rooms, and from homes to deep space, robots continue to transform how we work and live.
          </p>
        </div>
      </motion.div>

      <InfoSection
        title="Industrial Robots"
        description="Industrial robots are the backbone of modern manufacturing, revolutionizing production processes with their precision, speed, and reliability."
        infoPoints={[
          "Industrial robots perform repetitive tasks with precision and consistency that exceed human capabilities.",
          "The global industrial robotics market is projected to reach $75.6 billion by 2027, growing at a CAGR of 9.2%.",
          "Modern industrial robots integrate advanced vision systems, AI algorithms, and collaborative capabilities.",
          "Six-axis articulated robots are the most common type, offering flexibility similar to a human arm."
        ]}
        applications={[
          {
            title: "Automotive Manufacturing",
            description: "Robots perform welding, painting, assembly, and quality control, improving precision and reducing production time."
          },
          {
            title: "Electronics Assembly",
            description: "Pick-and-place robots handle delicate electronic components with precision and speed impossible for human workers."
          },
          {
            title: "Food Processing",
            description: "Specialized robots maintain hygiene standards while automating packaging, sorting, and quality inspection."
          },
          {
            title: "Metal Fabrication",
            description: "Robots perform cutting, welding, and finishing operations with consistent quality and reduced waste."
          }
        ]}
        resources={[
          { title: "International Federation of Robotics", url: "https://ifr.org/" },
          { title: "Robotics Industries Association", url: "https://www.robotics.org/" },
          { title: "Journal of Industrial Robotics", url: "https://www.emerald.com/insight/publication/issn/0143-991X" }
        ]}
        relatedTopics={[
          { title: "Control Systems for Industrial Robots", href: "/topics/control-systems" },
          { title: "Actuators in Robotics", href: "/topics/components/actuators" },
          { title: "Machine Learning for Robots", href: "/topics/ai-robotics/machine-learning" }
        ]}
      >
        <RobotAnimation type="industrial" size={150} />
      </InfoSection>

      <InfoSection
        title="Service Robots"
        description="Service robots assist humans by performing tasks in professional and personal settings, improving efficiency and quality of life."
        infoPoints={[
          "Service robots operate in human environments, requiring advanced perception and navigation capabilities.",
          "This sector is growing at 21% annually, with healthcare and logistics leading adoption.",
          "Human-robot interaction is a critical component of service robot design and functionality.",
          "Advances in AI and machine learning have enabled service robots to adapt to dynamic environments."
        ]}
        applications={[
          {
            title: "Healthcare Assistance",
            description: "Robots deliver medications, transport supplies, and assist with patient monitoring in hospitals."
          },
          {
            title: "Customer Service",
            description: "Interactive robots provide information, guidance, and assistance in retail and hospitality settings."
          },
          {
            title: "Domestic Help",
            description: "Home robots perform cleaning, lawn mowing, and other household tasks with minimal human intervention."
          },
          {
            title: "Elderly Care",
            description: "Specialized robots provide medication reminders, mobility assistance, and social interaction for elderly individuals."
          }
        ]}
        resources={[
          { title: "International Service Robot Association", url: "https://ifr.org/service-robots" },
          { title: "Journal of Service Robotics", url: "https://www.springer.com/journal/11370" }
        ]}
        relatedTopics={[
          { title: "Human-Robot Interaction", href: "/topics/ai-robotics/human-robot-interaction" },
          { title: "Computer Vision in Robotics", href: "/topics/ai-robotics/computer-vision" }
        ]}
      >
        <RobotAnimation type="service" size={150} />
      </InfoSection>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <TopicCard
            title="Industrial Robots"
            description="Manufacturing, assembly, and automation workhorses that power modern factories."
            icon={<Factory className="h-6 w-6" />}
            href="/topics/robot-types/industrial"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Mobile Robots"
            description="Autonomous vehicles and platforms designed for navigation and transportation."
            icon={<Navigation className="h-6 w-6" />}
            href="/topics/robot-types/mobile"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Service Robots"
            description="Robots designed to assist and interact with humans in various settings."
            icon={<Bot className="h-6 w-6" />}
            href="/topics/robot-types/service"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Medical Robots"
            description="Precision machines revolutionizing healthcare and surgical procedures."
            icon={<Bot className="h-6 w-6" />}
            href="/topics/robot-types/medical"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Educational Robots"
            description="Platforms designed for teaching robotics and programming concepts."
            icon={<Cpu className="h-6 w-6" />}
            href="/topics/robot-types/educational"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Research Robots"
            description="Experimental platforms pushing the boundaries of robotics technology."
            icon={<Cog className="h-6 w-6" />}
            href="/topics/robot-types/research"
          />
        </motion.div>
      </motion.div>
      
      <InfoSection
        title="Emerging Robot Categories"
        description="As technology advances, new categories of robots are emerging with capabilities that blur traditional boundaries and open new application domains."
        infoPoints={[
          "Cobots (collaborative robots) work alongside humans, combining human flexibility with robotic precision.",
          "Soft robots use compliant materials to safely interact with delicate objects and environments.",
          "Swarm robots operate as coordinated groups, achieving objectives through distributed intelligence.",
          "Autonomous field robots operate in agriculture, mining, and environmental monitoring with minimal human intervention."
        ]}
        applications={[
          {
            title: "Disaster Response",
            description: "Specialized robots enter hazardous environments to assess damage and assist in rescue operations."
          },
          {
            title: "Deep Sea Exploration",
            description: "Underwater robots explore ocean depths beyond human reach, collecting scientific data and samples."
          },
          {
            title: "Space Exploration",
            description: "Extraplanetary rovers and probes conduct research and gather data from other celestial bodies."
          },
          {
            title: "Military Operations",
            description: "Reconnaissance and EOD (explosive ordnance disposal) robots reduce risk to human personnel in conflict zones."
          }
        ]}
        resources={[
          { title: "IEEE Robotics and Automation Society", url: "https://www.ieee-ras.org/" },
          { title: "Science Robotics Journal", url: "https://www.science.org/journal/scirobotics" }
        ]}
        relatedTopics={[
          { title: "Future Technologies", href: "/topics/future-tech" },
          { title: "AI in Robotics", href: "/topics/ai-robotics" }
        ]}
      >
        <RobotAnimation type="research" size={150} />
      </InfoSection>
    </TopicPageLayout>
  );
};

export default RobotTypesPage;
