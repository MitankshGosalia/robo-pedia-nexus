
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Battery, Eye, Cog, CircuitBoard, Wifi } from "lucide-react";

interface ComponentAnimationProps {
  type?: 'processors' | 'power' | 'sensors' | 'actuators' | 'electronics' | 'communication';
  size?: number;
}

const ComponentAnimation = ({ type = 'processors', size = 180 }: ComponentAnimationProps) => {
  // Different configurations based on component type
  const getComponentConfig = () => {
    switch(type) {
      case 'processors':
        return {
          primaryColor: "#9b87f5",
          icon: <Cpu size={size/5} className="text-primary" />,
          gridSize: 4,
          animationSpeed: 2
        };
      case 'power':
        return {
          primaryColor: "#f43f5e",
          icon: <Battery size={size/5} className="text-accent" />,
          gridSize: 3,
          animationSpeed: 3
        };
      case 'sensors':
        return {
          primaryColor: "#1EAEDB",
          icon: <Eye size={size/5} className="text-primary" />,
          gridSize: 5,
          animationSpeed: 1.5
        };
      case 'actuators':
        return {
          primaryColor: "#f97316",
          icon: <Cog size={size/5} className="text-accent" />,
          gridSize: 4,
          animationSpeed: 2.5
        };
      case 'electronics':
        return {
          primaryColor: "#4ade80",
          icon: <CircuitBoard size={size/5} className="text-primary" />,
          gridSize: 6,
          animationSpeed: 2
        };
      case 'communication':
        return {
          primaryColor: "#7E69AB",
          icon: <Wifi size={size/5} className="text-accent" />,
          gridSize: 4,
          animationSpeed: 1.8
        };
      default:
        return {
          primaryColor: "#9b87f5",
          icon: <Cpu size={size/5} className="text-primary" />,
          gridSize: 4,
          animationSpeed: 2
        };
    }
  };
  
  const config = getComponentConfig();
  
  // Create circuit paths
  const generateCircuitPaths = () => {
    const paths = [];
    const cellSize = size / config.gridSize;
    
    // Horizontal lines
    for (let i = 1; i < config.gridSize; i++) {
      paths.push({
        id: `h-${i}`,
        d: `M ${cellSize/2} ${i * cellSize} H ${size - cellSize/2}`,
        delay: i * 0.2
      });
    }
    
    // Vertical lines
    for (let i = 1; i < config.gridSize; i++) {
      paths.push({
        id: `v-${i}`,
        d: `M ${i * cellSize} ${cellSize/2} V ${size - cellSize/2}`,
        delay: i * 0.2 + 1
      });
    }
    
    return paths;
  };
  
  const circuitPaths = generateCircuitPaths();
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Component background */}
      <div className="absolute inset-0 rounded-lg bg-card border border-border overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundSize: `${size / config.gridSize}px ${size / config.gridSize}px`,
            backgroundImage: `linear-gradient(to right, ${config.primaryColor} 1px, transparent 1px),
                               linear-gradient(to bottom, ${config.primaryColor} 1px, transparent 1px)`
          }}
        />
      </div>
      
      {/* Circuit paths */}
      <svg width={size} height={size} className="absolute inset-0">
        {circuitPaths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={config.primaryColor}
            strokeWidth={2}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.7]
            }}
            transition={{ 
              duration: config.animationSpeed,
              delay: path.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Connection points */}
      {[...Array(config.gridSize - 1)].map((_, i) => (
        [...Array(config.gridSize - 1)].map((_, j) => (
          <motion.div
            key={`node-${i}-${j}`}
            className="absolute rounded-full bg-background border"
            style={{
              width: size * 0.06,
              height: size * 0.06,
              left: (i + 1) * (size / config.gridSize) - size * 0.03,
              top: (j + 1) * (size / config.gridSize) - size * 0.03,
              borderColor: config.primaryColor
            }}
            animate={{ 
              scale: (i + j) % 3 === 0 ? [1, 1.5, 1] : [1, 0.8, 1],
              boxShadow: [
                `0 0 0 rgba(${config.primaryColor}, 0)`,
                `0 0 10px ${config.primaryColor}`,
                `0 0 0 rgba(${config.primaryColor}, 0)`
              ]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 + (i * j) % 3,
              delay: (i + j) * 0.3,
              ease: "easeInOut" 
            }}
          />
        ))
      ))}
      
      {/* Component icon */}
      <motion.div
        className="absolute flex items-center justify-center rounded-lg bg-background shadow-lg"
        style={{
          width: size * 0.35,
          height: size * 0.35,
          left: size * 0.325,
          top: size * 0.325,
          border: `2px solid ${config.primaryColor}`
        }}
        animate={{ 
          rotate: [-5, 0, 5, 0, -5],
          boxShadow: [
            `0 0 0 rgba(${config.primaryColor}, 0)`,
            `0 0 15px ${config.primaryColor}`,
            `0 0 0 rgba(${config.primaryColor}, 0)`
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut" 
        }}
      >
        {config.icon}
      </motion.div>
    </div>
  );
};

export default ComponentAnimation;
