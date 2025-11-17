import { Search, ArrowRight, Star, Users, Clock, TrendingUp, Award, BookOpen, Lightbulb, Zap, Target, Coffee, Headphones, Code, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import webDevCourse from "@/assets/course-web-dev.jpg";
import designCourse from "@/assets/course-design.jpg";
import dataScienceCourse from "@/assets/course-data-science.jpg";
import marketingCourse from "@/assets/course-marketing.jpg";
import { useNavigate } from "react-router-dom";

const categories = [
    { 
        name: "Design", 
        icon: "🎨", 
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
        hoverColor: "hover:bg-pink-100 dark:hover:bg-pink-950/40",
        courses: 1250
    },
    { 
        name: "Development", 
        icon: "💻", 
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50 dark:bg-blue-950/20",
        hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-950/40",
        courses: 2340
    },
    { 
        name: "Marketing", 
        icon: "📈", 
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50 dark:bg-green-950/20",
        hoverColor: "hover:bg-green-100 dark:hover:bg-green-950/40",
        courses: 890
    },
    { 
        name: "Business", 
        icon: "💼", 
        color: "from-purple-500 to-indigo-500",
        bgColor: "bg-purple-50 dark:bg-purple-950/20",
        hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-950/40",
        courses: 1520
    },
    { 
        name: "Photography", 
        icon: "📷", 
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
        hoverColor: "hover:bg-yellow-100 dark:hover:bg-yellow-950/40",
        courses: 670
    },
    { 
        name: "Music", 
        icon: "🎵", 
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50 dark:bg-red-950/20",
        hoverColor: "hover:bg-red-100 dark:hover:bg-red-950/40",
        courses: 450
    },
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

const stats = [
    { icon: Users, label: "Active Students", value: "2M+" },
    { icon: BookOpen, label: "Quality Courses", value: "10K+" },
    { icon: Award, label: "Expert Instructors", value: "5K+" },
    { icon: Star, label: "Success Rate", value: "98%" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                        animate={{
                            x: [0, -50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Floating Icons Spread Across Hero */}
                    {/* Left side icons */}
                    <motion.div
                        className="absolute top-20 left-10 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Lightbulb className="w-6 h-6 text-yellow-500" />
                    </motion.div>

                    <motion.div
                        className="absolute top-1/3 left-20 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -15, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    >
                        <Code className="w-5 h-5 text-white" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-32 left-16 w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -18, 0],
                            rotate: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    >
                        <Coffee className="w-7 h-7 text-orange-500" />
                    </motion.div>

                    {/* Top center icons */}
                    <motion.div
                        className="absolute top-16 left-1/4 w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center"
                        animate={{
                            scale: [1, 1.15, 1],
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                    >
                        <Target className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.div
                        className="absolute top-24 right-1/3 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -16, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3,
                        }}
                    >
                        <BookOpen className="w-6 h-6 text-blue-500" />
                    </motion.div>

                    {/* Right side icons */}
                    <motion.div
                        className="absolute top-28 right-20 w-13 h-13 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -14, 0],
                            rotate: [0, 12, 0],
                        }}
                        transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6,
                        }}
                    >
                        <Palette className="w-7 h-7 text-white" />
                    </motion.div>

                    <motion.div
                        className="absolute top-1/2 right-16 w-11 h-11 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 3.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                        }}
                    >
                        <Headphones className="w-6 h-6 text-purple-500" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-1/3 right-24 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4,
                        }}
                    >
                        <Zap className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Bottom center icons */}
                    <motion.div
                        className="absolute bottom-20 left-1/3 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center"
                        animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.9,
                        }}
                    >
                        <Star className="w-5 h-5 text-white fill-white" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-24 right-1/3 w-11 h-11 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -15, 0],
                            x: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.7,
                        }}
                    >
                        <Globe className="w-6 h-6 text-blue-600" />
                    </motion.div>

                    {/* Additional scattered icons */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Award className="w-5 h-5 text-white" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-1/4 left-1/4 w-8 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded shadow-lg"
                        animate={{
                            y: [0, -12, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 3.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                        }}
                    >
                        <div className="p-1.5 space-y-1">
                            <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded" />
                            <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                            <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                        </div>
                    </motion.div>

                    {/* Small avatar icons scattered */}
                    <motion.div
                        className="absolute top-40 left-1/3 w-9 h-9 rounded-full shadow-lg overflow-hidden border-2 border-white"
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4,
                        }}
                    >
                        <img 
                            src="https://i.pravatar.cc/150?img=3" 
                            alt="Student"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-40 right-1/4 w-9 h-9 rounded-full shadow-lg overflow-hidden border-2 border-white"
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 3.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.1,
                        }}
                    >
                        <img 
                            src="https://i.pravatar.cc/150?img=8" 
                            alt="Instructor"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    #1 Online Learning Platform
                                </Badge>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Learn without
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                    limits
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground">
                                Start, switch, or advance your career with thousands of courses
                                from industry experts.
                            </p>

                            <motion.div
                                className="relative max-w-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="What do you want to learn today?"
                                    className="pl-12 pr-4 h-14 text-base bg-card shadow-lg border-0 focus-visible:ring-2 focus-visible:ring-primary/50"
                                />
                                <Button
                                    size="sm"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex"
                                >
                                    Search
                                </Button>
                            </motion.div>

                            <motion.div
                                className="flex gap-4 pt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button size="lg" className="group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Browse Courses
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="hidden md:block relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full aspect-square">
                                {/* Main illustration container with background image */}
                                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                                    {/* Background Image */}
                                    <img 
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&q=80" 
                                        alt="Students learning online"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-500/30 to-accent/40" />
                                </div>

                                {/* Decorative shadow */}
                                <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-sm" />
                            </div>

                            {/* Floating stats cards */}
                            <motion.div
                                className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border z-30"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">2M+</p>
                                        <p className="text-xs text-muted-foreground">
                                            Students
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border z-30"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, type: "spring" }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <Star className="w-5 h-5 text-accent fill-accent" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">4.9</p>
                                        <p className="text-xs text-muted-foreground">
                                            Rating
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-card border-y">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </motion.div>
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-4 bg-primary/10 text-primary">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Explore Categories
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Top Categories
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover your passion and unlock your potential with our diverse range of expert-led courses
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className={`relative group cursor-pointer ${category.bgColor} ${category.hoverColor} rounded-2xl p-6 transition-all duration-300 border border-border/50 hover:border-transparent overflow-hidden`}>
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                    
                                    {/* Animated sparkle effect */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500"
                                        animate={{
                                            scale: [0, 1, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />
                                    
                                    <div className="relative z-10 flex items-start gap-4">
                                        <motion.div
                                            className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span className="text-3xl">{category.icon}</span>
                                        </motion.div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                {category.courses.toLocaleString()} courses available
                                            </p>
                                            
                                            {/* Progress bar */}
                                            <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${category.color}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${Math.min((category.courses / 2340) * 100, 100)}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                        
                                        <motion.div
                                            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                            whileHover={{ x: 4 }}
                                        >
                                            <ArrowRight className="w-5 h-5 text-primary" />
                                        </motion.div>
                                    </div>
                                    
                                    {/* Decorative corner element */}
                                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
                                        <div className={`w-full h-full bg-gradient-to-tl ${category.color} rounded-tl-full`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="outline" size="lg" className="group">
                            Explore All Categories
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Trending Courses Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
                        animate={{
                            x: [0, -80, 0],
                            y: [0, -60, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1.5">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Hot Picks This Week 🔥
                            </Badge>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                                Trending Courses
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Join thousands of students learning these top-rated courses right now
                        </p>

                        {/* Stats row */}
                        <div className="flex justify-center gap-8 flex-wrap">
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl font-bold">500K+</p>
                                    <p className="text-xs text-muted-foreground">Enrolled</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                                    <Star className="w-5 h-5 text-white fill-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl font-bold">4.8</p>
                                    <p className="text-xs text-muted-foreground">Avg Rating</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {trendingCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                variants={itemVariants}
                                whileHover={{ y: -12 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="group relative">
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                                    
                                    <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 group-hover:border-transparent">
                                        {/* Image container with overlay */}
                                        <div className="relative h-48 overflow-hidden">
                                            <motion.img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                            />
                                            
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Category badge */}
                                            <motion.div
                                                className="absolute top-3 left-3"
                                                initial={{ x: -20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Badge className="bg-white/90 backdrop-blur-sm text-black hover:bg-white">
                                                    {course.category}
                                                </Badge>
                                            </motion.div>

                                            {/* Bestseller badge */}
                                            <motion.div
                                                className="absolute top-3 right-3"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Zap className="w-3 h-3" />
                                                    Bestseller
                                                </div>
                                            </motion.div>

                                            {/* Play button overlay */}
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                                                    <div className="w-0 h-0 border-l-8 border-l-primary border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 space-y-4">
                                            {/* Title */}
                                            <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                                                {course.title}
                                            </h3>

                                            {/* Instructor */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                                                    {course.instructor.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {course.instructor}
                                                </p>
                                            </div>

                                            {/* Rating and students */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${
                                                                    i < Math.floor(course.rating)
                                                                        ? "text-yellow-400 fill-yellow-400"
                                                                        : "text-gray-300"
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm font-semibold ml-1">
                                                        {course.rating}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        ({course.reviews.toLocaleString()})
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Meta info */}
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {course.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-3.5 h-3.5" />
                                                    {(course.students / 1000).toFixed(0)}K
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                                            {/* Price and CTA */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-2xl font-bold text-primary">
                                                        ${course.price}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        ${course.originalPrice}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Button size="sm" className="group/btn">
                                                        Enroll
                                                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Button>
                                                </motion.div>
                                            </div>

                                            {/* Discount badge */}
                                            <motion.div
                                                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <Award className="w-3 h-3" />
                                                {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                                            </motion.div>
                                        </div>

                                        {/* Hover border effect */}
                                        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button with crazy animation */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-0 px-8 py-6 text-lg font-bold overflow-hidden"
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                                    animate={{
                                        x: ["0%", "100%", "0%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore All Trending Courses
                                    <motion.div
                                        animate={{
                                            x: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </span>

                                {/* Sparkle effects */}
                                <motion.div
                                    className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full"
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0,
                                    }}
                                />
                                <motion.div
                                    className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full"
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.5,
                                    }}
                                />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 hero-gradient text-white relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                            Join Our Community
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Become an instructor
                        </h2>
                        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                            Share your knowledge with millions of students worldwide and earn
                            money doing what you love
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                                size="lg" 
                                variant="secondary" 
                                className="group"
                                onClick={() => navigate('/instructor')}
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
