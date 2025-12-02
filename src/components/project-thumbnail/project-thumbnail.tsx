import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectThumbnailCardProps {
  title?: string;
  textColor?: string;
  bgColor?: string;
  bgImage?: string;
}

export const ProjectThumbnailCard = ({
  title,
  textColor,
  bgColor,
  bgImage,
}: ProjectThumbnailCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-[400px] md:w-[600px] ${textColor} h-[400px]  md:h-[470px] [clip-path:polygon(50px_0%,100%_0%,100%_calc(100%-50px),calc(100%-50px)_100%,0%_100%,0%_50px)] ${bgColor} hover:text-transparent `}
    >
      <div
        className={`absolute bg-center inset-0 ${
          hovered ? "opacity-100" : "opacity-0"
        } bg-cover`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <p className="text-[180px] font-extrabold leading-40">{title}</p>
    </motion.div>
  );
};

export default ProjectThumbnailCard;
