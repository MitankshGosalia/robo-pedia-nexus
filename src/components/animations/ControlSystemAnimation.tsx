
import React from "react";
import { motion } from "framer-motion";
import { Sliders, GitBranch, BarChart, CornerDownRight } from "lucide-react";

interface ControlSystemAnimationProps {
  type?: 'pid' | 'state' | 'motion' | 'distributed' | 'navigation' | 'feedback';
  size?: number;
}

const ControlSystemAnimation = ({ type = 'pid', size = 200 }: ControlSystemAnimationProps) => {
  // Different configurations based on control system type
  const getSystemConfig = () => {
    switch(type) {
      case 'pid':
        return {
          primaryColor: "#1EAEDB",
          secondaryColor: "#f97316",
          icon: <Sliders size={size/5} className="text-primary" />,
          pattern: [
            { x: size * 0.1, y: size * 0.5 },
            { x: size * 0.3, y: size * 0.3 },
            { x: size * 0.7, y: size * 0.7 },
            { x: size * 0.9, y: size * 0.5 },
          ]
        };
      case 'state':
        return {
          primaryColor: "#9b87f5",
          secondaryColor: "#4ade80",
          icon: <BarChart size={size/5} className="text-accent" />,
          pattern: [
            { x: size * 0.1, y: size * 0.7 },
            { x: size * 0.3, y: size * 0.3 },
            { x: size * 0.7, y: size * 0.6 },
            { x: size * 0.9, y: size * 0.4 },
          ]
        };
      case 'motion':
        return {
          primaryColor: "#7E69AB",
          secondaryColor: "#f43f5e",
          icon: <GitBranch size={size/5} className="text-primary" />,
          pattern: [
            { x: size * 0.1, y: size * 0.5 },
            { x: size * 0.4, y: size * 0.2 },
            { x: size * 0.6, y: size * 0.8 },
            { x: size * 0.9, y: size * 0.5 },
          ]
        };
      default:
        return {
          primaryColor: "#1EAEDB",
          secondaryColor: "#f97316",
          icon: <CornerDownRight size={size/5} className="text-primary" />,
          pattern: [
            { x: size * 0.1, y: size * 0.5 },
            { x: size * 0.3, y: size * 0.3 },
            { x: size * 0.7, y: size * 0.7 },
            { x: size * 0.9, y: size * 0.5 },
          ]
        };
    }
  };
  
  const config = getSystemConfig();
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Control system grid background */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{ backgroundSize: `${size/10}px ${size/10}px` }}
      />
      
      {/* Central icon */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full bg-background border border-border"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          left: size * 0.35,
          top: size * 0.35,
        }}
        animate={{ 
          boxShadow: [
            "0 0 0 rgba(147, 51, 234, 0)",
            "0 0 20px rgba(147, 51, 234, 0.5)",
            "0 0 0 rgba(147, 51, 234, 0)"
          ],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut" 
        }}
      >
        {config.icon}
      </motion.div>
      
      {/* Signal path */}
      <svg width={size} height={size} className="absolute inset-0">
        <motion.path
          d={`M ${config.pattern[0].x} ${config.pattern[0].y} C ${config.pattern[1].x} ${config.pattern[1].y}, ${config.pattern[2].x} ${config.pattern[2].y}, ${config.pattern[3].x} ${config.pattern[3].y}`}
          fill="none"
          stroke={config.primaryColor}
          strokeWidth={3}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1], 
            opacity: [0, 1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.7, 1]
          }}
        />
      </svg>
      
      {/* Data points */}
      {config.pattern.map((point, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-card border border-accent flex items-center justify-center"
          style={{
            width: size * 0.08,
            height: size * 0.08,
            left: point.x - size * 0.04,
            top: point.y - size * 0.04,
          }}
          animate={{ 
            scale: [1, index % 2 === 0 ? 1.2 : 0.9, 1],
            boxShadow: [
              "0 0 0 rgba(30, 174, 219, 0)",
              "0 0 10px rgba(30, 174, 219, 0.5)",
              "0 0 0 rgba(30, 174, 219, 0)"
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            delay: index * 0.5,
            ease: "easeInOut" 
          }}
        >
          <span className="text-xs font-bold">{index + 1}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ControlSystemAnimation;
