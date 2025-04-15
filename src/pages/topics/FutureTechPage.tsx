
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Zap, Microscope, Cloud, Wifi, Dna, Atom } from "lucide-react";

const FutureTechPage = () => {
  return (
    <TopicPageLayout
      title="Future Technologies"
      description="Explore cutting-edge advances and upcoming technologies that will shape the next generation of robotics innovation."
      gradientColors="from-robotics-blue/10 via-robotics-darkPurple/5 to-robotics-teal/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopicCard
          title="Soft Robotics"
          description="Flexible, adaptable robots inspired by biological organisms."
          icon={<Zap className="h-6 w-6" />}
          href="/topics/future-tech/soft-robotics"
        />
        <TopicCard
          title="Nano Robotics"
          description="Microscopic machines for medical and industrial applications."
          icon={<Microscope className="h-6 w-6" />}
          href="/topics/future-tech/nano-robotics"
        />
        <TopicCard
          title="Cloud Robotics"
          description="Leveraging cloud computing for enhanced robotic capabilities."
          icon={<Cloud className="h-6 w-6" />}
          href="/topics/future-tech/cloud-robotics"
        />
        <TopicCard
          title="Swarm Intelligence"
          description="Coordinated behavior and distributed problem-solving among robot groups."
          icon={<Wifi className="h-6 w-6" />}
          href="/topics/future-tech/swarm-intelligence"
        />
        <TopicCard
          title="Bio-inspired Robotics"
          description="Systems and mechanisms based on biological designs from nature."
          icon={<Dna className="h-6 w-6" />}
          href="/topics/future-tech/bio-inspired"
        />
        <TopicCard
          title="Quantum Robotics"
          description="Applications of quantum computing principles to robotic systems."
          icon={<Atom className="h-6 w-6" />}
          href="/topics/future-tech/quantum-robotics"
        />
      </div>
    </TopicPageLayout>
  );
};

export default FutureTechPage;
