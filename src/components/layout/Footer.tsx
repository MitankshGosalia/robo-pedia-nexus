
import { Link } from "react-router-dom";
import { BookOpen, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-robotics-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              <span className="font-display font-bold text-lg text-foreground">
                Robo<span className="text-primary">Pedia</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              The comprehensive online encyclopedia for everything robotics.
              Free, structured, and visual learning for all.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/topics/robot-types" className="text-muted-foreground hover:text-foreground transition">
                  Robot Types
                </Link>
              </li>
              <li>
                <Link to="/topics/components" className="text-muted-foreground hover:text-foreground transition">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/topics/control-systems" className="text-muted-foreground hover:text-foreground transition">
                  Control Systems
                </Link>
              </li>
              <li>
                <Link to="/topics/ai-robotics" className="text-muted-foreground hover:text-foreground transition">
                  AI in Robotics
                </Link>
              </li>
              <li>
                <Link to="/topics/future-tech" className="text-muted-foreground hover:text-foreground transition">
                  Future Technologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/glossary" className="text-muted-foreground hover:text-foreground transition">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-muted-foreground hover:text-foreground transition">
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@robopedia.com" className="text-muted-foreground hover:text-foreground transition">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Subscribe to our newsletter for the latest updates in robotics.
            </p>
            <div className="mt-2">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white dark:bg-robotics-background text-sm border border-input rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary" 
                />
                <button 
                  type="submit"
                  className="bg-primary text-white text-sm rounded-r-md px-3 py-2 hover:bg-primary/90 transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© 2025 RoboPedia. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
