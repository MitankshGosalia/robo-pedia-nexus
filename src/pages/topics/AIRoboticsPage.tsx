
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Brain, Cpu, Network, Code, Database, Share2 } from "lucide-react";

const AIRoboticsPage = () => {
  return (
    <TopicPageLayout
      title="AI in Robotics"
      description="Explore how artificial intelligence is revolutionizing robotics, from machine learning and computer vision to natural language processing and autonomous decision-making."
      gradientColors="from-robotics-teal/10 via-robotics-blue/5 to-robotics-purple/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopicCard
          title="Machine Learning"
          description="How robots learn from data and improve their performance over time."
          icon={<Brain className="h-6 w-6" />}
          href="/topics/ai-robotics/machine-learning"
        />
        <TopicCard
          title="Computer Vision"
          description="Enabling robots to interpret and understand visual information from the world."
          icon={<Cpu className="h-6 w-6" />}
          href="/topics/ai-robotics/computer-vision"
        />
        <TopicCard
          title="Neural Networks"
          description="Deep learning architectures that power modern robotic intelligence."
          icon={<Network className="h-6 w-6" />}
          href="/topics/ai-robotics/neural-networks"
        />
        <TopicCard
          title="Natural Language Processing"
          description="Allowing robots to understand and respond to human speech and text."
          icon={<Code className="h-6 w-6" />}
          href="/topics/ai-robotics/nlp"
        />
        <TopicCard
          title="Autonomous Decision Making"
          description="How robots make decisions in complex and uncertain environments."
          icon={<Database className="h-6 w-6" />}
          href="/topics/ai-robotics/decision-making"
        />
        <TopicCard
          title="Human-Robot Interaction"
          description="Creating seamless and intuitive interfaces between humans and robots."
          icon={<Share2 className="h-6 w-6" />}
          href="/topics/ai-robotics/human-robot-interaction"
        />
      </div>
    </TopicPageLayout>
  );
};

export default AIRoboticsPage;
