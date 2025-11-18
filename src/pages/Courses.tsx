import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import axios from "axios";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (err: any) {
        console.error("Error fetching courses:", err);
        setError(err?.response?.data?.message || "Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-secondary/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-muted-foreground">
            Explore our catalog of {courses.length} courses
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {courses.length} results
          </p>
          
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        )}
        
        {/* Error State */}
        {error && !loading && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-semibold mb-2">Error Loading Courses</p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        )}
        
        {/* Empty State */}
        {!loading && !error && courses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-semibold mb-2">No courses found</p>
            <p className="text-muted-foreground">
              Try adjusting your filters or check back later
            </p>
          </div>
        )}
        
        {/* Courses Grid */}
        {!loading && !error && courses.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard 
                key={course._id} 
                id={course._id}
                title={course.title}
                instructor="Instructor" // You can add instructor field to Course model later
                image={course.thumbnail || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"}
                rating={4.5} // You can add rating field to Course model later
                reviews={0} // You can add reviews field to Course model later
                price={course.price}
                originalPrice={course.price * 1.5} // Calculate 50% discount
                category={course.category}
                duration={course.duration || "N/A"}
                students={0} // You can add students count field later
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
