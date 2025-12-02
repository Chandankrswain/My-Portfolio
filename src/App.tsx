import { Footer, Form, Heading, MyPhoto, Quotes } from "./components";
import useGetPosition from "./utils/useGetPosition";
import {
  About,
  AnimatedSection,
  HeroSection,
  Projects,
  QuotesHeading,
  QuotesSection,
  Skills,
} from "./sections";
import { motion } from "framer-motion";
import pointerSvg from "./assets/smallcircle.svg";
import contact from "./assets/contact.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false); // default false
  const { x, y } = useGetPosition();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="relative w-screen overflow-hidden cursor-none">
        <HeroSection />
        <MyPhoto />
        <AnimatedSection variant="slide-left">
          <Quotes />
        </AnimatedSection>
        <AnimatedSection variant="slide-diagonal">
          <About />
        </AnimatedSection>
        <AnimatedSection variant="rotate-rise">
          <Heading
            classname="bg-orange-500 text-9xl text-[#141414] p-4 skew-y-2 font-black "
            heading="SKILLS & EXPERTISE"
          />
        </AnimatedSection>
        <AnimatedSection variant="pop">
          <Skills />
        </AnimatedSection>
        <AnimatedSection variant="zoom-in">
          <QuotesSection />
        </AnimatedSection>
        <AnimatedSection variant="fade-up">
          <Heading
            classname="bg-blue-400 text-9xl text-[#141414] p-4 -skew-y-2 font-black "
            heading="PROJECTS GALLERY"
          />
        </AnimatedSection>
        <AnimatedSection variant="zoom-in">
          <Projects />
        </AnimatedSection>
        <QuotesHeading />
        <AnimatedSection variant="rotate-rise">
          <Heading
            classname="bg-yellow-400 text-9xl text-[#141414] p-4 skew-y-2 font-black "
            heading="CONTACT NOW"
          />
        </AnimatedSection>
        <AnimatedSection variant="fade-up">
          <Form imageSrc={contact} />
        </AnimatedSection>
        <AnimatedSection variant="pop">
          <Footer />
        </AnimatedSection>
      </div>

      {/* Pointer Cursor */}
      {!isMobile && (
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
      )}
    </>
  );
}
