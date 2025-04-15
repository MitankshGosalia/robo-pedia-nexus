
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

const glossaryItems: GlossaryItem[] = [
  {
    term: "Actuator",
    definition: "A component that controls or moves a mechanism or system, converting energy into motion.",
    category: "components"
  },
  {
    term: "Algorithm",
    definition: "A set of rules or procedures for solving a problem or accomplishing a task in robotics.",
    category: "programming"
  },
  {
    term: "Artificial Intelligence (AI)",
    definition: "The simulation of human intelligence processes by machines, especially computer systems.",
    category: "ai"
  },
  {
    term: "Automation",
    definition: "The use of largely automatic equipment in a system of manufacturing or other production processes.",
    category: "general"
  },
  {
    term: "Degrees of Freedom (DoF)",
    definition: "The number of independent parameters that define the configuration of a robotic system.",
    category: "mechanics"
  },
  {
    term: "End Effector",
    definition: "The device at the end of a robotic arm designed to interact with the environment.",
    category: "components"
  },
  {
    term: "Feedback Control",
    definition: "A control system that monitors its output and adjusts the control inputs to achieve the desired output.",
    category: "controls"
  },
  {
    term: "Gripper",
    definition: "A device which enables the holding of an object to be manipulated.",
    category: "components"
  },
  {
    term: "Humanoid Robot",
    definition: "A robot with a body shape built to resemble the human body.",
    category: "types"
  },
  {
    term: "Inverse Kinematics",
    definition: "The mathematical process of calculating the variable joint parameters needed to place the end of a robot arm at a desired position and orientation.",
    category: "programming"
  },
  {
    term: "Machine Learning",
    definition: "A method of data analysis that automates analytical model building, allowing systems to learn and improve from experience.",
    category: "ai"
  },
  {
    term: "Manipulator",
    definition: "A device used to manipulate materials without direct contact.",
    category: "components"
  },
  {
    term: "PID Controller",
    definition: "A control loop feedback mechanism widely used in industrial control systems.",
    category: "controls"
  },
  {
    term: "SLAM",
    definition: "Simultaneous Localization and Mapping - a computational method for constructing or updating a map of an unknown environment while keeping track of location within it.",
    category: "programming"
  }
];

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredItems = glossaryItems.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Robotics Glossary
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in delay-100">
            Explore key terms and definitions in the field of robotics. Use the search and filters to find specific terms.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center relative mb-8">
            <Search className="absolute left-3 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search terms and definitions..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="mechanics">Mechanics</TabsTrigger>
              <TabsTrigger value="types">Robot Types</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory}>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6">
                  {filteredItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-card border border-border p-6 rounded-lg hover:shadow-md transition-shadow animate-fade-in delay-200"
                    >
                      <h3 className="font-display text-xl font-medium mb-2">{item.term}</h3>
                      <p className="text-muted-foreground">{item.definition}</p>
                      <div className="mt-3">
                        <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {filteredItems.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>No terms found matching your search criteria.</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default GlossaryPage;
