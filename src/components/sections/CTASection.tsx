import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1A1F71' }}>
      <div className="container relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Whether you're looking to advance your career through our Academy or grow your business with our Creative services, we're here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center text-white/80">
            <div>
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">100+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">95%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;