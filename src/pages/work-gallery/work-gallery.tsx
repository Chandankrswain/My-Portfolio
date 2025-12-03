import { motion } from "framer-motion";
import { Footer, Navbar, ProjectList } from "../../components";
import pointerSvg from "../../assets/smallcircle.svg";
import useGetPosition from "../../utils/useGetPosition";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../../sections";
import viewSvg from "../../assets/view.svg";

export const WorkGallery = () => {
  const [isMobile, setIsMobile] = useState(false); // default false
  const { x, y } = useGetPosition();

  const [cursorIcon, setCursorIcon] = useState({ icon: pointerSvg, size: 36 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cursor-none">
      <Navbar />

      <div className="flex flex-col md:mt-30 items-start p-5 md:p-10">
        <AnimatedSection variant="slide-right">
          <p className="md:text-2xl font-thin text-[#adadad] m-2 md:m-6">
            (2025-PRESENT)
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-3 md:flex-row justify-end items-end ">
          <AnimatedSection variant="pop">
            <p className="text-6xl md:text-[180px] md:leading-36 font-extrabold">
              SELECTED PROJECTS
            </p>
          </AnimatedSection>
          <AnimatedSection variant="slide-left">
            <p className="text-lg md:text-xl text-[#adadad] ">
              A curated set of projects that show how I design, build, and
              structure modern web experiences. Each project demonstrates my
              focus on clean interfaces and smooth user interactions.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="md:mt-35 p-5">
        <p className="text-[#adadad]  md:mx-30 mb-10">** PROJECTS LIST **</p>
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
          onClick={() => {
            window.location.href = "https://navi-delhi-metro.vercel.app/";
          }}
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
          onClick={() =>
            (window.location.href =
              "https://my-portfolio-pi-nine-17.vercel.app/")
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
          onClick={() => (window.location.href = "https://type-z.vercel.app/")}
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
          onClick={() =>
            (window.location.href = "https://wordio-omega.vercel.app/")
          }
        />
        <ProjectList
          index="05"
          title="SCOUT GAMES"
          image="/images/scoutgames.png"
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
          onClick={() =>
            (window.location.href = "https://scout-games.vercel.app/")
          }
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
          onClick={() =>
            (window.location.href = "https://todo-list-five-wheat.vercel.app/n")
          }
        />
      </div>
      <Footer />
      {!isMobile && (
        <motion.img
          src={cursorIcon.icon}
          style={{ width: cursorIcon.size, height: cursorIcon.size }} // dynamic size
          alt="Pointer"
          className="pointer-events-none fixed top-0 left-0 z-[9999]"
          animate={{ x: x - cursorIcon.size / 2, y: y - cursorIcon.size / 2 }}
          transition={{ type: "tween", ease: "linear", duration: 0.01 }}
        />
      )}
    </div>
  );
};

export default WorkGallery;
