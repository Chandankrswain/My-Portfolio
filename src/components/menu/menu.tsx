import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export const Menu = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const current = location.pathname; // ← current active route

  const itemClass = (path: string) =>
    `text-9xl font-black cursor-pointer transition-colors duration-300 ${
      current === path ? "text-[#FF4D4D]" : "text-white"
    }`;

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        type: "spring",
        damping: 16,
        duration: 0.3,
      }}
      className="flex flex-col items-center justify-center bg-[#141414] h-screen text-white relative overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-black bg-white p-2 rounded-full text-3xl"
      >
        ✕
      </button>

      <p onClick={() => navigate("/")} className={itemClass("/")}>
        <span className="text-2xl">01 </span>HOME
      </p>

      <p
        onClick={() => navigate("/projects")}
        className={itemClass("/projects")}
      >
        <span className="text-2xl">02 </span>PROJECTS
      </p>

      <p onClick={() => navigate("/contact")} className={itemClass("/contact")}>
        <span className="text-2xl">03 </span>CONTACT ME
      </p>
    </motion.div>
  );
};

export default Menu;
