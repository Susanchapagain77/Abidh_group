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

const queryClient = new QueryClient();


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
