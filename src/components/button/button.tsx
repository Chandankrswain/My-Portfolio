import { motion } from "framer-motion";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-6 py-3 font-medium text-black bg-white overflow-hidden cursor-none
                 [clip-path:polygon(10px_0%,100%_0%,100%_calc(100%-10px),calc(100%-10px)_100%,0%_100%,0%_10px)]
                 border "
      whileHover="hover"
      initial="initial"
    >
      {/* Animated background */}
      <motion.span
        className="absolute left-0 top-0 h-full bg-blue-900"
        variants={{
          initial: { width: 0 },
          hover: {
            width: "100%",
            transition: {
              duration: 0.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
            },
          },
        }}
      ></motion.span>

      {/* Text */}
      <motion.span
        className="relative z-10"
        variants={{
          initial: { color: "#000" },
          hover: { color: "#fff", transition: { duration: 0.3 } },
        }}
      >
        {title}
      </motion.span>
    </motion.button>
  );
};

export default Button;
