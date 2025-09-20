import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Users, Trophy, Briefcase, ArrowRight, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateTraining = () => {
  const [selectedProgram, setSelectedProgram] = useState("leadership");

  const programs = {
    leadership: {
      title: "Leadership Mastery: Unleashing Your Potential",
      duration: "8 Hours",
      description: "A comprehensive training program designed to develop and enhance leadership skills in a corporate setting. Participants will explore key leadership concepts, engage in interactive discussions, and participate in experiential activities to strengthen their leadership capabilities.",
      sessions: [
        {
          number: 1,
          title: "Introduction to Leadership",
          content: "Course overview, objectives, and participant expectations. Understanding the role of leadership in a corporate context. Exploring different leadership styles and their impact on team dynamics.",
          outcomes: [
            "Understand the fundamentals of leadership and its significance in a corporate context",
            "Recognize various leadership styles and their impact on team dynamics",
            "Identify personal leadership goals and objectives"
          ],
          hours: 1
        },
        {
          number: 2,
          title: "Self-Awareness and Leadership",
          content: "Assessing personal leadership strengths and areas for improvement. Identifying core values, beliefs, and leadership philosophy. Reflective exercises to enhance self-awareness and personal growth.",
          outcomes: [
            "Assess personal leadership strengths and areas for development",
            "Gain insight into personal values, beliefs, and leadership philosophy",
            "Create an action plan for personal growth as a leader"
          ],
          hours: 1
        },
        {
          number: 3,
          title: "Effective Communication and Relationship Building",
          content: "Developing effective communication skills for leadership. Active listening techniques and nonverbal communication. Building strong relationships with team members and stakeholders.",
          outcomes: [
            "Develop effective communication skills for building strong relationships",
            "Enhance active listening techniques and nonverbal communication",
            "Practice empathetic and inclusive communication strategies"
          ],
          hours: 1
        },
        {
          number: 4,
          title: "Motivating and Inspiring Others",
          content: "Understanding motivation theories and their application in the workplace. Techniques for inspiring and motivating individuals and teams. Creating a culture of engagement and recognition.",
          outcomes: [
            "Apply motivation theories to inspire and engage team members",
            "Develop strategies for creating a motivating work environment",
            "Implement recognition and reward systems effectively"
          ],
          hours: 1
        },
        {
          number: 5,
          title: "Decision Making and Problem Solving",
          content: "Strategic thinking and analytical decision-making processes. Collaborative problem-solving techniques. Risk assessment and management in leadership decisions.",
          outcomes: [
            "Make informed decisions using analytical and strategic thinking",
            "Facilitate collaborative problem-solving sessions",
            "Assess and manage risks in leadership decisions"
          ],
          hours: 1.5
        },
        {
          number: 6,
          title: "Leading Change and Innovation",
          content: "Change management strategies and leadership during organizational transitions. Fostering innovation and creativity within teams. Overcoming resistance to change.",
          outcomes: [
            "Lead organizational change initiatives effectively",
            "Foster innovation and creativity in team environments",
            "Develop strategies for overcoming resistance to change"
          ],
          hours: 1.5
        },
        {
          number: 7,
          title: "Building High-Performance Teams",
          content: "Team development strategies and creating high-performance cultures. Delegation skills and empowering team members. Performance management and feedback techniques.",
          outcomes: [
            "Build and develop high-performance teams",
            "Master delegation and team empowerment techniques",
            "Implement effective performance management systems"
          ],
          hours: 1
        }
      ]
    },
    teamBuilding: {
      title: "Team Building & Organizational Culture",
      duration: "6 Hours",
      description: "Focus on building strong teams and fostering positive organizational culture through interactive workshops and team-building activities.",
      sessions: [
        {
          number: 1,
          title: "Understanding Team Dynamics",
          content: "Team formation stages, roles and responsibilities, communication patterns, and trust building.",
          outcomes: [
            "Understand the stages of team development",
            "Identify different team roles and their importance",
            "Build trust and rapport among team members"
          ],
          hours: 2
        },
        {
          number: 2,
          title: "Organizational Culture Development",
          content: "Defining organizational values, creating inclusive environments, and aligning individual and organizational goals.",
          outcomes: [
            "Define and communicate organizational values effectively",
            "Create inclusive and diverse work environments",
            "Align personal and organizational objectives"
          ],
          hours: 2
        },
        {
          number: 3,
          title: "Collaboration and Performance",
          content: "Cross-functional collaboration, conflict resolution, and performance optimization strategies.",
          outcomes: [
            "Enhance cross-functional collaboration",
            "Resolve conflicts constructively",
            "Optimize team performance and productivity"
          ],
          hours: 2
        }
      ]
    },
    digitalTransformation: {
      title: "Digital Transformation Training",
      duration: "6 Hours",
      description: "Prepare your organization for the digital age with comprehensive training on digital tools, processes, and mindset transformation.",
      sessions: [
        {
          number: 1,
          title: "Digital Mindset and Strategy",
          content: "Understanding digital transformation, developing digital strategy, and overcoming digital resistance.",
          outcomes: [
            "Develop a digital-first mindset",
            "Create digital transformation strategies",
            "Lead digital change initiatives"
          ],
          hours: 2
        },
        {
          number: 2,
          title: "Digital Tools and Technologies",
          content: "Overview of digital tools, cloud computing basics, data analytics, and automation technologies.",
          outcomes: [
            "Effectively use digital tools and platforms",
            "Understand cloud computing benefits",
            "Implement basic automation solutions"
          ],
          hours: 2
        },
        {
          number: 3,
          title: "Digital Communication and Collaboration",
          content: "Virtual team management, digital communication best practices, and remote work optimization.",
          outcomes: [
            "Manage virtual teams effectively",
            "Optimize digital communication channels",
            "Create productive remote work environments"
          ],
          hours: 2
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
              <span className="text-foreground">Corporate Training</span>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/academy">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Academy
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Corporate Training Programs</h1>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Corporate Training Excellence</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your organization with customized training solutions designed to enhance leadership, 
              teamwork, and digital capabilities for sustainable business growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Briefcase className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Customized Solutions</h3>
                <p className="text-sm text-white/80">Tailored training programs for your organization</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Facilitators</h3>
                <p className="text-sm text-white/80">Industry experts with proven track records</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Trophy className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Measurable Results</h3>
                <p className="text-sm text-white/80">Training programs with measurable outcomes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Selection */}
        <section className="py-16">
          <div className="container">
            <Tabs value={selectedProgram} onValueChange={setSelectedProgram} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="leadership">Leadership Mastery</TabsTrigger>
                <TabsTrigger value="teamBuilding">Team Building</TabsTrigger>
                <TabsTrigger value="digitalTransformation">Digital Transformation</TabsTrigger>
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
                              <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{program.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{program.duration}</span>
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
                                <Star className="h-4 w-4 text-primary" />
                                Program Highlights
                              </h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Interactive workshops and case studies</li>
                                <li>• Real-world application exercises</li>
                                <li>• Personalized feedback and coaching</li>
                                <li>• Completion certificates</li>
                              </ul>
                            </div>
                            <Button asChild className="w-full">
                              <Link to="/contact">
                                Request Quote
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

        {/* Why Choose Our Corporate Training */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Corporate Training?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver training programs that create lasting impact on your organization's performance and culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "Training programs designed to deliver measurable business outcomes and performance improvements."
                },
                {
                  icon: Users,
                  title: "Experienced Trainers",
                  description: "Learn from industry experts with years of corporate training and consulting experience."
                },
                {
                  icon: Briefcase,
                  title: "Flexible Delivery",
                  description: "On-site, virtual, or hybrid training options to suit your organization's needs and schedule."
                },
                {
                  icon: Trophy,
                  title: "Proven Success",
                  description: "Track record of successfully training teams across diverse industries and company sizes."
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Transform Your Organization Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to invest in your team's growth? Let's discuss how our corporate training programs 
              can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/contact">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CorporateTraining;