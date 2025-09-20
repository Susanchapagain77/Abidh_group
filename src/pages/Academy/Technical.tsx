import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const placeholderVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Technical() {
  return (
    <>
      <Helmet>
        <title>Technical Training | Abidh Academy</title>
        <meta name="description" content="Advance your technical skills with our expert-led training programs in IT, engineering, and more." />
      </Helmet>
      <motion.section
        className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 px-4 py-20"
        initial="initial"
        animate="animate"
        variants={placeholderVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
          Technical Training
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-8">
          Advance your technical skills with our expert-led training programs in IT, engineering, and more. Stay ahead in your career with hands-on learning.
        </p>
        <div className="rounded-xl bg-white/70 shadow-lg p-8 flex flex-col items-center gap-4 backdrop-blur-md border border-gray-200">
          <span className="text-gray-500 text-sm">Course details coming soon.</span>
        </div>
      </motion.section>
    </>
  );
}
