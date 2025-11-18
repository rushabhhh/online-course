import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  BookOpen,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Sparkles,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CourseData {
  title: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  thumbnail: string;
}

const categories = [
  { name: "Development", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "Design", icon: "🎨", color: "from-pink-500 to-rose-500" },
  { name: "Marketing", icon: "📈", color: "from-green-500 to-emerald-500" },
  { name: "Business", icon: "💼", color: "from-purple-500 to-indigo-500" },
  { name: "Photography", icon: "📷", color: "from-yellow-500 to-orange-500" },
  { name: "Music", icon: "🎵", color: "from-red-500 to-pink-500" },
];

const Instructor = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState<CourseData>({
    title: "",
    description: "",
    category: "",
    price: "",
    duration: "",
    thumbnail: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const totalSteps = 2;

  const updateCourseData = (field: keyof CourseData, value: any) => {
    setCourseData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleThumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateCourseData("thumbnail", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);
    
    // Validation
    if (!courseData.title || !courseData.description || !courseData.category || !courseData.price) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    
    try {
      console.log("Sending course data:", {
        title: courseData.title,
        description: courseData.description,
        category: courseData.category,
        price: parseFloat(courseData.price),
        duration: courseData.duration,
      });

      const res = await axios.post("http://localhost:5000/api/courses", {
        title: courseData.title,
        description: courseData.description,
        category: courseData.category,
        price: parseFloat(courseData.price),
        duration: courseData.duration,
        thumbnail: courseData.thumbnail,
      });

      console.log("Response:", res.data);

      if (res.status === 201) {
        setSuccess(true);
        // Optional: Reset form after 2 seconds
        setTimeout(() => {
          setCourseData({ 
            title: "", 
            description: "", 
            category: "", 
            price: "", 
            duration: "", 
            thumbnail: "" 
          });
          setCurrentStep(1);
        }, 2000);
      }
    } catch (err: any) {
      console.error("Error details:", err);
      console.error("Error response:", err?.response);
      
      const errorMessage = err?.response?.data?.message 
        || err?.message 
        || "Failed to save course. Please check if the server is running.";
      
      setError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1.5">
              <Sparkles className="w-4 h-4 mr-2" />
              Instructor Dashboard
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Amazing Course
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your knowledge with millions of students worldwide and build
              your teaching empire
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-24 relative">
              {/* Progress line */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-secondary -translate-y-1/2 -z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {[
                { number: 1, title: "Course Info", icon: BookOpen },
                { number: 2, title: "Pricing", icon: DollarSign },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                      currentStep >= step.number
                        ? "bg-gradient-to-br from-primary to-accent border-transparent text-white"
                        : "bg-card border-border"
                    }`}
                    animate={
                      currentStep === step.number
                        ? { scale: [1, 1.1, 1] }
                        : {}
                    }
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle2 className="w-7 h-7" />
                    ) : (
                      <step.icon className="w-7 h-7" />
                    )}
                  </motion.div>
                  <span
                    className={`text-base font-semibold ${
                      currentStep >= step.number
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50"
              >
                {/* Step 1: Course Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        Course Information
                      </h3>
                      <p className="text-muted-foreground">
                        Tell us about your course
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="title" className="text-base font-semibold">
                          Course Title *
                        </Label>
                        <Input
                          id="title"
                          placeholder="e.g., Complete Web Development Bootcamp"
                          value={courseData.title}
                          onChange={(e) => updateCourseData("title", e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description" className="text-base font-semibold">
                          Course Description *
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what students will learn in this course..."
                          value={courseData.description}
                          onChange={(e) =>
                            updateCourseData("description", e.target.value)
                          }
                          className="mt-2 min-h-32"
                        />
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Category *
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {categories.map((cat) => (
                            <motion.button
                              key={cat.name}
                              type="button"
                              onClick={() => updateCourseData("category", cat.name)}
                              className={`p-4 rounded-xl border-2 transition-all ${
                                courseData.category === cat.name
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-3xl mb-2">{cat.icon}</div>
                              <div className="font-semibold">{cat.name}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Thumbnail */}
                      <div>
                        <Label htmlFor="thumbnail" className="text-base font-semibold">
                          Course Thumbnail
                        </Label>
                        <label
                          htmlFor="thumbnail"
                          className="mt-2 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer block"
                        >
                          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="font-semibold mb-1">
                            {courseData.thumbnail ? "Change Image" : "Click to upload or drag and drop"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            PNG / JPG up to 10MB
                          </p>
                          {courseData.thumbnail && (
                            <img
                              src={courseData.thumbnail}
                              alt="thumbnail preview"
                              className="mt-4 mx-auto h-32 w-32 object-cover rounded-lg shadow"
                            />
                          )}
                          <Input
                            id="thumbnail"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleThumbnailSelect}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Pricing */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-primary" />
                        Pricing & Publication
                      </h3>
                      <p className="text-muted-foreground">
                        Set your course price and publish
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price" className="text-base font-semibold">
                            Course Price (USD) *
                          </Label>
                          <Input
                            id="price"
                            type="number"
                            placeholder="49.99"
                            value={courseData.price}
                            onChange={(e) => updateCourseData("price", e.target.value)}
                            className="mt-2 h-12"
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration" className="text-base font-semibold">
                            Total Duration
                          </Label>
                          <Input
                            id="duration"
                            placeholder="e.g., 52 hours"
                            value={courseData.duration}
                            onChange={(e) =>
                              updateCourseData("duration", e.target.value)
                            }
                            className="mt-2 h-12"
                          />
                        </div>
                      </div>

                      {/* Course Preview */}
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Course Preview
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Title:</span>
                            <span className="font-semibold text-right">
                              {courseData.title || "Not set"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category:</span>
                            <span className="font-semibold">
                              {courseData.category || "Not set"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-semibold">
                              {courseData.duration || "Not set"}
                            </span>
                          </div>
                          <div className="h-px bg-border my-3" />
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-bold text-primary text-2xl">
                              ${courseData.price || "0.00"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {error && (
                        <div className="text-red-600 font-medium bg-red-100/40 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-md p-3 text-sm">
                          {error}
                        </div>
                      )}
                      {success && (
                        <div className="text-green-600 font-medium bg-green-100/40 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-md p-3 text-sm">
                          Course published successfully.
                        </div>
                      )}

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="lg"
                          onClick={handleSubmit}
                          disabled={saving}
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg font-bold py-6 disabled:opacity-60"
                        >
                          {saving ? "Publishing..." : (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-2" />
                              Publish Course
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    size="lg"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  {currentStep < totalSteps && (
                    <Button onClick={nextStep} size="lg">
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Instructor;