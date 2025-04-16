
import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, Code, Database } from "lucide-react";

interface AIRoboticsAnimationProps {
  type?: 'machine-learning' | 'computer-vision' | 'neural-networks' | 'nlp' | 'decision-making' | 'interaction';
  size?: number;
}

const AIRoboticsAnimation = ({ type = 'neural-networks', size = 200 }: AIRoboticsAnimationProps) => {
  // Different configurations based on AI component type
  const getAIConfig = () => {
    switch(type) {
      case 'machine-learning':
        return {
          primaryColor: "#9b87f5",
          icon: <Brain size={size/5} className="text-primary" />,
          nodeCount: 6,
          connectionCount: 9,
          layerCount: 3
        };
      case 'computer-vision':
        return {
          primaryColor: "#1EAEDB",
          icon: <Code size={size/5} className="text-accent" />,
          nodeCount: 9,
          connectionCount: 12,
          layerCount: 3
        };
      case 'neural-networks':
        return {
          primaryColor: "#7E69AB",
          icon: <Network size={size/5} className="text-primary" />,
          nodeCount: 12,
          connectionCount: 15,
          layerCount: 4
        };
      case 'decision-making':
        return {
          primaryColor: "#4ade80",
          icon: <Database size={size/5} className="text-accent" />,
          nodeCount: 8,
          connectionCount: 10,
          layerCount: 3
        };
      default:
        return {
          primaryColor: "#9b87f5",
          icon: <Brain size={size/5} className="text-primary" />,
          nodeCount: 8,
          connectionCount: 10,
          layerCount: 3
        };
    }
  };
  
  const config = getAIConfig();
  
  // Create neural network nodes and connections
  const generateNodes = () => {
    const nodes = [];
    const perLayer = Math.floor(config.nodeCount / config.layerCount);
    
    for (let layer = 0; layer < config.layerCount; layer++) {
      for (let i = 0; i < perLayer; i++) {
        nodes.push({
          x: (size * 0.15) + (layer * (size * 0.7) / (config.layerCount - 1)),
          y: (size * 0.2) + (i * (size * 0.6) / (perLayer - 1)),
          layer,
          index: i
        });
      }
    }
    
    return nodes;
  };
  
  const generateConnections = (nodes: any[]) => {
    const connections = [];
    
    for (let layer = 0; layer < config.layerCount - 1; layer++) {
      const currentLayerNodes = nodes.filter(n => n.layer === layer);
      const nextLayerNodes = nodes.filter(n => n.layer === layer + 1);
      
      for (let i = 0; i < currentLayerNodes.length; i++) {
        for (let j = 0; j < nextLayerNodes.length; j++) {
          if (connections.length < config.connectionCount) {
            connections.push({
              x1: currentLayerNodes[i].x,
              y1: currentLayerNodes[i].y,
              x2: nextLayerNodes[j].x,
              y2: nextLayerNodes[j].y,
              key: `${layer}-${i}-${j}`
            });
          }
        }
      }
    }
    
    return connections;
  };
  
  const nodes = generateNodes();
  const connections = generateConnections(nodes);
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Neural network background */}
      <div className="absolute inset-0 rounded-lg bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
        {/* Animated gradient */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${config.primaryColor}, transparent 70%)`
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Connections */}
      <svg width={size} height={size} className="absolute inset-0">
        {connections.map((conn, index) => (
          <motion.line
            key={conn.key}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke={config.primaryColor}
            strokeWidth={1.5}
            strokeOpacity={0.5}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              strokeOpacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 2 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }}
          />
        ))}
      </svg>
      
      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={`node-${node.layer}-${node.index}`}
          className="absolute rounded-full bg-background border"
          style={{
            width: size * 0.08,
            height: size * 0.08,
            left: node.x - size * 0.04,
            top: node.y - size * 0.04,
            borderColor: config.primaryColor
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 0 rgba(${config.primaryColor}, 0)`,
              `0 0 10px ${config.primaryColor}`,
              `0 0 0 rgba(${config.primaryColor}, 0)`
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            delay: index * 0.2,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      {/* Central icon */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full bg-card shadow-lg"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          left: size * 0.375,
          top: size * 0.375,
          border: `2px solid ${config.primaryColor}`
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 rgba(147, 51, 234, 0)",
            "0 0 20px rgba(147, 51, 234, 0.5)",
            "0 0 0 rgba(147, 51, 234, 0)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut" 
        }}
      >
        {config.icon}
      </motion.div>
    </div>
  );
};

export default AIRoboticsAnimation;
