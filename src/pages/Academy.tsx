import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award, BookOpen, Code, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";
import academyLogo from "@/assets/abhidh-academy-logo.png";

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
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {program.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="p-6 bg-background rounded-lg border hover:shadow-md transition-shadow">
                          <h4 className="font-semibold mb-2">{course.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
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
                    <div className="text-center">
                      <Button asChild variant="default">
                        <Link to={program.link}>
                          View All {program.category}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
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