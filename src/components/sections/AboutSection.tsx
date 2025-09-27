import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We exist to bridge the gap between theoretical knowledge and practical application."
    },
    {
      icon: Users,
      title: "People-Centered",
      description: "Every solution we create is designed with human potential and growth at its core."
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "We maintain the highest standards in both education and digital innovation."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              About ABHIDH Group
            </h2>
<p className="text-lg text-muted-foreground mb-6">
  In a fast-changing world where industries evolve every day, individuals and organizations
  must keep upgrading themselves to stay ahead. <b>Abhidh Group</b> exists to make this
  transformation possible.
</p>

            <p className="text-lg text-muted-foreground mb-8">
Through <b>Abhidh Academy</b>, we deliver high-impact training in
leadership, communication, digital marketing, IT, and more to equip students, professionals,
and organizations with the right skills for the future. Through <b>Abhidh Creative</b>, we offer
businesses advanced digital marketing, branding, and IT development services that boost
visibility, attract customers, and accelerate growth. Together, we make people stronger and
businesses smarter.</p>
            <Button asChild size="lg" className="bg-gradient-primary border-0">
              <Link to="/about" className="flex items-center gap-2">
                Learn Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card shadow-elegant border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;