import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
}

export const Card = ({ image, title }: CardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="w-[340px] h-[340px] flex flex-col justify-between p-10 border border-[#333333] "
    >
      <motion.img
        src={image}
        alt={title}
        variants={{
          rest: { opacity: 0.2, scale: 1 },
          hover: { opacity: 1, scale: 1.05 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-40 w-40"
      />
      <motion.p
        variants={{
          rest: { y: 0, opacity: 0.8 },
          hover: { y: -5, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-2xl text-[#f2f2f2] overflow-hidden"
      >
        {`> ${title}`}
      </motion.p>
    </motion.div>
  );
};

export default Card;
