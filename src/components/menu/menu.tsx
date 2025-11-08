import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export const Menu = ({ onClose }: Props) => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }} // starts above the screen
      animate={{ y: 0, opacity: 1 }} // slides into view
      exit={{ y: "-100%", opacity: 0 }} // exits down
      transition={{
        type: "spring", // smooth & bouncy motion
        stiffness: 70,
        damping: 16,
        duration: 0.8,
      }}
      className="flex flex-col items-center justify-center bg-[#141414] h-screen text-white relative overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-black bg-white p-2 rounded-full text-3xl"
      >
        ✕
      </button>

      <p className="text-9xl font-black">
        <span className="text-2xl">01 </span>HOME
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">02 </span>PROJECTS
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">03 </span>CONTACT ME
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">04 </span>SOCIAL
      </p>
    </motion.div>
  );
};

export default Menu;
