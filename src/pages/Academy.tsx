import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award, BookOpen, Code, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";

const Academy = () => {
  const programs = [
    {
      category: "Soft Skills Training",
      icon: Users,
      description: "Essential interpersonal and professional skills for career success",
      courses: [
        { name: "Communication Excellence", duration: "4 weeks", level: "All Levels" },
        { name: "Leadership Development", duration: "6 weeks", level: "Intermediate" },
        { name: "Time Management & Productivity", duration: "3 weeks", level: "Beginner" },
        { name: "Team Collaboration", duration: "4 weeks", level: "All Levels" }
      ],
      color: "bg-blue-500"
    },
    {
      category: "Technical & Career Training",
      icon: Code,
      description: "Industry-relevant technical skills and career advancement strategies",
      courses: [
        { name: "Web Development Bootcamp", duration: "12 weeks", level: "Beginner to Advanced" },
        { name: "Data Analytics Fundamentals", duration: "8 weeks", level: "Beginner" },
        { name: "Digital Marketing Mastery", duration: "10 weeks", level: "Intermediate" },
        { name: "AI & Prompt Engineering", duration: "6 weeks", level: "Intermediate" }
      ],
      color: "bg-purple-500"
    },
    {
      category: "Corporate Training",
      icon: Briefcase,
      description: "Customized training solutions for organizations and teams",
      courses: [
        { name: "Executive Leadership Program", duration: "8 weeks", level: "Executive" },
        { name: "Team Building & Culture", duration: "2 weeks", level: "All Levels" },
        { name: "Digital Transformation Training", duration: "6 weeks", level: "Manager+" },
        { name: "Customer Service Excellence", duration: "4 weeks", level: "All Levels" }
      ],
      color: "bg-orange-500"
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
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Abhidh Academy
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Comprehensive training programs designed to enhance your professional skills and accelerate career growth through practical, industry-relevant education.
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
                  alt="Professional training and education at Abhidh Academy"
                  className="rounded-lg shadow-2xl"
                />
              </div>
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to meet diverse learning needs and career objectives
              </p>
            </div>
            
            <div className="space-y-12">
              {programs.map((program, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${program.color}`}>
                        <program.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{program.category}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {program.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {program.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="p-4 bg-background rounded-lg border">
                          <h4 className="font-semibold mb-2">{course.name}</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {course.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {course.level}
                            </Badge>
                          </div>
                          <Button size="sm" variant="outline" className="w-full">
                            Learn More
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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