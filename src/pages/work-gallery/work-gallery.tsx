import { motion } from "framer-motion";
import { Footer, Navbar, ProjectList } from "../../components";
import pointerSvg from "../../assets/smallcircle.svg";
import useGetPosition from "../../utils/useGetPosition";

export const WorkGallery = () => {
  const { x, y } = useGetPosition();

  return (
    <div className="cursor-none">
      <Navbar />
      <div className="flex flex-col mt-30 items-end p-10">
        <p className="text-2xl font-thin text-[#adadad] m-6">(2025-PRESENT)</p>
        <div className="flex justify-end items-end ">
          <p className="text-xl text-[#adadad] ">
            A curated set of projects that show how I design, build, and
            structure modern web experiences. Each project demonstrates my focus
            on clean interfaces and smooth user interactions.
          </p>
          <p className="text-[180px] leading-36 font-extrabold">
            SELECTED PROJECTS
          </p>
        </div>
      </div>

      <div className="mt-35">
        <p className="text-[#adadad] mx-30 mb-10">PROJECTS LIST</p>
        <ProjectList
          index="01"
          title="NAVI DELHI METRO"
          image="/images/navi-delhi.png"
        />
        <ProjectList
          index="02"
          title="PORTFOLIO"
          image="/public/images/portfolio.png"
        />
        <ProjectList index="03" title="TYPEZ" image="/images/typez.png" />
        <ProjectList index="04" title="WORDIO" image="/images/wordio.png" />
        <ProjectList
          index="05"
          title="SCOUT GAMES"
          image="/images/scoutgames.png"
        />
        <ProjectList index="06" title="2DO" image="/images/todo.png" />
      </div>
      <Footer />
      <motion.img
        src={pointerSvg}
        alt="Pointer"
        className="pointer-events-none fixed top-0 left-0 w-9 h-9 z-[9999]"
        animate={{
          x: x - 15,
          y: y - 10,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.01,
        }}
      />
    </div>
  );
};

export default WorkGallery;
