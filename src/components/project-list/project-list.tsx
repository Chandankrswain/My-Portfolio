import { motion } from "framer-motion";
import { AnimatedSection } from "../../sections";
interface Props {
  index: string;
  title: string;
  image: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

export const ProjectList = ({
  image,
  index,
  title,
  onHoverEnd,
  onHoverStart,
  onClick,
}: Props) => {
  return (
    <div className="flex border-b-1 mx-30 p-10 border-[#adadad]">
      <p className="text-lg text-left font-thin text-[#adadad]">///{index}</p>
      <p className="text-7xl italic font-thin ml-14 w-full text-left">
        {title}
      </p>
      <AnimatedSection classname="w-full" variant="slide-left">
        <motion.img
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className="w-full object-cover [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%-30px),calc(100%-30px)_100%,0%_100%,0%_30px)] h-[150px]"
          src={image}
          alt=""
          onClick={onClick}
        />
      </AnimatedSection>
    </div>
  );
};

export default ProjectList;
