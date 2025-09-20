import { Variants } from "framer-motion";

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.995 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -10, scale: 0.995 }
};

export const pageTransition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.5
};

export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } }
};

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};
