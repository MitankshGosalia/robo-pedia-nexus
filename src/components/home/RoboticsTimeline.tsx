
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const RoboticsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const timelineEvents = [
    {
      year: "1921",
      title: "Birth of 'Robot'",
      description: "The term 'robot' was coined by Czech writer Karel Čapek in his play R.U.R. (Rossum's Universal Robots).",
      color: "border-primary"
    },
    {
      year: "1954",
      title: "First Industrial Robot",
      description: "George Devol designed the Unimate, the first digitally operated and programmable robot.",
      color: "border-accent"
    },
    {
      year: "1969",
      title: "Stanford Arm",
      description: "Victor Scheinman developed the Stanford Arm, the first electrically powered computer-controlled robot arm.",
      color: "border-secondary"
    },
    {
      year: "1997",
      title: "Mars Pathfinder",
      description: "NASA's Sojourner rover became the first robot to explore the surface of Mars.",
      color: "border-primary"
    },
    {
      year: "2000",
      title: "ASIMO",
      description: "Honda introduced ASIMO, an advanced humanoid robot capable of walking, running, and interacting.",
      color: "border-accent"
    },
    {
      year: "2011",
      title: "Watson Wins Jeopardy",
      description: "IBM's Watson AI system defeated human champions in Jeopardy, showcasing advanced language processing.",
      color: "border-secondary"
    },
    {
      year: "2020",
      title: "GPT-3 & Robot Learning",
      description: "Large language models revolutionize robot programming through natural language instructions.",
      color: "border-primary"
    },
    {
      year: "2025",
      title: "Future Frontiers",
      description: "Quantum robotics, neuromorphic computing, and self-evolving algorithms opening new possibilities.",
      color: "border-accent"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4"
          >
            Evolution of Robotics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-3xl mx-auto"
          >
            Tracing the key moments that shaped modern robotics and artificial intelligence.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-accent/30 to-secondary/30 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-16 relative flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 bg-background ${event.color} z-10`}></div>
              
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                <span className="inline-block px-3 py-1 mb-2 bg-muted rounded-full text-xs font-medium">
                  {event.year}
                </span>
                <h3 className="font-display text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl animate-pulse-gentle"></div>
    </section>
  );
};

export default RoboticsTimeline;
