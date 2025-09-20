import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";
import creativeImage from "@/assets/creative-image.jpg";

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Divisions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two specialized divisions working together to drive growth, learning, and innovation across industries.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academy Card */}
          <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={academyImage} 
                alt="Abhidh Academy - Professional Training and Education"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Abhidh Academy</CardTitle>
              <CardDescription className="text-base">
                Comprehensive training programs designed to enhance both technical expertise and essential soft skills for career advancement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Soft Skills Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Technical & Career Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Corporate Training Solutions</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Link to="/academy" className="flex items-center justify-center gap-2">
                  Explore Academy
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Creative Card */}
          <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={creativeImage} 
                alt="Abhidh Creative - Digital Marketing and Development Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Abhidh Creative</CardTitle>
              <CardDescription className="text-base">
                Full-service digital solutions covering marketing, development, and creative design to accelerate business growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Digital Marketing & SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Web & Mobile Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Creative Design Solutions</span>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-primary border-0 group-hover:shadow-lg transition-shadow">
                <Link to="/creative" className="flex items-center justify-center gap-2">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;