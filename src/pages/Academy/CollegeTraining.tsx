import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Users, Trophy, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CollegeTraining = () => {
  const [selectedCourse, setSelectedCourse] = useState("communication");

  const courses = {
    communication: {
      title: "Communication Skills",
      duration: "10 Hours",
      description: "The Communication Skills Workshop is designed to enhance participants' communication abilities in various personal and professional contexts. The course explores fundamental concepts, theories, and practical techniques to improve verbal, nonverbal, and written communication skills.",
      objectives: [
        "Understand the key elements and principles of effective communication",
        "Develop active listening skills to enhance comprehension and engagement",
        "Enhance verbal communication skills to express ideas clearly and confidently",
        "Utilize nonverbal communication cues to convey messages effectively",
        "Improve written communication skills for professional and interpersonal interactions",
        "Adapt communication strategies to diverse audiences and situations",
        "Manage conflicts and handle difficult conversations with empathy and assertiveness",
        "Utilize technology tools for efficient and impactful communication"
      ],
      sessions: [
        {
          number: 1,
          title: "Introduction to Effective Communication",
          content: "Importance of effective communication, key elements, communication models and theories, barriers to effective communication. Icebreaker activity: Getting to know the participants.",
          hours: 1.5
        },
        {
          number: 2,
          title: "Active Listening Skills",
          content: "Strategies for active listening, empathetic listening techniques, verbal and nonverbal cues in listening. Group activity: Active listening exercises.",
          hours: 1
        },
        {
          number: 3,
          title: "Verbal Communication",
          content: "Clear and concise expression of ideas, effective use of language and vocabulary, public speaking tips and techniques, overcoming public speaking anxiety.",
          hours: 1.5
        },
        {
          number: 4,
          title: "Nonverbal Communication",
          content: "Understanding nonverbal cues: body language, facial expressions, gestures. Nonverbal communication across cultures, interpreting and utilizing nonverbal cues.",
          hours: 1.5
        },
        {
          number: 5,
          title: "Written Communication Skills",
          content: "Principles of effective written communication, structuring written messages, business correspondence: emails, memos, and reports.",
          hours: 1.5
        },
        {
          number: 6,
          title: "Digital Communication and Technology",
          content: "Utilizing communication technology tools, virtual meeting etiquette, social media and professional networking.",
          hours: 1.5
        },
        {
          number: 7,
          title: "Conflict Resolution and Difficult Conversations",
          content: "Identifying sources of conflict, strategies for managing and resolving conflicts, handling difficult conversations with empathy and assertiveness.",
          hours: 1.5
        }
      ]
    },
    teamwork: {
      title: "Team Work & Collaboration",
      duration: "8 Hours",
      description: "This comprehensive workshop focuses on building effective teamwork skills essential for success in academic and professional environments.",
      objectives: [
        "Understand the dynamics of effective teamwork",
        "Develop collaborative problem-solving skills",
        "Learn to communicate effectively in team settings",
        "Build trust and rapport with team members",
        "Handle team conflicts constructively"
      ],
      sessions: [
        {
          number: 1,
          title: "Fundamentals of Teamwork",
          content: "Understanding team dynamics, roles and responsibilities, stages of team development.",
          hours: 2
        },
        {
          number: 2,
          title: "Effective Team Communication",
          content: "Communication strategies for teams, active listening in group settings, providing constructive feedback.",
          hours: 2
        },
        {
          number: 3,
          title: "Collaborative Problem Solving",
          content: "Team decision-making processes, brainstorming techniques, conflict resolution strategies.",
          hours: 2
        },
        {
          number: 4,
          title: "Building Team Trust and Rapport",
          content: "Trust-building activities, understanding different personality types, celebrating team achievements.",
          hours: 2
        }
      ]
    },
    presentation: {
      title: "Presentation Skills",
      duration: "6 Hours",
      description: "Master the art of effective presentations through this hands-on workshop designed to build confidence and delivery skills.",
      objectives: [
        "Design compelling presentation content",
        "Deliver presentations with confidence",
        "Use visual aids effectively",
        "Engage audience through interactive techniques",
        "Handle questions and feedback professionally"
      ],
      sessions: [
        {
          number: 1,
          title: "Presentation Planning and Structure",
          content: "Defining objectives, understanding your audience, structuring your presentation for maximum impact.",
          hours: 2
        },
        {
          number: 2,
          title: "Visual Design and Technology",
          content: "Creating effective slides, using multimedia tools, design principles for presentations.",
          hours: 2
        },
        {
          number: 3,
          title: "Delivery and Engagement",
          content: "Public speaking techniques, managing presentation anxiety, engaging your audience, handling Q&A sessions.",
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
              <span className="text-foreground">College Training</span>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/academy">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Academy
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">College Training Programs</h1>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-4xl font-bold mb-6">College Training Programs</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Comprehensive soft skills training designed for college students to enhance their communication, 
              teamwork, and presentation abilities for successful academic and career outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-white/80">Engaging workshops with practical exercises</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Trophy className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Industry-Relevant</h3>
                <p className="text-sm text-white/80">Skills that matter in today's workplace</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-sm text-white/80">Recognized certificates upon completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Selection */}
        <section className="py-16">
          <div className="container">
            <Tabs value={selectedCourse} onValueChange={setSelectedCourse} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="communication">Communication Skills</TabsTrigger>
                <TabsTrigger value="teamwork">Team Work</TabsTrigger>
                <TabsTrigger value="presentation">Presentation Skills</TabsTrigger>
              </TabsList>

              {Object.entries(courses).map(([key, course]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Course Overview */}
                    <div className="lg:col-span-1">
                      <Card className="bg-gradient-card shadow-elegant border-0 sticky top-8">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{course.duration}</span>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base">
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Course Objectives:</h4>
                              <ul className="space-y-1">
                                {course.objectives.slice(0, 3).map((objective, index) => (
                                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    {objective}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button asChild className="w-full">
                              <Link to="/contact">
                                Enroll Now
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Course Sessions */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-6">Course Sessions</h3>
                      <div className="space-y-4">
                        {course.sessions.map((session) => (
                          <Card key={session.number} className="bg-gradient-card shadow-elegant border-0">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                    {session.number}
                                  </div>
                                  <div>
                                    <CardTitle className="text-lg">{session.title}</CardTitle>
                                    <CardDescription className="mt-2">
                                      {session.content}
                                    </CardDescription>
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Training Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have enhanced their skills and boosted their career prospects 
              through our comprehensive college training programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollegeTraining;