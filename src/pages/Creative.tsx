import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Palette, Search, Smartphone, BarChart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import creativeImage from "@/assets/creative-image.jpg";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Creative = () => {
  const services = [
    {
      category: "Digital Marketing",
      icon: Search,
      description: "Comprehensive digital marketing solutions to boost your online presence",
      services: [
        { name: "Search Engine Optimization (SEO)", description: "Improve your website's visibility in search results" },
        { name: "Social Media Marketing", description: "Engage your audience across all social platforms" },
        { name: "Pay-Per-Click Advertising (PPC)", description: "Targeted advertising campaigns for immediate results" },
        { name: "Content Marketing", description: "Strategic content creation to drive engagement" },
        { name: "Email Marketing", description: "Nurture leads and retain customers effectively" },
        { name: "Analytics & Reporting", description: "Data-driven insights to optimize performance" }
      ],
      color: "bg-blue-500"
    },
    {
      category: "IT & Development",
      icon: Code,
      description: "Custom software solutions and web development services",
      services: [
        { name: "Web Development", description: "Modern, responsive websites that convert visitors" },
        { name: "Mobile App Development", description: "Native and cross-platform mobile applications" },
        { name: "E-commerce Solutions", description: "Complete online store development and optimization" },
        { name: "Custom Software Development", description: "Tailored software solutions for your business needs" },
        { name: "API Development & Integration", description: "Seamless system integrations and API development" },
        { name: "Maintenance & Support", description: "Ongoing technical support and updates" }
      ],
      color: "bg-purple-500"
    },
    {
      category: "Creative Solutions",
      icon: Palette,
      description: "Brand identity and creative design services that make you stand out",
      services: [
        { name: "Brand Identity Design", description: "Complete brand development and visual identity" },
        { name: "UI/UX Design", description: "User-centered design for digital products" },
        { name: "Graphic Design", description: "Professional graphics for all your marketing needs" },
        { name: "Video Production", description: "Engaging video content for marketing and training" },
        { name: "Photography", description: "Professional photography for your business" },
        { name: "Marketing Campaigns", description: "Creative campaigns that drive results" }
      ],
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "95%", label: "Client Retention" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Abhidh Creative | Digital Marketing, IT & Design Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge digital marketing, development, and creative solutions designed to accelerate growth and maximize ROI." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1A1F71' }}>
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${creativeImage})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="text-white" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 drop-shadow-xl">
                  Abhidh Creative
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Transform your business with cutting-edge digital marketing, development, and creative solutions designed to accelerate growth and maximize ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary" className="shadow-xl hover:scale-105 transition-transform duration-200">
                    <Link to="/contact" className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Get Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 shadow-xl hover:scale-105 transition-transform duration-200">
                    <Link to="/contact">View Portfolio</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div className="relative" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <img 
                  src={creativeImage} 
                  alt="Digital marketing and development services at Abhidh Creative"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Creative Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From digital marketing strategies to custom development and creative design, we provide end-to-end solutions for your business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: BarChart,
                  title: "Results-Driven Approach",
                  description: "Every strategy is designed with measurable outcomes and ROI in mind."
                },
                {
                  icon: Smartphone,
                  title: "Modern Technology",
                  description: "We use the latest tools and technologies to stay ahead of the curve."
                },
                {
                  icon: CheckCircle,
                  title: "Proven Process",
                  description: "Our systematic approach ensures consistent quality and successful delivery."
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="space-y-12">
              {services.map((serviceCategory, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${serviceCategory.color}`}>
                        <serviceCategory.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{serviceCategory.category}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {serviceCategory.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {serviceCategory.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="p-4 bg-background rounded-lg border">
                          <h4 className="font-semibold mb-2">{service.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
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

        {/* Process Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers exceptional results for every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
                { step: "02", title: "Strategy", description: "Developing a comprehensive plan tailored to your needs" },
                { step: "03", title: "Execution", description: "Implementing solutions with precision and attention to detail" },
                { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
              ].map((process, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-3">{process.step}</div>
                    <h3 className="font-semibold text-lg mb-3">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24" style={{ backgroundColor: '#1A1F71' }}>
          <div className="container text-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our creative solutions can help you achieve your business goals and drive meaningful growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">Free Consultation</Link>
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

export default Creative;