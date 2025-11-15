import { motion } from "framer-motion";
import { Footer, Navbar, ProjectList } from "../../components";
import pointerSvg from "../../assets/smallcircle.svg";
import useGetPosition from "../../utils/useGetPosition";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../../sections";
import viewSvg from "../../assets/view.svg";

export const WorkGallery = () => {
  const { x, y } = useGetPosition();
  const [cursorIcon, setCursorIcon] = useState({ icon: pointerSvg, size: 36 }); // default
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cursor-none">
      <Navbar />

      <div className="flex flex-col mt-30 items-end p-10">
        <AnimatedSection variant="slide-right">
          <p className="text-2xl font-thin text-[#adadad] m-6">
            (2025-PRESENT)
          </p>
        </AnimatedSection>

        <div className="flex justify-end items-end ">
          <AnimatedSection variant="slide-left">
            <p className="text-xl text-[#adadad] ">
              A curated set of projects that show how I design, build, and
              structure modern web experiences. Each project demonstrates my
              focus on clean interfaces and smooth user interactions.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="pop">
            <p className="text-[180px] leading-36 font-extrabold">
              SELECTED PROJECTS
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="mt-35">
        <p className="text-[#adadad] mx-30 mb-10">PROJECTS LIST</p>
        <ProjectList
          index="01"
          title="NAVI DELHI METRO"
          image="/images/navi-delhi.png"
          onHoverStart={() =>
            setCursorIcon({
              icon: viewSvg,
              size: 80, // w-20 ~ 80px
            })
          }
          onHoverEnd={() =>
            setCursorIcon({
              icon: pointerSvg,
              size: 36, // back to w-9
            })
          }
        />
        <ProjectList
          index="02"
          title="PORTFOLIO"
          image="/images/portfolio.png"
          onHoverStart={() =>
            setCursorIcon({
              icon: viewSvg,
              size: 80, // w-20 ~ 80px
            })
          }
          onHoverEnd={() =>
            setCursorIcon({
              icon: pointerSvg,
              size: 36, // back to w-9
            })
          }
        />
        <ProjectList
          index="03"
          title="TYPEZ"
          image="/images/typez.png"
          onHoverStart={() =>
            setCursorIcon({
              icon: viewSvg,
              size: 80, // w-20 ~ 80px
            })
          }
          onHoverEnd={() =>
            setCursorIcon({
              icon: pointerSvg,
              size: 36, // back to w-9
            })
          }
        />
        <ProjectList
          index="04"
          title="WORDIO"
          image="/images/wordio.png"
          onHoverStart={() =>
            setCursorIcon({
              icon: viewSvg,
              size: 80, // w-20 ~ 80px
            })
          }
          onHoverEnd={() =>
            setCursorIcon({
              icon: pointerSvg,
              size: 36, // back to w-9
            })
          }
        />
        <ProjectList
          index="05"
          title="SCOUT GAMES"
          image="/images/scoutgames.png"
        />
        <ProjectList
          index="06"
          title="2DO"
          image="/images/todo.png"
          onHoverStart={() =>
            setCursorIcon({
              icon: viewSvg,
              size: 80, // w-20 ~ 80px
            })
          }
          onHoverEnd={() =>
            setCursorIcon({
              icon: pointerSvg,
              size: 36, // back to w-9
            })
          }
        />
      </div>
      <Footer />
      <motion.img
        src={cursorIcon.icon}
        style={{ width: cursorIcon.size, height: cursorIcon.size }} // dynamic size
        alt="Pointer"
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        animate={{ x: x - cursorIcon.size / 2, y: y - cursorIcon.size / 2 }}
        transition={{ type: "tween", ease: "linear", duration: 0.01 }}
      />
    </div>
  );
};

export default WorkGallery;
