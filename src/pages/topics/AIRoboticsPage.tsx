
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Brain, Bot, Cpu, Network, Code, Database, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import AIRoboticsAnimation from "@/components/animations/AIRoboticsAnimation";
import InfoSection from "@/components/topics/InfoSection";

const AIRoboticsPage = () => {
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
      title="AI in Robotics"
      description="Explore how artificial intelligence is revolutionizing robotics, from machine learning and computer vision to natural language processing and autonomous decision-making."
      gradientColors="from-robotics-teal/10 via-robotics-blue/5 to-robotics-purple/10"
    >
      <motion.div 
        className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-muted/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <AIRoboticsAnimation type="neural-networks" size={180} />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-display font-bold mb-3">The Convergence of AI and Robotics</h2>
          <p className="text-muted-foreground mb-4">
            The integration of artificial intelligence with robotics is transforming robots from programmed 
            machines into adaptive, learning systems capable of perception, reasoning, and autonomous decision-making. 
            This convergence enables robots to handle uncertainty, learn from experience, and operate in 
            unstructured environments previously considered too complex for automation.
          </p>
          <p className="text-muted-foreground">
            This overview explores how various AI technologies enhance robotic capabilities, 
            from enabling robots to see and understand their environments through computer vision 
            to making complex decisions using neural networks and reinforcement learning. As these 
            technologies mature, they are creating new possibilities in automation, human-robot 
            collaboration, and autonomous systems.
          </p>
        </div>
      </motion.div>

      <InfoSection
        title="Machine Learning"
        description="Machine learning algorithms enable robots to improve their performance over time through data and experience rather than explicit programming."
        infoPoints={[
          "Supervised learning models trained on labeled datasets power object recognition and classification for robotic perception.",
          "Reinforcement learning enables robots to learn optimal policies for control tasks through trial and error interactions.",
          "Transfer learning allows knowledge gained in one task to be applied to related tasks, accelerating robot skill acquisition.",
          "End-to-end learning approaches map directly from raw sensor inputs to control outputs, reducing the need for hand-engineered features."
        ]}
        applications={[
          {
            title: "Adaptive Control",
            description: "Learning-based controllers that adapt to changing conditions and compensate for wear or damage."
          },
          {
            title: "Skill Acquisition",
            description: "Learning complex manipulation skills like grasping irregular objects or assembly operations."
          },
          {
            title: "Anomaly Detection",
            description: "Identifying unusual patterns in sensor data to detect malfunctions or security threats."
          },
          {
            title: "Predictive Maintenance",
            description: "Forecasting component failures before they occur by learning patterns in sensor data."
          }
        ]}
        resources={[
          { title: "Google AI Robotics Research", url: "https://ai.google/research/teams/brain/robotics/" },
          { title: "Berkeley Artificial Intelligence Research (BAIR) Lab", url: "https://bair.berkeley.edu/blog/" },
          { title: "Journal of Machine Learning Research", url: "https://jmlr.org/" }
        ]}
        relatedTopics={[
          { title: "Neural Networks", href: "/topics/ai-robotics/neural-networks" },
          { title: "Computer Vision", href: "/topics/ai-robotics/computer-vision" }
        ]}
      >
        <AIRoboticsAnimation type="machine-learning" size={150} />
      </InfoSection>

      <InfoSection
        title="Computer Vision"
        description="Computer vision systems enable robots to interpret and understand visual information from the world, providing critical environmental awareness."
        infoPoints={[
          "Deep convolutional neural networks have dramatically improved object detection and recognition capabilities for robots.",
          "Depth perception using stereo cameras, structured light, or time-of-flight sensors enables 3D environmental understanding.",
          "Visual SLAM (Simultaneous Localization and Mapping) combines visual data with motion to build environment maps.",
          "Instance segmentation separates individual objects from backgrounds and each other for precise manipulation."
        ]}
        applications={[
          {
            title: "Bin Picking",
            description: "Identifying and grasping specific parts from unsorted containers in manufacturing environments."
          },
          {
            title: "Autonomous Navigation",
            description: "Visual navigation in GPS-denied environments using landmarks and feature recognition."
          },
          {
            title: "Quality Inspection",
            description: "Automated visual inspection that detects defects and quality issues in manufacturing."
          },
          {
            title: "Augmented Reality Interfaces",
            description: "Overlaying digital information on camera feeds to assist operation and maintenance tasks."
          }
        ]}
        resources={[
          { title: "OpenCV Computer Vision Library", url: "https://opencv.org/" },
          { title: "IEEE Transactions on Pattern Analysis and Machine Intelligence", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34" },
          { title: "Computer Vision Foundation", url: "https://www.thecvf.com/" }
        ]}
        relatedTopics={[
          { title: "Sensors", href: "/topics/components/sensors" },
          { title: "Navigation Systems", href: "/topics/control-systems/navigation" }
        ]}
      >
        <AIRoboticsAnimation type="computer-vision" size={150} />
      </InfoSection>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <TopicCard
            title="Machine Learning"
            description="How robots learn from data and improve their performance over time."
            icon={<Brain className="h-6 w-6" />}
            href="/topics/ai-robotics/machine-learning"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Computer Vision"
            description="Enabling robots to interpret and understand visual information from the world."
            icon={<Cpu className="h-6 w-6" />}
            href="/topics/ai-robotics/computer-vision"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Neural Networks"
            description="Deep learning architectures that power modern robotic intelligence."
            icon={<Network className="h-6 w-6" />}
            href="/topics/ai-robotics/neural-networks"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Natural Language Processing"
            description="Allowing robots to understand and respond to human speech and text."
            icon={<Code className="h-6 w-6" />}
            href="/topics/ai-robotics/nlp"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Autonomous Decision Making"
            description="How robots make decisions in complex and uncertain environments."
            icon={<Database className="h-6 w-6" />}
            href="/topics/ai-robotics/decision-making"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Human-Robot Interaction"
            description="Creating seamless and intuitive interfaces between humans and robots."
            icon={<Share2 className="h-6 w-6" />}
            href="/topics/ai-robotics/human-robot-interaction"
          />
        </motion.div>
      </motion.div>

      <InfoSection
        title="Neural Networks"
        description="Deep neural networks form the foundation of many AI capabilities in modern robotics, enabling advanced perception, reasoning, and decision-making."
        infoPoints={[
          "Recurrent Neural Networks (RNNs) and LSTMs process sequential data for time-series prediction and temporal reasoning.",
          "Generative models like GANs and VAEs enable robots to simulate outcomes and generate novel solutions.",
          "Self-supervised learning reduces the need for expensive labeled data by leveraging structure in unlabeled data.",
          "GPU and specialized hardware accelerators are crucial for deploying deep neural networks on resource-constrained robotic platforms."
        ]}
        applications={[
          {
            title: "Visual Perception",
            description: "CNNs process camera data to recognize objects, people, and environments with human-level accuracy."
          },
          {
            title: "Motion Control",
            description: "End-to-end neural networks translating sensor data directly into joint commands for smooth motion."
          },
          {
            title: "Speech Recognition",
            description: "Natural language interfaces allowing verbal commands and queries to robot systems."
          },
          {
            title: "Imitation Learning",
            description: "Learning by demonstration where robots acquire skills by observing human performances."
          }
        ]}
        resources={[
          { title: "TensorFlow Robotics", url: "https://www.tensorflow.org/robotics" },
          { title: "PyTorch for Robotics", url: "https://pytorch.org/" },
          { title: "NeurIPS Conference", url: "https://neurips.cc/" }
        ]}
        relatedTopics={[
          { title: "Machine Learning", href: "/topics/ai-robotics/machine-learning" },
          { title: "Autonomous Decision Making", href: "/topics/ai-robotics/decision-making" }
        ]}
      >
        <AIRoboticsAnimation type="neural-networks" size={150} />
      </InfoSection>
    </TopicPageLayout>
  );
};

export default AIRoboticsPage;
