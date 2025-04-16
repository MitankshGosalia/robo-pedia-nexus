
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Settings, Wrench, Laptop, Factory, FlaskConical, Microscope } from "lucide-react";

interface RobotAnimationProps {
  type?: 'industrial' | 'service' | 'medical' | 'educational' | 'research' | 'mobile';
  size?: number;
}

const RobotAnimation = ({ type = 'industrial', size = 120 }: RobotAnimationProps) => {
  const iconSize = size / 4;
  
  // Different robot configurations based on type
  const getRobotConfig = () => {
    switch(type) {
      case 'industrial':
        return {
          bodyColor: "#1EAEDB",
          icon: <Factory className="text-white" size={iconSize} />,
          armSpeed: 2,
          movePattern: [0, -5, 0, 5, 0],
        };
      case 'service':
        return {
          bodyColor: "#9b87f5",
          icon: <Bot className="text-white" size={iconSize} />,
          armSpeed: 3,
          movePattern: [0, -3, 0, 3, 0],
        };
      case 'medical':
        return {
          bodyColor: "#4ade80",
          icon: <FlaskConical className="text-white" size={iconSize} />,
          armSpeed: 4,
          movePattern: [0, -2, 0, 2, 0],
        };
      case 'educational':
        return {
          bodyColor: "#f97316",
          icon: <Laptop className="text-white" size={iconSize} />,
          armSpeed: 5,
          movePattern: [0, -4, 0, 4, 0],
        };
      case 'research':
        return {
          bodyColor: "#7E69AB",
          icon: <Microscope className="text-white" size={iconSize} />,
          armSpeed: 2.5,
          movePattern: [0, -3, 0, 3, 0],
        };
      case 'mobile':
        return {
          bodyColor: "#f43f5e",
          icon: <Settings className="text-white" size={iconSize} />,
          armSpeed: 1.5,
          movePattern: [0, -6, 0, 6, 0],
        };
      default:
        return {
          bodyColor: "#1EAEDB",
          icon: <Bot className="text-white" size={iconSize} />,
          armSpeed: 2,
          movePattern: [0, -5, 0, 5, 0],
        };
    }
  };
  
  const config = getRobotConfig();
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Robot body */}
      <motion.div 
        className="absolute rounded-t-2xl"
        style={{ 
          width: size * 0.7, 
          height: size * 0.5, 
          left: size * 0.15, 
          top: size * 0.3, 
          background: config.bodyColor,
        }}
        animate={{ y: config.movePattern }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Robot head */}
      <motion.div 
        className="absolute rounded-t-full"
        style={{ 
          width: size * 0.5, 
          height: size * 0.3, 
          left: size * 0.25, 
          top: size * 0.05, 
          background: config.bodyColor,
        }}
        animate={{ 
          rotateZ: [-2, 2, -2],
          y: config.movePattern 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      >
        {/* Eyes */}
        <div className="absolute rounded-full bg-white" style={{ width: size * 0.1, height: size * 0.1, left: size * 0.1, top: size * 0.1 }} />
        <div className="absolute rounded-full bg-white" style={{ width: size * 0.1, height: size * 0.1, right: size * 0.1, top: size * 0.1 }} />
      </motion.div>
      
      {/* Left arm */}
      <motion.div 
        className="absolute rounded-full"
        style={{ 
          width: size * 0.1, 
          height: size * 0.4, 
          left: size * 0.05, 
          top: size * 0.35, 
          background: config.bodyColor,
          originY: 0,
          originX: 1
        }}
        animate={{ rotate: [-30, 0, 30, 0, -30] }}
        transition={{ 
          repeat: Infinity, 
          duration: config.armSpeed,  
          ease: "easeInOut" 
        }}
      />
      
      {/* Right arm */}
      <motion.div 
        className="absolute rounded-full"
        style={{ 
          width: size * 0.1, 
          height: size * 0.4, 
          right: size * 0.05, 
          top: size * 0.35, 
          background: config.bodyColor,
          originY: 0,
          originX: 0
        }}
        animate={{ rotate: [30, 0, -30, 0, 30] }}
        transition={{ 
          repeat: Infinity, 
          duration: config.armSpeed, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Legs */}
      <motion.div 
        className="absolute"
        style={{ 
          width: size * 0.15, 
          height: size * 0.25, 
          left: size * 0.25, 
          top: size * 0.75, 
          background: config.bodyColor,
        }}
        animate={{ 
          height: [size * 0.25, size * 0.28, size * 0.25],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute"
        style={{ 
          width: size * 0.15, 
          height: size * 0.25, 
          right: size * 0.25, 
          top: size * 0.75, 
          background: config.bodyColor,
        }}
        animate={{ 
          height: [size * 0.25, size * 0.28, size * 0.25],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "easeInOut",
          delay: 0.75
        }}
      />
      
      {/* Icon in chest */}
      <motion.div 
        className="absolute flex items-center justify-center rounded-full bg-background"
        style={{ 
          width: size * 0.25, 
          height: size * 0.25, 
          left: size * 0.375, 
          top: size * 0.4, 
          border: `2px solid rgba(255,255,255,0.5)`
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        {config.icon}
      </motion.div>
    </div>
  );
};

export default RobotAnimation;
