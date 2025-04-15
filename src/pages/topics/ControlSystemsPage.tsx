
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Sliders, BarChart, GitMerge, Share, Compass, Gauge } from "lucide-react";

const ControlSystemsPage = () => {
  return (
    <TopicPageLayout
      title="Control Systems"
      description="Discover the principles and technologies that govern robot movement, stability, and precision. From basic control loops to advanced algorithms."
      gradientColors="from-robotics-darkPurple/10 via-robotics-teal/5 to-robotics-blue/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopicCard
          title="PID Controllers"
          description="The fundamental control algorithm used in most robotic systems."
          icon={<Sliders className="h-6 w-6" />}
          href="/topics/control-systems/pid"
        />
        <TopicCard
          title="State Estimation"
          description="Methods for determining a robot's position and orientation in space."
          icon={<BarChart className="h-6 w-6" />}
          href="/topics/control-systems/state-estimation"
        />
        <TopicCard
          title="Motion Planning"
          description="Algorithms for generating optimal trajectories and paths."
          icon={<GitMerge className="h-6 w-6" />}
          href="/topics/control-systems/motion-planning"
        />
        <TopicCard
          title="Distributed Control"
          description="Coordinating multiple actuators and systems across a robotic platform."
          icon={<Share className="h-6 w-6" />}
          href="/topics/control-systems/distributed"
        />
        <TopicCard
          title="Navigation Systems"
          description="Guiding robots through environments and avoiding obstacles."
          icon={<Compass className="h-6 w-6" />}
          href="/topics/control-systems/navigation"
        />
        <TopicCard
          title="Feedback Systems"
          description="How robots measure and respond to their actions in real-time."
          icon={<Gauge className="h-6 w-6" />}
          href="/topics/control-systems/feedback"
        />
      </div>
    </TopicPageLayout>
  );
};

export default ControlSystemsPage;
