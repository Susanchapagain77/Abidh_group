import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        
        {/* Our Partners Section */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
          {/* Background Pattern with Multiple Brand Colors */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#1A1F71' }}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full" style={{ backgroundColor: '#708090' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full" style={{ backgroundColor: '#F5F5DC' }}></div>
            <div className="absolute top-10 right-1/3 w-28 h-28 rounded-full" style={{ backgroundColor: '#1A1F71' }}></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6" 
                style={{ color: '#1A1F71' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Trusted Partners
              </motion.h2>
              <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: '#708090' }}></div>
              <motion.p 
                className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: '#708090' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Building stronger communities through strategic partnerships with leading organizations, 
                educational institutions, and innovative companies across Nepal and the region.
              </motion.p>
            </div>
            
            {/* Enhanced Logo Carousel with Brand Colors */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-hidden py-8">
                <div className="flex animate-carousel-home">
                  {/* Partner 1 - Regal Blue Theme */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-gray-100" 
                         style={{ background: 'linear-gradient(135deg, #1A1F71 0%, #2A2F81 100%)' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center">
                          <span className="font-bold text-2xl" style={{ color: '#1A1F71' }}>EP</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Education Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner 2 - Slate Grey Theme */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-gray-100" 
                         style={{ background: 'linear-gradient(135deg, #708090 0%, #8090A0 100%)' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center">
                          <span className="font-bold text-2xl" style={{ color: '#708090' }}>TP</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Technology Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner 3 - Cream & Regal Blue Theme */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border-2"
                         style={{ backgroundColor: '#F5F5DC', borderColor: '#1A1F71' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1F71' }}>
                          <span className="text-white font-bold text-2xl">CP</span>
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#1A1F71' }}>Corporate Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner 4 - White with Slate Grey accent */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border-2"
                         style={{ borderColor: '#708090' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#708090' }}>
                          <span className="text-white font-bold text-2xl">IP</span>
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#708090' }}>Industry Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner 5 - Mixed Theme */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                         style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 100%)', border: '2px solid #1A1F71' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1F71' }}>
                          <span className="text-white font-bold text-2xl">GP</span>
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#1A1F71' }}>Global Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner 6 - Slate Grey with Cream accent */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                         style={{ background: 'linear-gradient(135deg, #708090 0%, #8090A0 100%)' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F5F5DC' }}>
                          <span className="font-bold text-2xl" style={{ color: '#1A1F71' }}>SP</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Strategic Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-gray-100" 
                         style={{ background: 'linear-gradient(135deg, #1A1F71 0%, #2A2F81 100%)' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center">
                          <span className="font-bold text-2xl" style={{ color: '#1A1F71' }}>EP</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Education Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-gray-100" 
                         style={{ background: 'linear-gradient(135deg, #708090 0%, #8090A0 100%)' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center">
                          <span className="font-bold text-2xl" style={{ color: '#708090' }}>TP</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Technology Partner</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-80 h-40 mx-6 flex items-center justify-center group">
                    <div className="w-64 h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border-2"
                         style={{ backgroundColor: '#F5F5DC', borderColor: '#1A1F71' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1F71' }}>
                          <span className="text-white font-bold text-2xl">CP</span>
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#1A1F71' }}>Corporate Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partnership Impact Stats with Brand Colors */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#F5F5DC' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#1A1F71' }}>60+</div>
                <div className="font-medium" style={{ color: '#708090' }}>Active Partners</div>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#1A1F71' }}>
                <div className="text-4xl font-bold mb-2 text-white">30+</div>
                <div className="text-white/90 font-medium">Educational Institutions</div>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#708090' }}>
                <div className="text-4xl font-bold mb-2 text-white">40+</div>
                <div className="text-white/90 font-medium">Corporate Partners</div>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2" style={{ backgroundColor: 'white', borderColor: '#1A1F71' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#1A1F71' }}>7+</div>
                <div className="font-medium" style={{ color: '#708090' }}>Years Experience</div>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced CSS for Home page carousel */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes carousel-home {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-carousel-home {
              animation: carousel-home 36s linear infinite;
              width: calc(200% + 192px);
            }
            
            .animate-carousel-home:hover {
              animation-play-state: paused;
            }
            
            @media (prefers-reduced-motion: reduce) {
              .animate-carousel-home {
                animation: none;
              }
            }
            `
          }} />
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;