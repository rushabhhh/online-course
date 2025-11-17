import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <BookOpen className="h-6 w-6" />
            LearnHub
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
            to="/"
            className={`hidden md:block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/home") ? "text-primary" : "text-foreground"
              }`}

           >Home</Link>

            <Link
              to="/courses"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/courses") ? "text-primary" : "text-foreground"
              }`}
            >
              Courses
            </Link>
            
            <Link
              to="/dashboard"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-foreground"
              }`}
            >
              My Learning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
