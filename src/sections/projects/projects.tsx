import { ProjectCard } from "../../components";

export const Projects = () => {
  return (
    <div className="flex mt-40 p-16 gap-20">
      <ProjectCard
        heading="PROJECT [1]"
        title="NAVI DELHI METRO"
        textColor="text-[#8a0666]"
        bgColor="bg-[#ffabea]"
        bgImage="/images/navi-delhi.png"
        description="Plan your journey effortlessly with real-time routes, fare details, and metro updates"
      />
      <ProjectCard
        heading="PROJECT [2]"
        title="WORDIO APP"
        textColor="text-[#004d40]"
        bgColor="bg-[#a7ffeb]"
        bgImage="/images/wordio.png"
        description="Wordio is a modern and user-friendly Dictionary and Translation App."
      />
      <ProjectCard
        heading="PROJECT [3]"
        title="TYPEZ APP"
        textColor="text-[#ffffff]"
        bgColor="bg-[#6200ea]"
        bgImage="/images/typez.png"
        description="TypeZ is designed to boost your speed, accuracy, and efficiency while making typing fun & engaging."
      />
    </div>
  );
};
