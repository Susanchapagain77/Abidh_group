import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Empowering Growth Through
            <span className="block text-accent"> Education & Innovation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            ABHIDH Group bridges the gap between learning and doing. We train minds through our Academy and transform businesses through our Creative solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
              <Link to="/academy" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Explore Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10">
              <Link to="/creative" className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Creative Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;