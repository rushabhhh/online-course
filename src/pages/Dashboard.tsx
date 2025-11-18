import { User, Settings, LogOut, Award, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import webDevCourse from "@/assets/course-web-dev.jpg";
import designCourse from "@/assets/course-design.jpg";
import dataScienceCourse from "@/assets/course-data-science.jpg";
import React, { useState } from "react";

const enrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    image: webDevCourse,
    progress: 65,
    lastAccessed: "2 hours ago",
    totalLessons: 345,
    completedLessons: 224,
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    instructor: "Daniel Scott",
    image: designCourse,
    progress: 42,
    lastAccessed: "Yesterday",
    totalLessons: 156,
    completedLessons: 65,
  },
  {
    id: "3",
    title: "Data Science & Machine Learning",
    instructor: "Jose Portilla",
    image: dataScienceCourse,
    progress: 23,
    lastAccessed: "3 days ago",
    totalLessons: 289,
    completedLessons: 67,
  },
];

const stats = [
  { label: "Courses Enrolled", value: "3", icon: TrendingUp },
  { label: "Hours Learned", value: "127", icon: Clock },
  { label: "Certificates", value: "1", icon: Award },
];

// New sample certificates (replace or extend with real data)
const certificates = [
  {
    id: "cert-1",
    title: "Full Stack Web Development",
    course: "Complete Web Development Bootcamp 2024",
    date: "Sep 10, 2024",
    issuer: "Online Course Platform",
    grade: "Distinction",
  },
  // add more certificate objects here
];

const Dashboard = () => {
  const [activeLearningSection, setActiveLearningSection] = useState<"courses" | "certifications">(
    "courses"
  );

  const downloadCertificate = (cert: typeof certificates[number]) => {
    // simple placeholder download (replace with real PDF generation)
    const content = `${cert.title}\nCourse: ${cert.course}\nIssued: ${cert.date}\nIssuer: ${cert.issuer}\nGrade: ${cert.grade}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cert.id}.txt`; // change to .pdf when real cert available
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold mb-4">
                  JD
                </div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
              
              <nav className="space-y-2">
                <Button
                  variant={activeLearningSection === "courses" ? "default" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveLearningSection("courses")}
                >
                  <User className="h-4 w-4" />
                  My Courses
                </Button>

                <Button
                  variant={activeLearningSection === "certifications" ? "default" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveLearningSection("certifications")}
                >
                  <Award className="h-4 w-4" />
                  Certifications
                </Button>

                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </Card>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* My Learning: Courses or Certifications */}
            {activeLearningSection === "courses" && (
              <>
                {/* Enrolled Courses */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden hover:card-shadow-hover transition-smooth">
                        <div className="grid md:grid-cols-4 gap-4 p-6">
                          <div className="aspect-video md:aspect-square rounded-lg overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="md:col-span-3 flex flex-col justify-between">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                              
                              <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Progress</span>
                                  <span className="font-medium">{course.progress}% Complete</span>
                                </div>
                                <Progress value={course.progress} />
                                <p className="text-xs text-muted-foreground">
                                  {course.completedLessons} of {course.totalLessons} lessons completed
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Last accessed {course.lastAccessed}
                              </span>
                              <Button>Continue Learning</Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeLearningSection === "certifications" && (
              <>
                {/* Certifications UI */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Certifications</h2>

                  {certificates.length === 0 ? (
                    <Card className="p-12 text-center">
                      <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No certificates yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Complete courses to earn certifications
                      </p>
                      <Button variant="outline" onClick={() => setActiveLearningSection("courses")}>
                        Browse Courses
                      </Button>
                    </Card>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      {certificates.map((cert) => (
                        <Card key={cert.id} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <Award className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{cert.title}</h3>
                              <p className="text-sm text-muted-foreground">{cert.course}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Issued {cert.date} • {cert.issuer} • {cert.grade}
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button size="sm" onClick={() => alert("Viewing certificate (placeholder)")}>
                                View
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => downloadCertificate(cert)}>
                                Download
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
