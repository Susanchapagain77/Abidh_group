import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | ABHIDH Group</title>
        <meta name="description" content="Ready to start your journey with ABHIDH Group? Get in touch with us today and let's discuss how we can help you achieve your goals." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24" style={{ backgroundColor: '#1A1F71' }}>
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 drop-shadow-xl">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Ready to start your journey with ABHIDH Group? Get in touch with us today and let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gradient-card shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academy-soft-skills">Academy - Soft Skills Training</SelectItem>
                          <SelectItem value="academy-technical">Academy - Technical Training</SelectItem>
                          <SelectItem value="academy-corporate">Academy - Corporate Training</SelectItem>
                          <SelectItem value="creative-marketing">Creative - Digital Marketing</SelectItem>
                          <SelectItem value="creative-development">Creative - IT & Development</SelectItem>
                          <SelectItem value="creative-design">Creative - Design Solutions</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your needs and how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-muted-foreground">info@abhidh.com</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="font-medium">Academy Enrollment</p>
                      <p className="text-muted-foreground">academy@abhidh.com</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="font-medium">Creative Services</p>
                      <p className="text-muted-foreground">creative@abhidh.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Main Office</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="font-medium">Academy Hotline</p>
                      <p className="text-muted-foreground">+1 (555) 234-5678</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Head Office</p>
                      <p className="text-muted-foreground">
                        123 Business District<br />
                        Suite 456<br />
                        City, State 12345
                      </p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="font-medium">Training Center</p>
                      <p className="text-muted-foreground">
                        789 Education Avenue<br />
                        Training Complex<br />
                        City, State 12345
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Find Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Conveniently located in the heart of the business district
              </p>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">
                Interactive map will be integrated here
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;