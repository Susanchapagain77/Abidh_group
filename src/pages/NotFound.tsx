import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found | ABHIDH Group</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#1A1F71' }}>
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-6xl font-extrabold drop-shadow-xl">404</h1>
          <p className="mb-4 text-2xl text-white/90">Oops! Page not found</p>
          <a href="/" className="inline-block mt-4 px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#708090' }}>
            Return to Home
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
