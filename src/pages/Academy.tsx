import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Code, ArrowRight } from "lucide-react"; // Removed unused imports
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";
import abhidhGroupLogo from "@/assets/Abhidh Group Logo.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Academy = () => {
  const programs = [
    {
      category: "Soft Skills Training",
      icon: Users,
      description: "Empower students, professionals, and organizations with essential soft skills for success.",
      link: "/academy/soft-skills-training",
      courses: [
        { name: "School Trainings", duration: "Varies", level: "Grade 5-10", description: "Age-appropriate training programs for schools." },
        { name: "College Trainings", duration: "Varies", level: "All Levels", description: "Comprehensive soft skills training for college students." },
        { name: "Corporate Trainings", duration: "Varies", level: "Professional", description: "Customized workshops for organizations to enhance productivity." }
      ],
      color: "bg-green-500"
    },
    {
      category: "Technical Trainings",
      icon: Code,
      description: "Stay ahead with cutting-edge technical skills in digital marketing, AI, and web development.",
      link: "/academy/technical-training",
      courses: [
        { name: "Digital Marketing", duration: "6 weeks", level: "Beginner-Advanced", description: "Master SEO, social media, and paid advertising." },
        { name: "Artificial Intelligence", duration: "8 weeks", level: "Intermediate", description: "Learn AI tools, machine learning, and real-world applications." },
        { name: "Web Development", duration: "12 weeks", level: "Beginner-Advanced", description: "Learn HTML, CSS, JavaScript, and frameworks to build responsive websites." }
      ],
      color: "bg-blue-500"
    },
    {
      category: "Accounting & Taxation",
      icon: BookOpen,
      description: "Comprehensive training in accounting, taxation, and Excel for aspiring finance professionals.",
      link: "/academy/accounting-training",
      courses: [
        { name: "Basic Accounting", duration: "4 weeks", level: "Beginner", description: "Learn the fundamentals of accounting." },
        { name: "Accounting for Accountants", duration: "6 weeks", level: "Intermediate", description: "Advanced accounting principles for professionals." },
        { name: "Taxation", duration: "4 weeks", level: "All Levels", description: "Understand taxation principles and practices." },
        { name: "Master in MS Excel", duration: "6 weeks", level: "All Levels", description: "Gain complete mastery in Excel for data management." }
      ],
      color: "bg-orange-500"
    }
  ];

  const selfPacedCourses = [
    {
      id: "time-management",
      name: "Time Management & Productivity",
      description: "Learn proven strategies and techniques to organize your time, set priorities, and achieve more with less stress — all at your own pace.",
      duration: "6 Hours",
      price: "$50"
    },
    {
      id: "confidence-building",
      name: "Confidence Building & Public Speaking Basics",
      description: "Boost your self-confidence and master the basics of public speaking through practical video lessons and self-practice exercises.",
      duration: "4 Hours",
      price: "$40"
    },
    {
      id: "seo-basics",
      name: "SEO Basics for Beginners",
      description: "Understand how search engines work and learn the fundamentals of SEO to improve website visibility and ranking step by step.",
      duration: "6 Hours",
      price: "$45"
    },
    {
      id: "excel-beginners",
      name: "Excel for Beginners",
      description: "Start with the basics of Microsoft Excel — formulas, formatting, charts, and simple data management to build a strong foundation.",
      duration: "8 Hours",
      price: "$55"
    },
    {
      id: "creative-thinking",
      name: "Creative and Critical Thinking",
      description: "Sharpen your ability to think outside the box, solve problems creatively, and make better decisions with structured critical thinking exercises.",
      duration: "6 Hours",
      price: "$50"
    },
    {
      id: "accounting-basics",
      name: "Basic Accounting Made Easy",
      description: "Simplify the principles of accounting with easy-to-follow lessons, real-life examples, and practical exercises for beginners.",
      duration: "8 Hours",
      price: "$60"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Abhidh Academy | Professional Training & Skill Development in Nepal</title>
        <meta name="description" content="Abhidh Academy offers training for students, professionals, and corporates in soft skills, leadership, communication, digital marketing, AI, IT, Excel, accounting, and more. Bridge the gap between education and employability." />
        <meta name="keywords" content="Abhidh Academy, training Nepal, soft skills training, digital marketing course Nepal, AI training Nepal, professional development, corporate training, skill development Nepal" />
        <meta property="og:title" content="Abhidh Academy | Professional Training & Skill Development in Nepal" />
        <meta property="og:description" content="Abhidh Academy offers training for students, professionals, and corporates in soft skills, leadership, communication, digital marketing, AI, IT, Excel, accounting, and more. Bridge the gap between education and employability." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhidh Academy | Professional Training & Skill Development in Nepal" />
        <meta name="twitter:description" content="Abhidh Academy offers training for students, professionals, and corporates in soft skills, leadership, communication, digital marketing, AI, IT, Excel, accounting, and more. Bridge the gap between education and employability." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1A1F71' }}>
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={abhidhGroupLogo} 
                    alt="Abhidh Group Logo"
                    className="h-16 w-16 object-contain"
                  />
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Abhidh Academy
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  “Learn. Grow. Succeed.” Abhidh Academy is dedicated to empowering individuals and organizations with high-quality training to unlock their full potential and achieve success.
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

        {/* Mission, Vision, and Key Features */}
        <section className="py-24 bg-gray-100">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">Why Choose Abhidh Academy?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
At <b>Abhidh Academy</b>, we believe education should go beyond classrooms and textbooks – it
should prepare individuals for the real challenges of life and work. That is why we design
training programs that are engaging, practical, and focused on application.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 mt-8" style={{ boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
              <div className="grid md:grid-cols-3 gap-8">
                {["Comprehensive Training Programs – Covering both soft skills and technical courses.",
                  "Expert Trainers – Highly experienced professionals and industry experts.",
                  "Customized Training Solutions – Tailored workshops for schools, colleges, and organizations.",
                  "Self-Paced Learning – Flexible online modules with resources for independent learning.",
                  "Blended Learning Approach – A mix of interactive sessions, practical exercises, and real-world case studies.",
                  "Global Outlook with Local Relevance – Programs designed to meet international standards while addressing local challenges."
                ].map((feature, index) => (
                  <Card 
                    key={index} 
                    className="bg-white shadow-md border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group hover:bg-opacity-90"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3B4A9C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <CardContent className="p-6">
                      <p className="text-muted-foreground group-hover:text-white transition-colors duration-300">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Categories */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#1A1F71' }}>
                Our Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to meet diverse learning needs and career objectives.
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
                        {program.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="block group">
                            <motion.div
                              className="relative p-6 bg-white/80 rounded-xl border border-muted shadow-md hover:shadow-xl hover:bg-white/100 transition-all duration-300 flex flex-col gap-2 group cursor-pointer"
                              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
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
                            </motion.div>
                          </div>
                        ))}
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

        {/* Self-Paced Learning Section */}
        <section className="py-24" style={{ backgroundColor: '#F5F5DC' }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#1A1F71' }}>
                Self-Paced Learning
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our flexible online modules designed for independent learning. Learn at your own pace and convenience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {selfPacedCourses.map((course, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-white/90 rounded-xl border border-muted shadow-md hover:shadow-xl hover:bg-white/100 transition-all duration-300 flex flex-col gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-lg mb-1 text-primary group-hover:underline underline-offset-4 transition-all duration-200">
                    {course.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full">
                      {course.duration}
                    </Badge>
                    <span className="font-bold text-primary">{course.price}</span>
                  </div>
                  <Button asChild size="sm" variant="default" className="w-full mt-auto">
                    <Link to={`/academy/self-paced/${course.id}`}>
                      Enroll Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;