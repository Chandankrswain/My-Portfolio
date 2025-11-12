import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?:
    | "fade-up"
    | "slide-diagonal"
    | "zoom-in"
    | "blur-in"
    | "flip"
    | "rotate-rise"
    | "pop";
  delay?: number;
}

const variants = {
  "fade-up": {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
  },

  "slide-diagonal": {
    initial: { opacity: 0, x: -0, y: 90, rotate: -2 },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
  },

  "zoom-in": {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
  },

  "blur-in": {
    initial: { opacity: 0, filter: "blur(2px)", y: 50 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },

  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
  },

  "rotate-rise": {
    initial: { opacity: 0, rotate: -10, y: 120 },
    animate: { opacity: 1, rotate: 0, y: 0 },
  },

  pop: {
    initial: { opacity: 0, scale: 0.85, y: 60 },
    animate: { opacity: 1, scale: 1, y: 0 },
  },
};

export const AnimatedSection = ({
  children,
  variant = "fade-up",
  delay = 0.2,
}: AnimatedSectionProps) => {
  const animation = variants[variant];

  return (
    <motion.section
      initial={animation.initial}
      whileInView={animation.animate}
      transition={{
        duration: 2, // ⏳ slower and smoother
        delay,
        ease: [0.22, 1, 0.36, 1], // smooth “easeOutExpo” feel
        type: "spring",
        damping: 20,
        stiffness: 80,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
