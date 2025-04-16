
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Sliders, BarChart, GitMerge, Share, Compass, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import ControlSystemAnimation from "@/components/animations/ControlSystemAnimation";
import InfoSection from "@/components/topics/InfoSection";

const ControlSystemsPage = () => {
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
      title="Control Systems"
      description="Discover the principles and technologies that govern robot movement, stability, and precision. From basic control loops to advanced algorithms."
      gradientColors="from-robotics-darkPurple/10 via-robotics-teal/5 to-robotics-blue/10"
    >
      <motion.div 
        className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-muted/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <ControlSystemAnimation type="pid" size={180} />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-display font-bold mb-3">The Science of Robot Control</h2>
          <p className="text-muted-foreground mb-4">
            Control systems are the algorithms and methods that enable robots to achieve desired behaviors with precision, 
            stability, and reliability. From simple PID controllers to advanced adaptive and learning-based approaches, 
            control theory provides the mathematical foundation for how robots move and interact.
          </p>
          <p className="text-muted-foreground">
            This overview explores the fundamental principles of robotic control, examines different control architectures, 
            and highlights emerging methods that are pushing the boundaries of what robots can achieve. Understanding control 
            systems is essential for developing robots that can operate effectively in complex, unpredictable environments.
          </p>
        </div>
      </motion.div>

      <InfoSection
        title="PID Controllers"
        description="Proportional-Integral-Derivative (PID) controllers are the workhorses of industrial robotics, providing simple yet effective control for a wide range of applications."
        infoPoints={[
          "PID controllers remain the most widely used control algorithm in robotics and industrial automation.",
          "Tuning PID parameters (Kp, Ki, Kd) balances response speed, stability, and steady-state error.",
          "Auto-tuning algorithms can optimize PID parameters for specific systems and applications.",
          "Cascaded PID loops handle complex systems by creating hierarchical control structures."
        ]}
        applications={[
          {
            title: "Joint Position Control",
            description: "Precise control of robot arm joints for manufacturing and assembly operations."
          },
          {
            title: "Motor Speed Control",
            description: "Maintaining constant speed under varying loads in mobile robots and conveyors."
          },
          {
            title: "Temperature Regulation",
            description: "Thermal management of sensitive electronics and processes in industrial robots."
          },
          {
            title: "Flight Stability",
            description: "Attitude and altitude control for drones and aerial robotics platforms."
          }
        ]}
        resources={[
          { title: "PID Control Theory", url: "https://www.ni.com/en/shop/data-acquisition/what-is-pid-control.html" },
          { title: "Advanced PID Control", url: "https://www.isa.org/products/advanced-pid-control" },
          { title: "IEEE Control Systems Society", url: "https://ieeecss.org/" }
        ]}
        relatedTopics={[
          { title: "Feedback Systems", href: "/topics/control-systems/feedback" },
          { title: "State Estimation", href: "/topics/control-systems/state-estimation" }
        ]}
      >
        <ControlSystemAnimation type="pid" size={150} />
      </InfoSection>

      <InfoSection
        title="State Estimation"
        description="State estimation techniques enable robots to determine their position, orientation, and internal conditions from noisy and incomplete sensor data."
        infoPoints={[
          "Kalman filters optimally combine prediction models with sensor measurements to estimate system states.",
          "SLAM (Simultaneous Localization and Mapping) algorithms allow robots to build maps while navigating unknown environments.",
          "Particle filters handle non-Gaussian noise and non-linear systems through sampling-based estimation.",
          "Multi-sensor fusion combines data from complementary sensors to improve estimation accuracy and robustness."
        ]}
        applications={[
          {
            title: "Robot Localization",
            description: "Determining a robot's position and orientation in its environment using sensor data and maps."
          },
          {
            title: "Object Tracking",
            description: "Following moving objects or people for surveillance, interaction, or manipulation tasks."
          },
          {
            title: "System Identification",
            description: "Learning dynamic models of robots or environments to improve control performance."
          },
          {
            title: "Fault Detection",
            description: "Identifying system failures or performance degradation through state monitoring and prediction."
          }
        ]}
        resources={[
          { title: "Probabilistic Robotics", url: "http://www.probabilistic-robotics.org/" },
          { title: "Kalman and Bayesian Filters in Python", url: "https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python" }
        ]}
        relatedTopics={[
          { title: "Navigation Systems", href: "/topics/control-systems/navigation" },
          { title: "Sensors", href: "/topics/components/sensors" }
        ]}
      >
        <ControlSystemAnimation type="state" size={150} />
      </InfoSection>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <TopicCard
            title="PID Controllers"
            description="The fundamental control algorithm used in most robotic systems."
            icon={<Sliders className="h-6 w-6" />}
            href="/topics/control-systems/pid"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="State Estimation"
            description="Methods for determining a robot's position and orientation in space."
            icon={<BarChart className="h-6 w-6" />}
            href="/topics/control-systems/state-estimation"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Motion Planning"
            description="Algorithms for generating optimal trajectories and paths."
            icon={<GitMerge className="h-6 w-6" />}
            href="/topics/control-systems/motion-planning"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Distributed Control"
            description="Coordinating multiple actuators and systems across a robotic platform."
            icon={<Share className="h-6 w-6" />}
            href="/topics/control-systems/distributed"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Navigation Systems"
            description="Guiding robots through environments and avoiding obstacles."
            icon={<Compass className="h-6 w-6" />}
            href="/topics/control-systems/navigation"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Feedback Systems"
            description="How robots measure and respond to their actions in real-time."
            icon={<Gauge className="h-6 w-6" />}
            href="/topics/control-systems/feedback"
          />
        </motion.div>
      </motion.div>

      <InfoSection
        title="Motion Planning"
        description="Motion planning algorithms generate efficient, collision-free paths for robots to navigate complex environments and perform manipulation tasks."
        infoPoints={[
          "Sampling-based algorithms like RRT and PRM efficiently explore high-dimensional configuration spaces.",
          "Optimization-based planning balances multiple objectives like path length, energy efficiency, and safety.",
          "Real-time replanning enables robots to adapt to dynamic environments and unforeseen obstacles.",
          "Task and motion planning (TAMP) integrates high-level task goals with low-level motion constraints."
        ]}
        applications={[
          {
            title: "Autonomous Navigation",
            description: "Planning safe and efficient routes for mobile robots in warehouses, hospitals, and public spaces."
          },
          {
            title: "Robotic Manipulation",
            description: "Generating collision-free paths for robot arms to grasp objects in cluttered environments."
          },
          {
            title: "Multi-Robot Coordination",
            description: "Coordinating movements of multiple robots without collisions or deadlocks."
          },
          {
            title: "Human-Robot Collaboration",
            description: "Planning safe movements that account for human presence and behavior in shared workspaces."
          }
        ]}
        resources={[
          { title: "Motion Planning Algorithms", url: "http://planning.cs.uiuc.edu/" },
          { title: "MoveIt Motion Planning Framework", url: "https://moveit.ros.org/" },
          { title: "OMPL (Open Motion Planning Library)", url: "https://ompl.kavrakilab.org/" }
        ]}
        relatedTopics={[
          { title: "State Estimation", href: "/topics/control-systems/state-estimation" },
          { title: "Navigation Systems", href: "/topics/control-systems/navigation" }
        ]}
      >
        <ControlSystemAnimation type="motion" size={150} />
      </InfoSection>
    </TopicPageLayout>
  );
};

export default ControlSystemsPage;
