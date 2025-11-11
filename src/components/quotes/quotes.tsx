import { useScroll } from "@react-three/drei";
import { motion } from "framer-motion";

export const Quotes = () => {
  return (
    <motion.div>
      <motion.p className="text-9xl p-10 ">
        GREAT <span className="text-[#adadad]">DESIGN</span> HAPPENS WHERE LOGIC
        MEETS <span className="text-[#adadad]">EMPATHY</span>.
      </motion.p>
    </motion.div>
  );
};

export default Quotes;
