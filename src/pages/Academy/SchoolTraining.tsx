import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Users, GraduationCap, BookOpen, ArrowRight, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const SchoolTraining = () => {
  const [selectedProgram, setSelectedProgram] = useState("questions");

  const programs = {
    questions: {
      title: "How to Ask Questions - Developing Curiosity and Communication Skills",
      duration: "6 Hours",
      targetAudience: "Grade 5, 6, and 7",
      description: "The 'Exploring Questions' training is a dynamic and engaging program designed for students aimed at cultivating essential questioning skills, critical thinking abilities, and effective communication. The training spans six interactive sessions, each thoughtfully crafted to cater to the age-appropriate learning level and cognitive development of the participants.",
      sessions: [
        {
          number: 1,
          title: "Introduction to Asking Questions",
          content: "Understanding the importance of curiosity and asking questions in learning. Differentiating between simple and complex questions. Exploring how questions help in understanding the world around us.",
          outcomes: [
            "Students will understand the significance of asking questions and how it contributes to their learning",
            "They will be able to differentiate between simple and complex questions",
            "Setting the foundation for more thoughtful inquiry"
          ],
          hours: 1
        },
        {
          number: 2,
          title: "The 5 Ws and 1 H",
          content: "Introducing the concept of 5 Ws (Who, What, When, Where, Why) and 1 H (How) as a guide for asking questions. Practice using the 5 Ws and 1 H to inquire about familiar situations.",
          outcomes: [
            "Students will be proficient in using the 5 Ws and 1 H to ask comprehensive questions",
            "They will practice applying this framework to inquire about familiar scenarios",
            "Developing their critical thinking abilities"
          ],
          hours: 1
        },
        {
          number: 3,
          title: "3 Levels of Questions",
          content: "Understanding the three levels of questions: factual, inferential, and evaluative. Learning to ask different types of questions based on the level of complexity.",
          outcomes: [
            "Students will comprehend the three levels of questions: factual, inferential, and evaluative",
            "They will learn to formulate questions at different complexity levels",
            "Enhancing their analytical thinking skills"
          ],
          hours: 1
        },
        {
          number: 4,
          title: "Questioning in Different Subjects",
          content: "Applying questioning techniques in various academic subjects. Understanding how questions can enhance learning in math, science, social studies, and language arts.",
          outcomes: [
            "Students will apply questioning techniques across different academic subjects",
            "They will understand how questions enhance learning in various disciplines",
            "Developing subject-specific inquiry skills"
          ],
          hours: 1
        },
        {
          number: 5,
          title: "Active Listening and Follow-up Questions",
          content: "Developing active listening skills to better understand responses. Learning to ask meaningful follow-up questions to deepen understanding.",
          outcomes: [
            "Students will develop strong active listening skills",
            "They will learn to ask meaningful follow-up questions",
            "Enhancing their communication and comprehension abilities"
          ],
          hours: 1
        },
        {
          number: 6,
          title: "Questioning for Problem-Solving",
          content: "Using questions as tools for problem-solving and decision-making. Practicing questioning techniques in real-life scenarios and group discussions.",
          outcomes: [
            "Students will use questions as effective problem-solving tools",
            "They will practice questioning in real-life scenarios",
            "Developing collaborative inquiry skills"
          ],
          hours: 1
        }
      ]
    },
    creativity: {
      title: "Creative Thinking and Innovation",
      duration: "8 Hours",
      targetAudience: "Grade 6, 7, and 8",
      description: "A comprehensive program designed to foster creative thinking, innovation, and problem-solving skills among students through interactive activities and real-world applications.",
      sessions: [
        {
          number: 1,
          title: "Introduction to Creative Thinking",
          content: "Understanding creativity and its importance in learning and life. Exploring different types of creativity and creative processes.",
          outcomes: [
            "Understand the concept and importance of creativity",
            "Identify different types of creative thinking",
            "Recognize creativity in everyday situations"
          ],
          hours: 1.5
        },
        {
          number: 2,
          title: "Breaking Mental Barriers",
          content: "Identifying and overcoming mental blocks to creativity. Learning techniques to think outside the box.",
          outcomes: [
            "Identify common mental barriers to creativity",
            "Learn techniques to overcome creative blocks",
            "Practice thinking beyond conventional boundaries"
          ],
          hours: 1.5
        },
        {
          number: 3,
          title: "Creative Problem-Solving Techniques",
          content: "Learning various creative problem-solving methods including brainstorming, mind mapping, and lateral thinking.",
          outcomes: [
            "Master different creative problem-solving techniques",
            "Apply brainstorming and mind mapping effectively",
            "Develop lateral thinking skills"
          ],
          hours: 2
        },
        {
          number: 4,
          title: "Innovation in Action",
          content: "Understanding innovation and its role in society. Exploring examples of young innovators and their contributions.",
          outcomes: [
            "Understand the concept of innovation",
            "Learn from examples of young innovators",
            "Identify opportunities for innovation in daily life"
          ],
          hours: 1.5
        },
        {
          number: 5,
          title: "Creative Collaboration",
          content: "Learning to work creatively in teams. Understanding how diverse perspectives enhance creativity.",
          outcomes: [
            "Develop collaborative creativity skills",
            "Appreciate diverse perspectives in creative processes",
            "Practice effective team-based creative projects"
          ],
          hours: 1.5
        }
      ]
    },
    study: {
      title: "Effective Study Skills and Time Management",
      duration: "8 Hours",
      targetAudience: "Grade 7, 8, and 9",
      description: "A practical program designed to help students develop effective study habits, time management skills, and academic organization techniques for improved learning outcomes.",
      sessions: [
        {
          number: 1,
          title: "Understanding Learning Styles",
          content: "Identifying individual learning preferences and studying techniques that work best for different learning styles.",
          outcomes: [
            "Identify personal learning style preferences",
            "Understand different types of learning styles",
            "Choose study methods that match learning preferences"
          ],
          hours: 1.5
        },
        {
          number: 2,
          title: "Time Management Fundamentals",
          content: "Learning to prioritize tasks, create study schedules, and manage time effectively for academic success.",
          outcomes: [
            "Develop effective time management skills",
            "Learn to prioritize academic tasks",
            "Create realistic and effective study schedules"
          ],
          hours: 2
        },
        {
          number: 3,
          title: "Note-Taking and Organization",
          content: "Mastering different note-taking techniques and organizational systems for academic materials.",
          outcomes: [
            "Master various note-taking techniques",
            "Develop effective organizational systems",
            "Improve information retention and recall"
          ],
          hours: 2
        },
        {
          number: 4,
          title: "Test Preparation and Exam Strategies",
          content: "Learning effective test preparation methods and strategies for different types of examinations.",
          outcomes: [
            "Develop effective test preparation strategies",
            "Learn techniques for different exam formats",
            "Manage test anxiety and perform better in exams"
          ],
          hours: 1.5
        },
        {
          number: 5,
          title: "Goal Setting and Academic Planning",
          content: "Setting academic goals, creating action plans, and tracking progress towards educational objectives.",
          outcomes: [
            "Set realistic and achievable academic goals",
            "Create effective action plans for goal achievement",
            "Develop systems for tracking academic progress"
          ],
          hours: 1
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Breadcrumb */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/academy" className="hover:text-primary">Academy</Link>
              <span>/</span>
              <span className="text-foreground">School Training</span>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/academy">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Academy
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">School Training Programs</h1>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-4xl font-bold mb-6">School Training Programs</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Age-appropriate training programs designed to enhance students' curiosity, creativity, 
              and essential life skills for academic success and personal development.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Age-Appropriate</h3>
                <p className="text-sm text-white/80">Programs designed for specific grade levels</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Lightbulb className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-white/80">Engaging activities and hands-on exercises</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Target className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Skill Development</h3>
                <p className="text-sm text-white/80">Essential skills for academic and personal growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Selection */}
        <section className="py-16">
          <div className="container">
            <Tabs value={selectedProgram} onValueChange={setSelectedProgram} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="questions">Asking Questions</TabsTrigger>
                <TabsTrigger value="creativity">Creative Thinking</TabsTrigger>
                <TabsTrigger value="study">Study Skills</TabsTrigger>
              </TabsList>

              {Object.entries(programs).map(([key, program]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Program Overview */}
                    <div className="lg:col-span-1">
                      <Card className="bg-gradient-card shadow-elegant border-0 sticky top-8">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{program.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{program.targetAudience}</span>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base">
                            {program.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary" />
                                Program Features
                              </h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Interactive workshops and activities</li>
                                <li>• Age-appropriate learning materials</li>
                                <li>• Practical skill development</li>
                                <li>• Progress tracking and feedback</li>
                              </ul>
                            </div>
                            <Button asChild className="w-full">
                              <Link to="/contact">
                                Enroll Students
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Program Sessions */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-6">Training Sessions</h3>
                      <div className="space-y-6">
                        {program.sessions.map((session) => (
                          <Card key={session.number} className="bg-gradient-card shadow-elegant border-0">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                    {session.number}
                                  </div>
                                  <div>
                                    <CardTitle className="text-lg">{session.title}</CardTitle>
                                    <CardDescription className="mt-2 mb-4">
                                      {session.content}
                                    </CardDescription>
                                    <div>
                                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                        <Target className="h-4 w-4 text-primary" />
                                        Learning Outcomes:
                                      </h5>
                                      <ul className="space-y-1">
                                        {session.outcomes.map((outcome, index) => (
                                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            {outcome}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="ml-4">
                                  {session.hours}h
                                </Badge>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Our School Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our programs are designed to foster essential skills that benefit students throughout their academic journey and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Enhanced Curiosity",
                  description: "Develop natural curiosity and love for learning through questioning and exploration."
                },
                {
                  icon: Target,
                  title: "Critical Thinking",
                  description: "Build analytical and critical thinking skills essential for academic success."
                },
                {
                  icon: Users,
                  title: "Communication Skills",
                  description: "Improve verbal and written communication abilities through interactive activities."
                },
                {
                  icon: GraduationCap,
                  title: "Academic Performance",
                  description: "Better study habits and time management leading to improved academic outcomes."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Empower Your Students Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Give your students the foundation they need for academic success and lifelong learning. 
              Contact us to discuss how our programs can benefit your school.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/contact">Get Program Details</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolTraining;