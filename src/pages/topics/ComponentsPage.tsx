
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Cpu, Battery, Eye, Cog, CircuitBoard, Wifi } from "lucide-react";

const ComponentsPage = () => {
  return (
    <TopicPageLayout
      title="Robot Components"
      description="Understand the building blocks of robotics systems. From sensors and actuators to control units and power systems."
      gradientColors="from-robotics-blue/10 via-accent/5 to-robotics-purple/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopicCard
          title="Processors & Controllers"
          description="The brains of robotic systems - CPUs, microcontrollers, and control units."
          icon={<Cpu className="h-6 w-6" />}
          href="/topics/components/processors"
        />
        <TopicCard
          title="Power Systems"
          description="Batteries, power management, and energy distribution systems."
          icon={<Battery className="h-6 w-6" />}
          href="/topics/components/power"
        />
        <TopicCard
          title="Sensors"
          description="Environmental perception through various types of sensors."
          icon={<Eye className="h-6 w-6" />}
          href="/topics/components/sensors"
        />
        <TopicCard
          title="Actuators"
          description="Motors, servos, and mechanisms that create physical movement."
          icon={<Cog className="h-6 w-6" />}
          href="/topics/components/actuators"
        />
        <TopicCard
          title="Electronics"
          description="Circuit boards, wiring, and electronic components."
          icon={<CircuitBoard className="h-6 w-6" />}
          href="/topics/components/electronics"
        />
        <TopicCard
          title="Communication"
          description="Networking and communication systems for robot control."
          icon={<Wifi className="h-6 w-6" />}
          href="/topics/components/communication"
        />
      </div>
    </TopicPageLayout>
  );
};

export default ComponentsPage;
