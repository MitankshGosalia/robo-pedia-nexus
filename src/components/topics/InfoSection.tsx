
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface InfoSectionProps {
  title: string;
  description: string;
  infoPoints?: string[];
  applications?: { title: string; description: string }[];
  resources?: { title: string; url: string }[];
  relatedTopics?: { title: string; href: string }[];
  children?: React.ReactNode;
}

const InfoSection = ({ 
  title,
  description,
  infoPoints = [],
  applications = [],
  resources = [],
  relatedTopics = [],
  children
}: InfoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-lg p-6 mb-8 shadow-sm"
    >
      <h2 className="text-2xl font-display font-bold mb-4">{title}</h2>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {children && (
        <div className="mb-8 flex justify-center">
          {children}
        </div>
      )}
      
      {infoPoints.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Key Information</h3>
          <ul className="space-y-2">
            {infoPoints.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="mr-2 mt-1 text-primary">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      
      {applications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Industrial Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-3 bg-muted/50 rounded-md"
              >
                <h4 className="font-medium text-primary">{app.title}</h4>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {resources.length > 0 && (
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:underline"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    {resource.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
        
        {relatedTopics.length > 0 && (
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-3">Related Topics</h3>
            <ul className="space-y-2">
              {relatedTopics.map((topic, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Link 
                    to={topic.href}
                    className="text-primary hover:underline"
                  >
                    {topic.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InfoSection;
