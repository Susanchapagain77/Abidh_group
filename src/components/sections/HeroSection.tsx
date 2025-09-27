import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#1A1F71' }}>
      {/* Parallax background image with animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(245,245,220,0.1) 0%, transparent 70%)" }}
      />
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering People & Businesses Through
            <motion.span
              className="block text-cream animate-gradient-x"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
               Skills and Digital Solutions
            </motion.span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
At Abhidh Group, we bring together education, innovation, and technology to prepare
individuals for brighter careers and help businesses achieve sustainable growth in today’s
competitive digital world.</motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Button asChild size="lg" variant="secondary" className="min-w-[200px] shadow-xl hover:scale-105 transition-transform duration-200">
              <Link to="/academy" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Explore Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10 shadow-xl hover:scale-105 transition-transform duration-200">
              <Link to="/creative" className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Creative Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;