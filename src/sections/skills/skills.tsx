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

export const Skills = () => {
  return (
    <div className="mt-30 p-10 flex flex-wrap w-screen ">
      <Card image={html} title={"HTML5"} />
      <Card image={react} title={"REACTJS"} />
      <Card image={css} title={"CSS3"} />
      <Card image={js} title={"JAVASCRIPT"} />
      <Card image={ts} title={"TYPESCRIPT"} />
      <Card image={postman} title={"POSTMAN"} />
      <Card image={vercel} title={"VERCEL"} />
      <Card image={redux} title={"REDUX"} />
      <Card image={next} title={"NEXTJS"} />
      <Card image={tailwind} title={"TAILWIND CSS"} />
    </div>
  );
};

export default Skills;
