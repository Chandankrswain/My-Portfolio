import { motion } from "framer-motion";

export const Quotes = () => {
  return (
    <motion.div className="mt-2">
      <motion.p className="text-9xl p-10 leading-36 font-bold">
        GREAT <span className="text-[#adadad] font-extrabold ">DESIGN</span>{" "}
        HAPPENS WHERE LOGIC MEETS{" "}
        <span className="text-[#adadad font-extrabold ">DESIGN</span>.
      </motion.p>
    </motion.div>
  );
};

export default Quotes;
