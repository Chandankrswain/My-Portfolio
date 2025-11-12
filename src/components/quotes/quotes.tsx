import { motion } from "framer-motion";

export const Quotes = () => {
  return (
    <motion.div>
      <motion.p className="text-9xl p-10 leading-36 font-semibold">
        GREAT{" "}
        <motion.span
          initial={{ scale: 0 }}
          whileHover={{ backgroundColor: "orange", color: "#141414", scale: 1 }}
          transition={{ duration: 0 }}
          className="text-[#adadad] rounded-3xl  "
        >
          DESIGN
        </motion.span>{" "}
        HAPPENS WHERE LOGIC MEETS{" "}
        <motion.span
          whileHover={{
            backgroundColor: "cyan",
            color: "#141414",
            scale: 1.1,
          }}
          transition={{ duration: 0, ease: "easeInOut" }}
          className="text-[#adadad] rounded-3xl "
        >
          DESIGN
        </motion.span>
        .
      </motion.p>
    </motion.div>
  );
};

export default Quotes;
