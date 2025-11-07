import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import heroBanner from "@/assets/hero-banner.jpg";
import webDevCourse from "@/assets/course-web-dev.jpg";
import designCourse from "@/assets/course-design.jpg";
import dataScienceCourse from "@/assets/course-data-science.jpg";
import marketingCourse from "@/assets/course-marketing.jpg";

const categories = [
  { name: "Design", icon: "🎨", color: "bg-pink-100 text-pink-700" },
  { name: "Development", icon: "💻", color: "bg-blue-100 text-blue-700" },
  { name: "Marketing", icon: "📈", color: "bg-green-100 text-green-700" },
  { name: "Business", icon: "💼", color: "bg-purple-100 text-purple-700" },
  { name: "Photography", icon: "📷", color: "bg-yellow-100 text-yellow-700" },
  { name: "Music", icon: "🎵", color: "bg-red-100 text-red-700" },
];

const trendingCourses = [
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
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn without limits
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Start, switch, or advance your career with thousands of courses from industry experts.
              </p>
              
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="What do you want to learn today?"
                  className="pl-12 pr-4 h-14 text-base bg-card shadow-md border-0 focus-visible:ring-2"
                />
              </div>
            </div>
            
            <div className="hidden md:block">
              <img
                src={heroBanner}
                alt="Learning illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className={`h-24 flex flex-col gap-2 ${category.color} border-0 transition-smooth hover:scale-105`}
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Courses</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become an instructor
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Share your knowledge with millions of students worldwide
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
