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
    <div className="flex flex-col md:flex-row gap-3 border-b-1 md:mx-30 p-4 md:p-10 border-[#adadad]">
      <p className="md:text-lg text-left font-thin text-[#adadad]">
        ///{index}
      </p>
      <p className="text-xl md:text-7xl font-thin ml-14 w-full text-left">
        {title}
      </p>
      <AnimatedSection classname="md:w-full" variant="slide-left">
        <motion.img
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className="md:w-full object-cover [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%-30px),calc(100%-30px)_100%,0%_100%,0%_30px)] h-[150px]"
          src={image}
          alt=""
          onClick={onClick}
        />
      </AnimatedSection>
    </div>
  );
};

export default ProjectList;
