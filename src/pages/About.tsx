import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to bridge education and business growth" },
    { year: "2021", title: "Academy Launch", description: "Introduced comprehensive training programs" },
    { year: "2022", title: "Creative Division", description: "Expanded into digital marketing and development services" },
    { year: "2024", title: "500+ Success Stories", description: "Reached significant milestones in student and client satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Who We Are
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                ABHIDH Group was founded with a simple yet powerful belief: that true growth happens when learning meets practical application.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    In an increasingly competitive world, we recognized a critical gap between traditional education and the practical skills needed to succeed in modern careers and businesses.
                  </p>
                  <p>
                    This realization led to the creation of ABHIDH Group - a unique ecosystem where individuals can develop essential skills through our Academy while businesses can leverage cutting-edge digital solutions through our Creative division.
                  </p>
                  <p>
                    Today, we stand as a bridge between learning and doing, theory and practice, potential and achievement.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      To empower individuals and organizations through comprehensive education and innovative digital solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6 text-center">
                    <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To be the leading catalyst for personal and business transformation through integrated learning and technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at ABHIDH Group
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "People First",
                  description: "Every decision we make prioritizes the growth and success of the people we serve."
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "We maintain the highest standards in both our educational programs and business solutions."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We continuously evolve our methods to stay ahead of industry trends and needs."
                },
                {
                  icon: Zap,
                  title: "Impact",
                  description: "We measure our success by the positive transformation we create in lives and businesses."
                }
              ].map((value, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to transform education and business growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 relative">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-lg mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;