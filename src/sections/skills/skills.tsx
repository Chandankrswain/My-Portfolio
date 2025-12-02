import { Card } from "../../components";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import ts from "../../assets/typescript.svg";
import postman from "../../assets/postman.svg";
import vercel from "../../assets/vercel.svg";
import redux from "../../assets/redux.svg";
import next from "../../assets/nextjs.svg";
import tailwind from "../../assets/tailwind-css.svg";
import motionicon from "../../assets/Icon.png";
import { motion } from "framer-motion";
import { AnimatedSection } from "../animatedsection";

export const Skills = () => {
  const skills = [
    { image: html, title: "HTML5" },
    { image: react, title: "REACTJS" },
    { image: css, title: "CSS3" },
    { image: js, title: "JAVASCRIPT" },
    { image: ts, title: "TYPESCRIPT" },
    { image: postman, title: "POSTMAN" },
    { image: vercel, title: "VERCEL" },
    { image: redux, title: "REDUX" },
    { image: next, title: "NEXTJS" },
    { image: motionicon, title: "MOTION" },
    { image: tailwind, title: "TAILWIND CSS" },
  ];

  return (
    <div className="flex md:p-10 mt-20 md:mt-30 flex-wrap items-center justify-center overflow-hidden ">
      {skills.map((skill, index) => (
        <motion.div
          initial={{ scale: 0.9 }}
          key={index}
          whileHover={{
            scale: 1,
            border: "1px white solid",
            backgroundColor: "#3c3c3c",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className=" flex flex-col items-center justify-center"
        >
          <AnimatedSection variant="pop">
            <Card title={skill.title} image={skill.image} />
          </AnimatedSection>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
