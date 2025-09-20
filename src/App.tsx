import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { pageVariants, pageTransition } from "./lib/animations";
import Home from "./pages/Home";
import About from "./pages/About";
import Academy from "./pages/Academy";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CollegeTraining from "./pages/Academy/CollegeTraining";
import CorporateTraining from "./pages/Academy/CorporateTraining";
import SchoolTraining from "./pages/Academy/SchoolTraining";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const queryClient = new QueryClient();

// Add icons to the library
library.add(faFacebookF, faInstagram, faTwitter, faLinkedinIn, faTiktok);

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Abidh Academy</h4>
            <ul className="space-y-2">
              <li><a href="/academy/technical-training" className="hover:text-white transition">IT Trainings</a></li>
              <li><a href="/academy/digital-marketing" className="hover:text-white transition">Digital Marketing</a></li>
              <li><a href="/academy/featured-courses" className="hover:text-white transition">Featured Courses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Abidh Creative</h4>
            <ul className="space-y-2">
              <li><a href="/creative/it-development" className="hover:text-white transition">IT & Development</a></li>
              <li><a href="/creative/digital-marketing" className="hover:text-white transition">Digital Marketing</a></li>
              <li><a href="/creative/creative-solutions" className="hover:text-white transition">Creative Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <i className="fab fa-facebook-f text-2xl"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <i className="fab fa-instagram text-2xl"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <i className="fab fa-twitter text-2xl"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <i className="fab fa-linkedin-in text-2xl"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                  <i className="fab fa-tiktok text-2xl"></i> TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <p className="text-sm">Nardevi, Kathmandu</p>
            <p className="text-sm">Phone: 9801110981 / 9841080407</p>
            <p className="text-sm">Email: info@abidhgroup.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">&copy; 2025 Abidh Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="description" content="Abidh Group: Empowering growth through education, innovation, and creative solutions. Explore our academy and creative services." />
        <link rel="canonical" href="https://abidhgroup.com/" />
      </Helmet>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-blue-700 px-4 py-2 rounded shadow-lg transition-all">Skip to main content</a>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteWrapper />
        <Footer /> {/* Add Footer component */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

function RouteWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main-content"
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition as any}
        tabIndex={-1}
        aria-label="Main content"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/academy/college-training" element={<CollegeTraining />} />
          <Route path="/academy/corporate-training" element={<CorporateTraining />} />
          <Route path="/academy/school-training" element={<SchoolTraining />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}
