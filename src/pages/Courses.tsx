import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import webDevCourse from "@/assets/course-web-dev.jpg";
import designCourse from "@/assets/course-design.jpg";
import dataScienceCourse from "@/assets/course-data-science.jpg";
import marketingCourse from "@/assets/course-marketing.jpg";

const allCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    image: webDevCourse,
    rating: 4.8,
    reviews: 25430,
    price: 84.99,
    originalPrice: 129.99,
    category: "Development",
    duration: "52 hours",
    students: 145230,
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass: Adobe XD & Figma",
    instructor: "Daniel Scott",
    image: designCourse,
    rating: 4.7,
    reviews: 18920,
    price: 74.99,
    originalPrice: 109.99,
    category: "Design",
    duration: "28 hours",
    students: 89450,
  },
  {
    id: "3",
    title: "Data Science & Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    image: dataScienceCourse,
    rating: 4.9,
    reviews: 32150,
    price: 94.99,
    originalPrice: 149.99,
    category: "Data Science",
    duration: "45 hours",
    students: 198320,
  },
  {
    id: "4",
    title: "Digital Marketing Mastery 2024",
    instructor: "Phil Ebiner",
    image: marketingCourse,
    rating: 4.6,
    reviews: 15680,
    price: 69.99,
    originalPrice: 99.99,
    category: "Marketing",
    duration: "35 hours",
    students: 67890,
  },
  {
    id: "5",
    title: "Advanced React & Redux Development",
    instructor: "Stephen Grider",
    image: webDevCourse,
    rating: 4.8,
    reviews: 22340,
    price: 79.99,
    originalPrice: 119.99,
    category: "Development",
    duration: "38 hours",
    students: 112450,
  },
  {
    id: "6",
    title: "Graphic Design Bootcamp",
    instructor: "Lindsay Marsh",
    image: designCourse,
    rating: 4.7,
    reviews: 14230,
    price: 64.99,
    originalPrice: 94.99,
    category: "Design",
    duration: "24 hours",
    students: 56780,
  },
];

const categories = ["All", "Development", "Design", "Data Science", "Marketing", "Business"];
const priceRanges = ["All", "Free", "$0-$50", "$50-$100", "$100+"];
const ratings = ["All", "4.5+", "4.0+", "3.5+"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-secondary/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-muted-foreground">Explore our catalog of {allCourses.length} courses</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {allCourses.length} results
              </p>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                
              </div>
            </div>
            
            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
            
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
