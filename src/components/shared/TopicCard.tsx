
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

const TopicCard = ({ title, description, icon, href, className, style }: TopicCardProps) => {
  return (
    <Link 
      to={href}
      style={style}
      className={cn(
        "group relative flex flex-col items-start p-6 bg-card dark:bg-card hover:bg-muted/50 dark:hover:bg-muted/10 rounded-lg border border-border shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="h-5 w-5 text-primary" />
      </div>
    </Link>
  );
};

export default TopicCard;
