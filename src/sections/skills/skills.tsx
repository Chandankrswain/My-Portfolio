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
import { motion } from "framer-motion";

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
    { image: tailwind, title: "TAILWIND CSS" },
  ];

  return (
    <div className="flex p-10 mt-30 flex-wrap overflow-hidden w-screen">
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
          <Card title={skill.title} image={skill.image} />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
