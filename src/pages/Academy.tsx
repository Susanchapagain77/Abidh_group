import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award, BookOpen, Code, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";
import academyLogo from "@/assets/abhidh-academy-logo.png";
import { motion } from "framer-motion";

const Academy = () => {
  const programs = [
    {
      category: "School Training Programs",
      icon: Users,
      description: "Age-appropriate training for students to develop curiosity, creativity, and essential life skills",
      link: "/academy/school-training",
      courses: [
        { name: "How to Ask Questions", duration: "6 hours", level: "Grade 5-7", description: "Developing curiosity and communication skills through questioning techniques" },
        { name: "Creative Thinking & Innovation", duration: "8 hours", level: "Grade 6-8", description: "Foster creative thinking and problem-solving abilities" },
        { name: "Study Skills & Time Management", duration: "8 hours", level: "Grade 7-9", description: "Effective study habits and academic organization" },
        { name: "Presentation & Communication", duration: "6 hours", level: "Grade 8-10", description: "Build confidence in public speaking and presentation skills" }
      ],
      color: "bg-green-500"
    },
    {
      category: "College Training Programs", 
      icon: Code,
      description: "Comprehensive soft skills training designed for college students to enhance employability",
      link: "/academy/college-training",
      courses: [
        { name: "Communication Skills", duration: "10 hours", level: "All Levels", description: "Master verbal, nonverbal, and written communication techniques" },
        { name: "Team Work & Collaboration", duration: "8 hours", level: "All Levels", description: "Develop effective teamwork and collaborative problem-solving skills" },
        { name: "Presentation Skills", duration: "6 hours", level: "All Levels", description: "Build confidence in delivering impactful presentations" },
        { name: "Leadership Fundamentals", duration: "8 hours", level: "Intermediate", description: "Essential leadership skills for future career success" }
      ],
      color: "bg-blue-500"
    },
    {
      category: "Corporate Training Programs",
      icon: Briefcase,
      description: "Customized training solutions for organizations to enhance leadership and productivity",
      link: "/academy/corporate-training",
      courses: [
        { name: "Leadership Mastery", duration: "8 hours", level: "Manager+", description: "Comprehensive leadership development program" },
        { name: "Team Building & Culture", duration: "6 hours", level: "All Levels", description: "Foster strong teams and positive organizational culture" },
        { name: "Digital Transformation", duration: "6 hours", level: "Manager+", description: "Navigate digital change and innovation effectively" },
        { name: "Customer Service Excellence", duration: "4 hours", level: "All Levels", description: "Deliver exceptional customer experiences" }
      ],
      color: "bg-orange-500"
    },
    {
      category: "IT Training Programs",
      icon: BookOpen,
      description: "Cutting-edge IT courses to boost your digital skills and career prospects.",
      link: "/academy/it-training",
      courses: [
        { name: "Full Stack Web Development", duration: "12 weeks", level: "Beginner-Advanced", description: "Master HTML, CSS, JavaScript, React, Node.js, and databases." , featured: true },
        { name: "Python for Data Science", duration: "8 weeks", level: "All Levels", description: "Analyze data, build models, and visualize insights with Python." },
        { name: "Cloud Computing with AWS", duration: "6 weeks", level: "Intermediate", description: "Deploy, manage, and scale applications on AWS." , featured: true },
        { name: "Cybersecurity Essentials", duration: "6 weeks", level: "All Levels", description: "Protect systems and data with hands-on security training." },
        { name: "AI & Machine Learning", duration: "10 weeks", level: "Intermediate-Advanced", description: "Build and deploy intelligent systems using ML algorithms." , featured: true },
        { name: "DevOps & CI/CD", duration: "5 weeks", level: "Intermediate", description: "Automate, test, and deploy software efficiently with DevOps tools." }
      ],
      color: "bg-purple-600"
    },
    {
      category: "Digital Marketing Training Programs",
      icon: Award,
      description: "Master the latest digital marketing skills to grow your brand and career.",
      link: "/academy/digital-marketing-training",
      courses: [
        { name: "SEO Mastery", duration: "6 weeks", level: "All Levels", description: "Boost website rankings and organic traffic with advanced SEO techniques.", featured: true },
        { name: "Social Media Marketing", duration: "5 weeks", level: "Beginner-Intermediate", description: "Grow your audience and engagement on all major social platforms." },
        { name: "Google Ads & PPC", duration: "4 weeks", level: "Intermediate", description: "Create, manage, and optimize paid ad campaigns for maximum ROI.", featured: true },
        { name: "Content Marketing", duration: "6 weeks", level: "All Levels", description: "Develop compelling content strategies that drive results." },
        { name: "Email Marketing Automation", duration: "3 weeks", level: "All Levels", description: "Automate and personalize email campaigns for higher conversions." },
        { name: "Analytics & Conversion Optimization", duration: "4 weeks", level: "Intermediate-Advanced", description: "Analyze data and optimize funnels to maximize conversions.", featured: true }
      ],
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={academyLogo} 
                    alt="Abhidh Academy Logo"
                    className="h-16 w-16 object-contain"
                  />
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Abhidh Academy
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  Professional training and skill development in Nepal. We bridge the gap between education and employability through comprehensive programs for students, professionals, and corporates in soft skills, leadership, communication, digital marketing, AI, IT, Excel, accounting, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contact" className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Enroll Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link to="/contact">Free Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={academyImage} 
                  alt="Professional training and education at Abhidh Academy in Nepal"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Featured Courses Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 animate-gradient-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Featured Courses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular and impactful courses, handpicked for your success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.flatMap((program) =>
                program.courses
                  .filter((course) => course.featured)
                  .map((course, idx) => {
                    const slug = `${program.link}/${course.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
                    return (
                      <Link to={slug} key={slug} className="block group">
                        <motion.div
                          className="relative p-8 bg-white/90 rounded-2xl border-0 shadow-2xl hover:shadow-3xl hover:scale-[1.03] transition-all duration-300 flex flex-col gap-3 cursor-pointer ring-2 ring-primary/80 ring-offset-2 ring-offset-white bg-gradient-to-br from-white via-purple-50 to-blue-50"
                          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px 0 rgba(80,0,200,0.10)" }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-10">
                            Featured
                          </span>
                          <h4 className="font-bold text-xl mb-1 text-primary group-hover:underline underline-offset-4 transition-all duration-200">
                            {course.name}
                          </h4>
                          <p className="text-base text-muted-foreground mb-2 min-h-[48px]">{course.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full">
                              {course.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                              {course.level}
                            </Badge>
                          </div>
                          <Button size="sm" variant="secondary" className="w-full font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-200" tabIndex={-1}>
                            Learn More
                          </Button>
                        </motion.div>
                      </Link>
                    );
                  })
              )}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Choose Abhidh Academy?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our academy combines theoretical knowledge with hands-on practice, ensuring you develop skills that are immediately applicable in real-world scenarios.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Award,
                  title: "Industry-Recognized Certification",
                  description: "Earn certificates that are valued by top employers and industry professionals."
                },
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description: "Learn from experienced professionals with real-world industry experience."
                },
                {
                  icon: Clock,
                  title: "Flexible Learning",
                  description: "Choose from various schedules and formats to fit your lifestyle and commitments."
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Categories */}

        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 animate-gradient-text bg-gradient-to-r from-blue-500 via-green-400 to-orange-400 bg-clip-text text-transparent">
                Our Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to meet diverse learning needs and career objectives
              </p>
            </div>
            <div className="space-y-16">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-2xl group bg-white/90 hover:scale-[1.02] transition-transform duration-300">
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl z-0"
                      style={{ background: `radial-gradient(circle, ${program.color.replace('bg-', '')}, transparent 70%)` }}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`p-3 rounded-lg shadow-lg ${program.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <program.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {program.category}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {program.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {program.courses.map((course, courseIndex) => {
                          // Generate a slug for the course info page
                          const slug = `${program.link}/${course.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
                          const isFeatured = course.featured;
                          return (
                            <Link to={slug} key={courseIndex} className="block group">
                              <motion.div
                                className={`relative p-6 bg-white/80 rounded-xl border border-muted shadow-md hover:shadow-xl hover:bg-white/100 transition-all duration-300 flex flex-col gap-2 group cursor-pointer ${isFeatured ? 'ring-2 ring-primary/80 ring-offset-2 ring-offset-white scale-[1.03] bg-gradient-to-br from-purple-50 to-white' : ''}`}
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                {isFeatured && (
                                  <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-10">
                                    Featured
                                  </span>
                                )}
                                <h4 className="font-semibold text-lg mb-1 text-primary group-hover:underline underline-offset-4 transition-all duration-200">{course.name}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full">
                                    {course.duration}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                                    {course.level}
                                  </Badge>
                                </div>
                                <Button size="sm" variant={isFeatured ? "secondary" : "outline"} className={`w-full group-hover:bg-primary group-hover:text-white transition-colors duration-200 ${isFeatured ? 'font-bold shadow-lg' : ''}`} tabIndex={-1}>
                                  Learn More
                                </Button>
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="text-center">
                        <Button asChild variant="default" className="shadow-lg group-hover:scale-105 transition-transform duration-200">
                          <Link to={program.link}>
                            View All {program.category}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-primary">
          <div className="container text-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Start Your Learning Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of professionals who have transformed their careers through our comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;