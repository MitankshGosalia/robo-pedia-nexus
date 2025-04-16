
import React from "react";
import { motion } from "framer-motion";
import { Zap, Microscope, Cloud, Wifi, Dna, Atom } from "lucide-react";

interface FutureTechAnimationProps {
  type?: 'soft-robotics' | 'nano-robotics' | 'cloud-robotics' | 'swarm-intelligence' | 'bio-inspired' | 'quantum-robotics';
  size?: number;
}

const FutureTechAnimation = ({ type = 'quantum-robotics', size = 220 }: FutureTechAnimationProps) => {
  // Different configurations based on technology type
  const getTechConfig = () => {
    switch(type) {
      case 'soft-robotics':
        return {
          primaryColor: "#4ade80",
          secondaryColor: "#1EAEDB",
          icon: <Zap size={size/6} className="text-primary" />,
          particleCount: 12,
          orbitRadius: size * 0.35
        };
      case 'nano-robotics':
        return {
          primaryColor: "#9b87f5",
          secondaryColor: "#f43f5e",
          icon: <Microscope size={size/6} className="text-accent" />,
          particleCount: 8,
          orbitRadius: size * 0.3
        };
      case 'cloud-robotics':
        return {
          primaryColor: "#1EAEDB",
          secondaryColor: "#9b87f5",
          icon: <Cloud size={size/6} className="text-primary" />,
          particleCount: 10,
          orbitRadius: size * 0.32
        };
      case 'swarm-intelligence':
        return {
          primaryColor: "#f97316",
          secondaryColor: "#1EAEDB",
          icon: <Wifi size={size/6} className="text-accent" />,
          particleCount: 16,
          orbitRadius: size * 0.38
        };
      case 'bio-inspired':
        return {
          primaryColor: "#7E69AB",
          secondaryColor: "#4ade80",
          icon: <Dna size={size/6} className="text-primary" />,
          particleCount: 14,
          orbitRadius: size * 0.33
        };
      case 'quantum-robotics':
        return {
          primaryColor: "#f43f5e",
          secondaryColor: "#9b87f5",
          icon: <Atom size={size/6} className="text-accent" />,
          particleCount: 18,
          orbitRadius: size * 0.4
        };
      default:
        return {
          primaryColor: "#9b87f5",
          secondaryColor: "#1EAEDB",
          icon: <Atom size={size/6} className="text-primary" />,
          particleCount: 14,
          orbitRadius: size * 0.35
        };
    }
  };
  
  const config = getTechConfig();
  
  // Generate orbital particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      const angle = (i / config.particleCount) * Math.PI * 2;
      const delay = i * (5 / config.particleCount);
      
      particles.push({
        id: i,
        angle,
        delay,
        size: Math.random() * (size * 0.06) + (size * 0.03)
      });
    }
    return particles;
  };
  
  const particles = generateParticles();
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background effect */}
      <motion.div 
        className="absolute inset-0 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${config.primaryColor}, ${config.secondaryColor}, transparent)`
        }}
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.05, 0.15, 0.05] }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut" 
        }}
      />
      
      {/* Rotating orbits */}
      <motion.div 
        className="absolute rounded-full border-2 border-dashed border-opacity-20"
        style={{
          width: config.orbitRadius * 2,
          height: config.orbitRadius * 2,
          left: size/2 - config.orbitRadius,
          top: size/2 - config.orbitRadius,
          borderColor: config.primaryColor
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className="absolute rounded-full border-2 border-dashed border-opacity-20"
        style={{
          width: config.orbitRadius * 2.3,
          height: config.orbitRadius * 1.7,
          left: size/2 - config.orbitRadius * 1.15,
          top: size/2 - config.orbitRadius * 0.85,
          borderColor: config.secondaryColor
        }}
        animate={{ rotate: -360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: "linear" 
        }}
      />
      
      {/* Orbital particles */}
      {particles.map(particle => (
        <motion.div 
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: size/2,
            top: size/2,
            background: particle.id % 2 === 0 ? config.primaryColor : config.secondaryColor,
            originX: 0,
            originY: 0
          }}
          animate={{
            x: [
              Math.cos(particle.angle) * config.orbitRadius,
              Math.cos(particle.angle + Math.PI) * config.orbitRadius,
              Math.cos(particle.angle + Math.PI * 2) * config.orbitRadius
            ],
            y: [
              Math.sin(particle.angle) * config.orbitRadius,
              Math.sin(particle.angle + Math.PI) * config.orbitRadius,
              Math.sin(particle.angle + Math.PI * 2) * config.orbitRadius
            ],
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            delay: particle.delay,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      {/* Core technology icon */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full bg-card shadow-lg"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          left: size/2 - size * 0.125,
          top: size/2 - size * 0.125,
          border: `2px solid ${config.primaryColor}`
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            `0 0 0 rgba(${config.primaryColor}, 0)`,
            `0 0 20px ${config.primaryColor}`,
            `0 0 0 rgba(${config.primaryColor}, 0)`
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

export default FutureTechAnimation;
