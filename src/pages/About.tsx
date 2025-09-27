import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Zap } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to bridge education and business growth" },
    { year: "2021", title: "Academy Launch", description: "Introduced comprehensive training programs" },
    { year: "2022", title: "Creative Division", description: "Expanded into digital marketing and development services" },
    { year: "2024", title: "500+ Success Stories", description: "Reached significant milestones in student and client satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Who We Are | ABHIDH Group</title>
        <meta name="description" content="ABHIDH Group was founded with a simple yet powerful belief: that true growth happens when learning meets practical application." />
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
                Who We Are
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
At <b>Abhidh Group</b>, we believe that growth is not just about achieving numbers – it is about
creating value that lasts. 
</p>
            </div>
          </motion.div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>We exist to empower individuals with the skills they need to
succeed and to enable businesses with the strategies and technologies that help them
thrive.</p>
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

        {/* Our Group Identity Section */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1A1F71' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#FFFFFF' }}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full" style={{ backgroundColor: '#F5F5DC' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full" style={{ backgroundColor: '#708090' }}></div>
          </div>
          
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-white">
                Our Group Identity
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#F5F5DC' }}></div>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white opacity-90">
                Our identity as a group company lies in the strength of our two arms
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Abhidh Academy Card */}
              <motion.div
                className="group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 relative overflow-hidden">
                  {/* Card accent */}
                  <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: '#1A1F71' }}></div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg" style={{ backgroundColor: '#1A1F71' }}>
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold" style={{ color: '#1A1F71' }}>
                          Abhidh Academy
                        </h3>
                        <p className="text-sm font-medium" style={{ color: '#708090' }}>
                          Professional Training Institute
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A professional training institute that <strong>nurtures skills, confidence, and career readiness</strong> among students, professionals, and organizations.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1A1F71' }}></div>
                        <span className="text-sm text-gray-600">Skills Development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1A1F71' }}></div>
                        <span className="text-sm text-gray-600">Confidence Building</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1A1F71' }}></div>
                        <span className="text-sm text-gray-600">Career Readiness</span>
                      </div>
                    </div>
                    
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                      style={{ backgroundColor: '#1A1F71' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = '/academy'}
                    >
                      Explore Academy
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Abhidh Creative Card */}
              <motion.div
                className="group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 relative overflow-hidden">
                  {/* Card accent */}
                  <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: '#708090' }}></div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg" style={{ backgroundColor: '#708090' }}>
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold" style={{ color: '#708090' }}>
                          Abhidh Creative
                        </h3>
                        <p className="text-sm font-medium" style={{ color: '#1A1F71' }}>
                          Digital & IT Solutions Partner
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A digital and IT solutions partner that helps businesses <strong>expand their reach, optimize their brand presence, and embrace innovation</strong>.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#708090' }}></div>
                        <span className="text-sm text-gray-600">Digital Expansion</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#708090' }}></div>
                        <span className="text-sm text-gray-600">Brand Optimization</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#708090' }}></div>
                        <span className="text-sm text-gray-600">Innovation Integration</span>
                      </div>
                    </div>
                    
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                      style={{ backgroundColor: '#708090' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = '/creative'}
                    >
                      Visit Creative
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Bottom Message */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg border-2" style={{ backgroundColor: 'white', borderColor: '#1A1F71' }}>
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#1A1F71' }}>
                  Together, We Transform Society
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: '#708090' }}>
                  We combine the <strong>power of education and technology</strong> to drive meaningful 
                  transformation in society, creating lasting impact through skills development and digital innovation.
                </p>
              </div>
            </motion.div>
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