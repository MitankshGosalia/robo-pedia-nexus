
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Factory, Package, Car, HeartPulse, Home } from "lucide-react";
import { motion } from "framer-motion";

const IndustryInsights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Industry Insights</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            How robotics is transforming key industries across the global economy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="manufacturing" className="flex items-center gap-2">
                <Factory className="h-4 w-4" />
                <span className="hidden md:inline">Manufacturing</span>
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden md:inline">Logistics</span>
              </TabsTrigger>
              <TabsTrigger value="automotive" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                <span className="hidden md:inline">Automotive</span>
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4" />
                <span className="hidden md:inline">Healthcare</span>
              </TabsTrigger>
              <TabsTrigger value="consumer" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden md:inline">Consumer</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="manufacturing" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        Manufacturing Revolution
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Industrial robots have transformed manufacturing, with over 3 million industrial robots 
                        operating in factories worldwide. This adoption has increased production efficiency by 
                        up to 30% while improving worker safety by removing humans from hazardous tasks.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          90% of automotive production lines utilize robotic automation
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          Collaborative robots working alongside humans growing at 50% annually
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          AI-enhanced robots reducing defect rates by up to 90%
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2 bg-muted rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <h4 className="font-medium mb-2 text-lg">Key Implementations</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Precision Assembly</h5>
                          <p className="text-sm text-muted-foreground">
                            Robots consistently achieving sub-millimeter precision for electronics assembly, reducing errors by 95% compared to manual processes.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Quality Control</h5>
                          <p className="text-sm text-muted-foreground">
                            Computer vision systems inspecting 100,000+ components per hour with 99.9% defect detection rate.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Material Handling</h5>
                          <p className="text-sm text-muted-foreground">
                            Autonomous mobile robots (AMRs) optimizing factory logistics, reducing material transport time by 40%.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Process Optimization</h5>
                          <p className="text-sm text-muted-foreground">
                            AI-driven process control adjusting parameters in real-time, reducing energy consumption by up to 25%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logistics" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        Supply Chain Transformation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Robotics is revolutionizing the logistics industry, from automated warehouses to 
                        last-mile delivery solutions. Companies using robotics report 60% faster order fulfillment 
                        and 40% reduction in operating costs.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          Warehouse robots processing 4x more orders than manual operations
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          99.9% inventory accuracy with autonomous scanning systems
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          70% reduction in picking errors with robotic fulfillment
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2 bg-muted rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <h4 className="font-medium mb-2 text-lg">Key Implementations</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Automated Storage & Retrieval</h5>
                          <p className="text-sm text-muted-foreground">
                            High-density storage systems utilizing 35% less warehouse space while improving retrieval speeds by 300%.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Sorting Systems</h5>
                          <p className="text-sm text-muted-foreground">
                            AI-powered sorting robots processing 50,000+ packages per hour with destination accuracy exceeding 99.8%.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Autonomous Vehicles</h5>
                          <p className="text-sm text-muted-foreground">
                            Self-driving trucks reducing long-haul transportation costs by 30% while improving safety metrics.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Last-Mile Delivery</h5>
                          <p className="text-sm text-muted-foreground">
                            Delivery drones and robots completing urban deliveries in under 30 minutes with 98% on-time performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="automotive" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        Automotive Innovation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        From production lines to self-driving vehicles, robots are redefining how 
                        cars are built and operated. Modern automobile manufacturing uses up to 1,000 
                        robots per factory to achieve unprecedented precision and efficiency.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">●</span> 
                          80% of automotive assembly processes now automated
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">●</span> 
                          Self-driving technology reducing accidents by up to 90%
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">●</span> 
                          Electric vehicle production 40% more automated than combustion engines
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2 bg-muted rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <h4 className="font-medium mb-2 text-lg">Key Implementations</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Welding & Assembly</h5>
                          <p className="text-sm text-muted-foreground">
                            Robotic welding systems performing 5,000+ precision welds per vehicle with 99.996% consistency.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Paint Application</h5>
                          <p className="text-sm text-muted-foreground">
                            Automated painting systems reducing material waste by 30% while achieving perfect finish uniformity.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Autonomous Driving</h5>
                          <p className="text-sm text-muted-foreground">
                            Self-driving systems processing 1TB of sensor data hourly to navigate complex environments safely.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Testing & Quality</h5>
                          <p className="text-sm text-muted-foreground">
                            Automated testing performing 1,200+ quality checks per vehicle in under 90 seconds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="healthcare" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        Healthcare Revolution
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Medical robotics is transforming healthcare delivery with unprecedented 
                        precision, consistency, and reach. Surgical robots are now used in over 
                        1 million procedures annually worldwide.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          Robotic surgery reducing recovery times by up to 50%
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          Rehabilitation robots helping patients regain mobility 30% faster
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">●</span> 
                          Care robots addressing 40% of routine patient monitoring tasks
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2 bg-muted rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <h4 className="font-medium mb-2 text-lg">Key Implementations</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Surgical Robots</h5>
                          <p className="text-sm text-muted-foreground">
                            Precision surgical systems performing procedures with 0.2mm accuracy, eliminating natural hand tremors.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Prosthetics & Exoskeletons</h5>
                          <p className="text-sm text-muted-foreground">
                            Neural-controlled prosthetic limbs restoring 70%+ of natural movement capability to amputees.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Diagnostic Systems</h5>
                          <p className="text-sm text-muted-foreground">
                            AI-powered imaging robots detecting early-stage cancer with 95% accuracy, surpassing human radiologists.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Care Assistance</h5>
                          <p className="text-sm text-muted-foreground">
                            Robotic assistants helping elderly patients maintain independence and reducing caregiver burden by 35%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="consumer" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        Smart Home Integration
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Consumer robotics is becoming mainstream with household penetration 
                        increasing 30% annually. From cleaning to entertainment, robots are 
                        enhancing everyday life in homes worldwide.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          Home robots saving users 4+ hours of weekly household tasks
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          Smart home integration allowing seamless ecosystem operation
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">●</span> 
                          Educational robots increasing STEM learning outcomes by 40%
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2 bg-muted rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <h4 className="font-medium mb-2 text-lg">Key Implementations</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Cleaning Robots</h5>
                          <p className="text-sm text-muted-foreground">
                            Advanced navigation systems mapping homes with centimeter precision while optimizing cleaning patterns.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Entertainment Systems</h5>
                          <p className="text-sm text-muted-foreground">
                            Interactive companion robots providing personalized entertainment and educational content.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Home Security</h5>
                          <p className="text-sm text-muted-foreground">
                            Mobile security robots patrolling homes with advanced threat detection capabilities.
                          </p>
                        </div>
                        
                        <div className="bg-card p-4 rounded-md border border-border">
                          <h5 className="font-medium mb-1">Kitchen Assistance</h5>
                          <p className="text-sm text-muted-foreground">
                            Cooking robots preparing meals from 500+ recipes with restaurant-quality consistency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryInsights;
