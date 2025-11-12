import { motion } from "framer-motion";

interface HeadingProps {
  heading?: string;
  classname?: string;
}

export const Heading = ({ heading, classname }: HeadingProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${classname}`}>
      <motion.div
        className="inline-block"
        animate={{ x: ["-100%", "0"] }}
        transition={{
          ease: "linear",
        }}
      >
        {heading}
      </motion.div>
    </div>
  );
};

export default Heading;
