
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Zap, Microscope, Cloud, Wifi, Dna, Atom } from "lucide-react";
import { motion } from "framer-motion";
import FutureTechAnimation from "@/components/animations/FutureTechAnimation";
import InfoSection from "@/components/topics/InfoSection";

const FutureTechPage = () => {
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
      title="Future Technologies"
      description="Explore cutting-edge advances and upcoming technologies that will shape the next generation of robotics innovation."
      gradientColors="from-robotics-blue/10 via-robotics-darkPurple/5 to-robotics-teal/10"
    >
      <motion.div 
        className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-muted/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <FutureTechAnimation type="quantum-robotics" size={180} />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-display font-bold mb-3">The Frontier of Robotics Innovation</h2>
          <p className="text-muted-foreground mb-4">
            The field of robotics is evolving rapidly, driven by advances in materials science, 
            computing, artificial intelligence, and bioengineering. Emerging technologies are expanding the 
            capabilities of robots beyond traditional rigid mechanisms and deterministic programming, 
            toward systems that are adaptable, collaborative, and capable of operating at scales 
            from nanometers to kilometers.
          </p>
          <p className="text-muted-foreground">
            This overview explores the cutting-edge technologies that are redefining what robots can do 
            and where they can operate. From microscopic machines that could revolutionize medicine to 
            collective robotic systems that coordinate like natural organisms, these innovations promise 
            to expand the impact of robotics across industries and society.
          </p>
        </div>
      </motion.div>

      <InfoSection
        title="Soft Robotics"
        description="Soft robotics uses compliant, flexible materials to create machines that can safely interact with humans and delicate environments."
        infoPoints={[
          "Biomimetic designs inspired by octopus tentacles, elephant trunks, and plant movements enable new forms of locomotion and manipulation.",
          "Pneumatic artificial muscles and fluidic actuators create movement without rigid components or traditional motors.",
          "Programmable materials change stiffness on demand, allowing robots to alternate between soft and rigid states.",
          "Self-healing polymers enable robots to recover from punctures and tears without human intervention."
        ]}
        applications={[
          {
            title: "Medical Devices",
            description: "Minimally invasive surgical tools that navigate through the body without damaging tissues."
          },
          {
            title: "Agricultural Automation",
            description: "Gentle harvesting robots that can handle delicate fruits and vegetables without bruising."
          },
          {
            title: "Search and Rescue",
            description: "Robots that can compress and navigate through tight spaces in disaster scenarios."
          },
          {
            title: "Human Augmentation",
            description: "Soft exoskeletons and wearable robots that provide support and assistance without restricting movement."
          }
        ]}
        resources={[
          { title: "Soft Robotics Journal", url: "https://www.liebertpub.com/loi/soro" },
          { title: "Harvard Biodesign Lab", url: "https://biodesign.seas.harvard.edu/" },
          { title: "Soft Robotics Toolkit", url: "https://softroboticstoolkit.com/" }
        ]}
        relatedTopics={[
          { title: "Bio-inspired Robotics", href: "/topics/future-tech/bio-inspired" },
          { title: "Medical Robots", href: "/topics/robot-types/medical" }
        ]}
      >
        <FutureTechAnimation type="soft-robotics" size={150} />
      </InfoSection>

      <InfoSection
        title="Nano Robotics"
        description="Nanoscale robots operate at the molecular level, promising revolutionary applications in medicine, manufacturing, and environmental remediation."
        infoPoints={[
          "Medical nanorobots could deliver drugs to specific cells, perform surgery at cellular scales, and monitor health from within the body.",
          "Self-assembly techniques enable the construction of complex nanostructures from simple molecular components.",
          "Biological-synthetic hybrids combine engineered cellular components with artificial materials for unique capabilities.",
          "Quantum effects become significant at nanoscales, requiring new approaches to sensing, actuation, and control."
        ]}
        applications={[
          {
            title: "Targeted Drug Delivery",
            description: "Nanorobots that transport medicine directly to disease sites, minimizing side effects elsewhere in the body."
          },
          {
            title: "Environmental Monitoring",
            description: "Distributed nanosensors that detect pollutants, pathogens, or specific chemicals at molecular concentrations."
          },
          {
            title: "Molecular Manufacturing",
            description: "Assembly of products atom-by-atom for unprecedented precision and material efficiency."
          },
          {
            title: "Cell Repair",
            description: "Medical nanorobots that identify and repair damaged cells or disable pathological processes."
          }
        ]}
        resources={[
          { title: "IEEE Transactions on NanoBioscience", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7728" },
          { title: "Nature Nanotechnology", url: "https://www.nature.com/nnano/" },
          { title: "International Journal of Nanomedicine", url: "https://www.dovepress.com/international-journal-of-nanomedicine-journal" }
        ]}
        relatedTopics={[
          { title: "Medical Robots", href: "/topics/robot-types/medical" },
          { title: "Bio-inspired Robotics", href: "/topics/future-tech/bio-inspired" }
        ]}
      >
        <FutureTechAnimation type="nano-robotics" size={150} />
      </InfoSection>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <TopicCard
            title="Soft Robotics"
            description="Flexible, adaptable robots inspired by biological organisms."
            icon={<Zap className="h-6 w-6" />}
            href="/topics/future-tech/soft-robotics"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Nano Robotics"
            description="Microscopic machines for medical and industrial applications."
            icon={<Microscope className="h-6 w-6" />}
            href="/topics/future-tech/nano-robotics"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Cloud Robotics"
            description="Leveraging cloud computing for enhanced robotic capabilities."
            icon={<Cloud className="h-6 w-6" />}
            href="/topics/future-tech/cloud-robotics"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Swarm Intelligence"
            description="Coordinated behavior and distributed problem-solving among robot groups."
            icon={<Wifi className="h-6 w-6" />}
            href="/topics/future-tech/swarm-intelligence"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Bio-inspired Robotics"
            description="Systems and mechanisms based on biological designs from nature."
            icon={<Dna className="h-6 w-6" />}
            href="/topics/future-tech/bio-inspired"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Quantum Robotics"
            description="Applications of quantum computing principles to robotic systems."
            icon={<Atom className="h-6 w-6" />}
            href="/topics/future-tech/quantum-robotics"
          />
        </motion.div>
      </motion.div>

      <InfoSection
        title="Swarm Intelligence"
        description="Swarm robotics applies principles of collective behavior to coordinate large groups of simple robots for complex tasks."
        infoPoints={[
          "Distributed control algorithms enable coherent group behavior without central coordination.",
          "Simple local interactions between robots produce emergent global behaviors like flocking, foraging, and construction.",
          "Bio-inspired strategies from ants, bees, and termites provide models for collective decision-making and task allocation.",
          "Robustness through redundancy makes swarm systems resilient to the failure of individual units."
        ]}
        applications={[
          {
            title: "Environmental Monitoring",
            description: "Distributed sensor networks that adapt coverage based on detected phenomena or environmental changes."
          },
          {
            title: "Search and Exploration",
            description: "Coordinated search of large areas by robot teams that maximize efficiency through collaboration."
          },
          {
            title: "Collective Construction",
            description: "Robotic swarms that assemble structures or infrastructure without centralized planning."
          },
          {
            title: "Agricultural Management",
            description: "Teams of robots that monitor crops, control pests, or perform targeted interventions across large fields."
          }
        ]}
        resources={[
          { title: "Swarm Intelligence Journal", url: "https://www.springer.com/journal/11721" },
          { title: "IEEE Swarm Intelligence Symposium", url: "https://ieeexplore.ieee.org/xpl/conhome/8561298/proceeding" },
          { title: "Harvard Wyss Institute Robotics", url: "https://wyss.harvard.edu/technology/programmable-robot-swarms/" }
        ]}
        relatedTopics={[
          { title: "Distributed Control", href: "/topics/control-systems/distributed" },
          { title: "Bio-inspired Robotics", href: "/topics/future-tech/bio-inspired" }
        ]}
      >
        <FutureTechAnimation type="swarm-intelligence" size={150} />
      </InfoSection>
    </TopicPageLayout>
  );
};

export default FutureTechPage;
