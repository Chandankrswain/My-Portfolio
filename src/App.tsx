import { Footer, Form, Heading, ProgressBar, Quotes } from "./components";
import useGetPosition from "./utils/useGetPosition";
import {
  About,
  HeroSection,
  Projects,
  QuotesHeading,
  QuotesSection,
  Skills,
} from "./sections";
import { motion } from "framer-motion";
import pointerSvg from "./assets/smallcircle.svg";

export default function App() {
  const { x, y } = useGetPosition();

  return (
    <>
      <div className="relative w-screen overflow-hidden cursor-none">
        <HeroSection />
        <Quotes />
        <About />
        <Heading
          classname="bg-orange-500 text-9xl text-[#141414] p-4 skew-y-2 font-black "
          heading="SKILLS & EXPERTISE"
        />
        <Skills />
        <QuotesSection />
        <Heading
          classname="bg-blue-400 text-9xl text-[#141414] p-4 -skew-y-2 font-black "
          heading="PROJECTS GALLERY"
        />
        <Projects />
        <ProgressBar />
        <QuotesHeading />
        <Heading
          classname="bg-yellow-400 text-9xl text-[#141414] p-4 skew-y-2 font-black "
          heading="CONTACT NOW"
        />
        <Form />
        <Footer />
      </div>

      {/* 👇 The moving pointer */}
      <motion.img
        src={pointerSvg}
        alt="Pointer"
        className="pointer-events-none fixed top-0 left-0 w-9 h-9 z-[9999] "
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
    </>
  );
}
