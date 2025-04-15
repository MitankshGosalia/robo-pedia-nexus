
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

// Sample glossary terms
const glossaryTerms = [
  {
    term: "Actuator",
    definition: "A component that converts energy into motion to move or control a mechanism or system."
  },
  {
    term: "Algorithm",
    definition: "A set of rules or instructions designed to solve a specific problem or perform a computation."
  },
  {
    term: "Artificial Intelligence (AI)",
    definition: "The simulation of human intelligence processes by machines, especially computer systems."
  },
  {
    term: "End Effector",
    definition: "The device at the end of a robotic arm designed to interact with the environment."
  },
  {
    term: "Feedback Control",
    definition: "A system where output measurements are used as feedback to control the process or plant."
  },
  {
    term: "Kinematics",
    definition: "The study of motion without considering the forces that cause it."
  }
];

const GlossaryPreview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white dark:bg-robotics-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-2">Robotics Glossary</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quickly look up common robotics terms and concepts from our comprehensive glossary
          </p>
          
          <div className="max-w-lg mx-auto mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 rounded-md border border-input bg-white dark:bg-robotics-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-xl font-medium mb-2 text-primary">
                {item.term}
              </h3>
              <p className="text-muted-foreground text-sm">{item.definition}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/glossary">
            <Button size="lg" variant="outline">
              Explore Full Glossary
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlossaryPreview;
