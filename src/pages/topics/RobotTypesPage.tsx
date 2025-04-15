
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Robot, Factory, Cpu, Bot, Cog, Navigation } from "lucide-react";

const RobotTypesPage = () => {
  return (
    <TopicPageLayout
      title="Robot Types"
      description="Explore the diverse world of robotics, from industrial automation to humanoid companions. Learn about different robot categories, their applications, and unique characteristics."
      gradientColors="from-robotics-purple/10 via-robotics-blue/5 to-robotics-darkPurple/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopicCard
          title="Industrial Robots"
          description="Manufacturing, assembly, and automation workhorses that power modern factories."
          icon={<Factory className="h-6 w-6" />}
          href="/topics/robot-types/industrial"
        />
        <TopicCard
          title="Mobile Robots"
          description="Autonomous vehicles and platforms designed for navigation and transportation."
          icon={<Navigation className="h-6 w-6" />}
          href="/topics/robot-types/mobile"
        />
        <TopicCard
          title="Service Robots"
          description="Robots designed to assist and interact with humans in various settings."
          icon={<Bot className="h-6 w-6" />}
          href="/topics/robot-types/service"
        />
        <TopicCard
          title="Medical Robots"
          description="Precision machines revolutionizing healthcare and surgical procedures."
          icon={<Robot className="h-6 w-6" />}
          href="/topics/robot-types/medical"
        />
        <TopicCard
          title="Educational Robots"
          description="Platforms designed for teaching robotics and programming concepts."
          icon={<Cpu className="h-6 w-6" />}
          href="/topics/robot-types/educational"
        />
        <TopicCard
          title="Research Robots"
          description="Experimental platforms pushing the boundaries of robotics technology."
          icon={<Cog className="h-6 w-6" />}
          href="/topics/robot-types/research"
        />
      </div>
    </TopicPageLayout>
  );
};

export default RobotTypesPage;
