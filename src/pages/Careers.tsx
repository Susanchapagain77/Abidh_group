import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const placeholderVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Abidh Group</title>
        <meta name="description" content="Join our team at Abidh Group. Explore exciting career opportunities and grow with us." />
      </Helmet>
      <motion.section
        className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-20"
        initial="initial"
        animate="animate"
        variants={placeholderVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mb-4">
          Careers at Abidh Group
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-8">
          We’re always looking for talented, passionate people to join our team. If you’re interested in working with us, please check back soon for open positions or send your resume to <a href="mailto:careers@abidhgroup.com" className="text-blue-600 underline">careers@abidhgroup.com</a>.
        </p>
        <div className="rounded-xl bg-white/70 shadow-lg p-8 flex flex-col items-center gap-4 backdrop-blur-md border border-gray-200">
          <span className="text-gray-500 text-sm">No open positions at the moment.</span>
        </div>
      </motion.section>
    </>
  );
}
