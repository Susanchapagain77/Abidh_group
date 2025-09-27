import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import academyImage from "@/assets/academy-image.jpg";
import creativeImage from "@/assets/creative-image.jpg";

const ServicesSection = () => {
  return (
    <>
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
              <CardDescription className="text-base">At Abhidh Academy, we create learning experiences that are practical, interactive, and
designed for real-world success. Our trainings cover soft skills like leadership,
communication, time management, and personality development – along with technical and
professional courses in digital marketing, IT, AI, Excel, accounting, and taxation. Every
session is carefully crafted to not just teach, but transform.</CardDescription>
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
In today’s competitive world, visibility defines success. Abhidh Creative provides complete
digital solutions to help businesses grow smarter. From social media management and SEO
to Google Ads, web development, and mobile app creation, we help brands stand out,
connect with their audience, and achieve measurable results. We don’t just market
businesses – we build their digitalidentity.</CardDescription>
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
    
    {/* Why Choose Abhidh Group Section */}
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Floating Blue Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bubble 1 */}
        <div 
          className="absolute w-16 h-16 rounded-full opacity-20 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '10%',
            top: '20%',
            animationDelay: '0s'
          }}
        ></div>
        
        {/* Bubble 2 */}
        <div 
          className="absolute w-24 h-24 rounded-full opacity-15 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            right: '15%',
            top: '10%',
            animationDelay: '1s',
            animationDuration: '9s'
          }}
        ></div>
        
        {/* Bubble 3 */}
        <div 
          className="absolute w-12 h-12 rounded-full opacity-25 float-reverse-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '20%',
            bottom: '30%',
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Bubble 4 */}
        <div 
          className="absolute w-20 h-20 rounded-full opacity-10 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            right: '25%',
            bottom: '15%',
            animationDelay: '3s',
            animationDuration: '10s'
          }}
        ></div>
        
        {/* Bubble 5 */}
        <div 
          className="absolute w-8 h-8 rounded-full opacity-30 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '70%',
            top: '40%',
            animationDelay: '4s',
            animationDuration: '6s'
          }}
        ></div>
        
        {/* Bubble 6 */}
        <div 
          className="absolute w-14 h-14 rounded-full opacity-20 float-reverse-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '5%',
            top: '60%',
            animationDelay: '1.5s',
            animationDuration: '8s'
          }}
        ></div>
        
        {/* Bubble 7 */}
        <div 
          className="absolute w-18 h-18 rounded-full opacity-15 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            right: '10%',
            top: '70%',
            animationDelay: '2.5s',
            animationDuration: '7s'
          }}
        ></div>
        
        {/* Additional smaller bubbles for more dynamic effect */}
        <div 
          className="absolute w-6 h-6 rounded-full opacity-25 float-reverse-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '85%',
            top: '25%',
            animationDelay: '3.5s',
            animationDuration: '5s'
          }}
        ></div>
        
        <div 
          className="absolute w-10 h-10 rounded-full opacity-20 float-animation"
          style={{ 
            backgroundColor: '#1A1F71',
            left: '40%',
            top: '80%',
            animationDelay: '5s',
            animationDuration: '9s'
          }}
        ></div>
      </div>

      {/* Custom CSS for floating animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.1);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.9);
          }
          75% {
            transform: translateY(-25px) translateX(5px) scale(1.05);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(20px) translateX(-10px) scale(0.9);
          }
          50% {
            transform: translateY(10px) translateX(15px) scale(1.1);
          }
          75% {
            transform: translateY(25px) translateX(-5px) scale(0.95);
          }
        }
        
        .float-animation {
          animation: float 8s ease-in-out infinite;
        }
        
        .float-reverse-animation {
          animation: float-reverse 7s ease-in-out infinite;
        }
        `
      }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#1A1F71' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: '#708090' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full" style={{ backgroundColor: '#1A1F71' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: '#1A1F71' }}>
            Why Choose Abhidh Group?
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#708090' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Four compelling reasons that make us your trusted partner in growth and transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1 - One Group, Dual Impact */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" style={{ backgroundColor: '#1A1F71', opacity: 0.1 }}></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #1A1F71 0%, #2A2F81 100%)' }}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: '#708090' }}></div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1F71' }}>
                  One Group, Dual Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional training for individuals and digital transformation for businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Trusted Expertise */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300" style={{ backgroundColor: '#708090', opacity: 0.1 }}></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #708090 0%, #8090A0 100%)' }}>
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: '#1A1F71' }}></div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1F71' }}>
                  Trusted Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified trainers, skilled developers, and experienced marketing strategists.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Global & Local Approach */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300" style={{ backgroundColor: '#1A1F71', opacity: 0.1 }}></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #1A1F71 0%, #2A2F81 100%)' }}>
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: '#708090' }}></div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1F71' }}>
                  Global & Local Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve Nepal's schools, colleges, and companies, while maintaining global standards of quality.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Measurable Growth */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" style={{ backgroundColor: '#708090', opacity: 0.1 }}></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #708090 0%, #8090A0 100%)' }}>
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: '#1A1F71' }}></div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1F71' }}>
                  Measurable Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every program and project is designed to create real, trackable results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A1F71' }}>500+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A1F71' }}>100+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A1F71' }}>95%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;