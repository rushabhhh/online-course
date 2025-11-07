import { useState } from "react";
import { Star, Clock, Users, PlayCircle, FileText, CheckCircle, Heart, Share2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import webDevCourse from "@/assets/course-web-dev.jpg";
import designCourse from "@/assets/course-design.jpg";
import dataScienceCourse from "@/assets/course-data-science.jpg";

const courseModules = [
  {
    title: "Getting Started",
    lessons: 5,
    duration: "45 min",
    lectures: [
      { title: "Welcome to the Course", duration: "5 min", type: "video" },
      { title: "Course Resources", duration: "2 min", type: "file" },
      { title: "Setup Your Environment", duration: "15 min", type: "video" },
      { title: "Your First Project", duration: "20 min", type: "video" },
      { title: "Module Quiz", duration: "3 min", type: "quiz" },
    ],
  },
  {
    title: "Fundamentals",
    lessons: 8,
    duration: "2 hours",
    lectures: [
      { title: "Introduction to Concepts", duration: "15 min", type: "video" },
      { title: "Core Principles", duration: "25 min", type: "video" },
      { title: "Practical Examples", duration: "30 min", type: "video" },
      { title: "Best Practices", duration: "20 min", type: "video" },
    ],
  },
  {
    title: "Advanced Topics",
    lessons: 10,
    duration: "3 hours",
    lectures: [
      { title: "Advanced Techniques", duration: "35 min", type: "video" },
      { title: "Real-world Applications", duration: "40 min", type: "video" },
      { title: "Project Work", duration: "60 min", type: "video" },
    ],
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent course! The instructor explains everything clearly and the projects are very practical.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    comment: "Best course I've taken on this topic. Highly recommend for anyone wanting to learn.",
  },
  {
    name: "Emily Rodriguez",
    rating: 4,
    date: "2 months ago",
    comment: "Great content overall. Could use more advanced examples but still very valuable.",
  },
];

const relatedCourses = [
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    instructor: "Daniel Scott",
    image: designCourse,
    rating: 4.7,
    reviews: 18920,
    price: 74.99,
    category: "Design",
  },
  {
    id: "3",
    title: "Data Science Bootcamp",
    instructor: "Jose Portilla",
    image: dataScienceCourse,
    rating: 4.9,
    reviews: 32150,
    price: 94.99,
    category: "Data Science",
  },
];

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Course Header */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-sm font-medium text-primary">Development</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Web Development Bootcamp 2024
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more with real-world projects.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-lg">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(25,430 reviews)</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>145,230 students</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Dr. Angela Yu</p>
                  <p className="text-sm text-muted-foreground">Lead Instructor</p>
                </div>
              </div>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <img src={webDevCourse} alt="Course" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button size="lg" className="rounded-full h-16 w-16 p-0">
                      <PlayCircle className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">$84.99</span>
                    <span className="text-lg text-muted-foreground line-through">$129.99</span>
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Enroll Now
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full">
                    Add to Cart
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="flex-1">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="flex-1">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="pt-4 space-y-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Duration
                      </span>
                      <span className="font-medium">52 hours</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        Lectures
                      </span>
                      <span className="font-medium">345 lectures</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4" />
                        Language
                      </span>
                      <span className="font-medium">English</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex gap-4 border-b">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "overview"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "curriculum"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === "reviews"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Reviews
              </button>
            </div>
            
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Build 16+ real-world projects",
                      "Master HTML5, CSS3, and JavaScript",
                      "Learn React and modern frontend development",
                      "Backend development with Node.js",
                      "Database management with MongoDB",
                      "Deploy applications to production",
                      "Git and GitHub for version control",
                      "Best practices and industry standards",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p>
                      Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With over 50 hours of content, this is the most comprehensive web development course available online.
                    </p>
                    <p>
                      This course will take you from beginner to advanced. You'll learn everything from the fundamentals of HTML, CSS, and JavaScript to advanced topics like React, Node.js, and database management.
                    </p>
                    <p>
                      By the end of this course, you'll be able to build ANY website you want and even work as a freelance or full-time developer. The course includes over 16 real-world projects that you can add to your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Curriculum Tab */}
            {activeTab === "curriculum" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {courseModules.map((module, i) => (
                    <AccordionItem key={i} value={`module-${i}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between flex-1 pr-4">
                          <span className="font-semibold">{module.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {module.lessons} lessons • {module.duration}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {module.lectures.map((lecture, j) => (
                            <div
                              key={j}
                              className="flex items-center justify-between py-2 px-3 hover:bg-secondary/50 rounded transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                {lecture.type === "video" && <PlayCircle className="h-4 w-4 text-muted-foreground" />}
                                {lecture.type === "file" && <FileText className="h-4 w-4 text-muted-foreground" />}
                                <span className="text-sm">{lecture.title}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">4.8</div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Course Rating</div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-sm w-8">{star}★</span>
                        <Progress value={star === 5 ? 85 : star === 4 ? 12 : 3} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">{star === 5 ? "85%" : star === 4 ? "12%" : "3%"}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review, i) => (
                    <Card key={i} className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{review.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar placeholder for desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>
      
      {/* Related Courses */}
      <div className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Students also bought</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
