
import TopicPageLayout from "@/components/topics/TopicPageLayout";
import TopicCard from "@/components/shared/TopicCard";
import { Cpu, Battery, Eye, Cog, CircuitBoard, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import ComponentAnimation from "@/components/animations/ComponentAnimation";
import InfoSection from "@/components/topics/InfoSection";

const ComponentsPage = () => {
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
      title="Robot Components"
      description="Understand the building blocks of robotics systems. From sensors and actuators to control units and power systems."
      gradientColors="from-robotics-blue/10 via-accent/5 to-robotics-purple/10"
    >
      <motion.div 
        className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-muted/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <ComponentAnimation type="processors" size={180} />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-display font-bold mb-3">The Anatomy of Modern Robots</h2>
          <p className="text-muted-foreground mb-4">
            Modern robots are complex integrated systems combining mechanical, electronic, and computational 
            components that work together to sense, decide, and act. The selection and integration of these 
            components determine a robot's capabilities, limitations, and appropriate applications.
          </p>
          <p className="text-muted-foreground">
            This overview explores the fundamental components of robotic systems, from the mechanical 
            elements that enable physical movement to the sophisticated electronics and software that 
            provide intelligence and adaptability. Understanding these building blocks is essential for 
            designing, building, and maintaining effective robotic systems.
          </p>
        </div>
      </motion.div>

      <InfoSection
        title="Processors & Controllers"
        description="The computational brain of any robotic system, processors and controllers execute algorithms, process sensor data, and coordinate actions."
        infoPoints={[
          "Robot control architectures range from centralized systems with a single processor to distributed networks of specialized controllers.",
          "Real-time operating systems (RTOS) are essential for applications requiring deterministic timing and response.",
          "Modern robotics processors balance computational power with energy efficiency and size constraints.",
          "FPGA and ASIC implementations offer hardware acceleration for specific robotics algorithms such as vision processing."
        ]}
        applications={[
          {
            title: "Industrial Robot Controllers",
            description: "High-reliability industrial controllers with deterministic execution for manufacturing automation."
          },
          {
            title: "Embedded Systems",
            description: "Low-power microcontrollers for small robots and subsystem control with strict size and energy constraints."
          },
          {
            title: "High-Performance Computing",
            description: "GPU-accelerated computing for AI and machine vision applications in autonomous robots."
          },
          {
            title: "Distributed Control Networks",
            description: "CAN bus and EtherCAT networks connecting multiple controllers in complex robotic systems."
          }
        ]}
        resources={[
          { title: "ROS (Robot Operating System)", url: "https://www.ros.org/" },
          { title: "IEEE Technical Committee on Robot Control", url: "https://www.ieee-ras.org/robot-control" },
          { title: "Embedded Systems Design for Robotics", url: "https://design.ros2.org/" }
        ]}
        relatedTopics={[
          { title: "Control Systems", href: "/topics/control-systems" },
          { title: "Electronics", href: "/topics/components/electronics" }
        ]}
      >
        <ComponentAnimation type="processors" size={150} />
      </InfoSection>

      <InfoSection
        title="Sensors"
        description="Sensors are the perceptual system of robots, providing critical data about the internal state and external environment."
        infoPoints={[
          "Modern robots combine multiple sensor types to overcome limitations of individual sensors (sensor fusion).",
          "MEMS technology has dramatically reduced the size, cost, and power requirements of inertial sensors.",
          "Depth sensors like LiDAR and structured light cameras enable 3D perception for navigation and manipulation.",
          "Advanced sensor processing algorithms filter noise and extract meaningful information from raw sensor data."
        ]}
        applications={[
          {
            title: "Computer Vision",
            description: "Camera sensors with image processing for object recognition, tracking, and environmental mapping."
          },
          {
            title: "Proprioception",
            description: "Joint encoders, IMUs, and force/torque sensors for internal state awareness and control."
          },
          {
            title: "Environmental Sensing",
            description: "LiDAR, ultrasonic, and infrared sensors for obstacle detection and environment mapping."
          },
          {
            title: "Tactile Sensing",
            description: "Pressure, temperature, and texture sensors for delicate manipulation and surface characterization."
          }
        ]}
        resources={[
          { title: "IEEE Sensors Journal", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7361" },
          { title: "Robotics and Autonomous Systems Journal", url: "https://www.journals.elsevier.com/robotics-and-autonomous-systems" }
        ]}
        relatedTopics={[
          { title: "Computer Vision", href: "/topics/ai-robotics/computer-vision" },
          { title: "Navigation Systems", href: "/topics/control-systems/navigation" }
        ]}
      >
        <ComponentAnimation type="sensors" size={150} />
      </InfoSection>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <TopicCard
            title="Processors & Controllers"
            description="The brains of robotic systems - CPUs, microcontrollers, and control units."
            icon={<Cpu className="h-6 w-6" />}
            href="/topics/components/processors"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Power Systems"
            description="Batteries, power management, and energy distribution systems."
            icon={<Battery className="h-6 w-6" />}
            href="/topics/components/power"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Sensors"
            description="Environmental perception through various types of sensors."
            icon={<Eye className="h-6 w-6" />}
            href="/topics/components/sensors"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Actuators"
            description="Motors, servos, and mechanisms that create physical movement."
            icon={<Cog className="h-6 w-6" />}
            href="/topics/components/actuators"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Electronics"
            description="Circuit boards, wiring, and electronic components."
            icon={<CircuitBoard className="h-6 w-6" />}
            href="/topics/components/electronics"
          />
        </motion.div>
        <motion.div variants={item}>
          <TopicCard
            title="Communication"
            description="Networking and communication systems for robot control."
            icon={<Wifi className="h-6 w-6" />}
            href="/topics/components/communication"
          />
        </motion.div>
      </motion.div>

      <InfoSection
        title="Actuators"
        description="Actuators convert energy into physical motion, enabling robots to interact with their environment."
        infoPoints={[
          "The selection of actuators determines a robot's strength, speed, precision, and efficiency.",
          "Smart actuators integrate controllers, encoders, and communication capability within the actuator package.",
          "Soft actuators using pneumatics or electroactive polymers enable safe human-robot interaction.",
          "Biomimetic actuators inspired by natural muscles offer high power-to-weight ratios and compliance."
        ]}
        applications={[
          {
            title: "Electric Motors",
            description: "DC, BLDC, and stepper motors provide precise control for joints and wheels in most robots."
          },
          {
            title: "Hydraulic Systems",
            description: "High-force actuators for heavy-duty industrial and construction robots requiring significant power."
          },
          {
            title: "Pneumatic Actuators",
            description: "Lightweight, compliant actuation for robots that interact with humans or delicate objects."
          },
          {
            title: "Piezoelectric Actuators",
            description: "Ultra-precise positioning for micro-robots and high-precision applications in nanometer ranges."
          }
        ]}
        resources={[
          { title: "IEEE/ASME Transactions on Mechatronics", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=3516" },
          { title: "Journal of Mechanisms and Robotics", url: "https://asmedigitalcollection.asme.org/mechanismsrobotics" }
        ]}
        relatedTopics={[
          { title: "Power Systems", href: "/topics/components/power" },
          { title: "Control Systems", href: "/topics/control-systems" }
        ]}
      >
        <ComponentAnimation type="actuators" size={150} />
      </InfoSection>
    </TopicPageLayout>
  );
};

export default ComponentsPage;
