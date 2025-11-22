import { motion } from "framer-motion";

export const Quotes = () => {
  return (
    <motion.div>
      <motion.p className="text-9xl p-10 leading-36 font-semibold">
        GREAT <span className="text-[#adadad]">DESIGN</span> HAPPENS WHERE LOGIC
        MEETS <span className="text-[#adadad] ">DESIGN</span>.
      </motion.p>
    </motion.div>
  );
};

export default Quotes;
