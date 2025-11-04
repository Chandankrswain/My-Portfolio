import { ProjectCard } from "../../components";

export const Projects = () => {
  return (
    <div className="mt-30 p-20 flex gap-30">
      <ProjectCard
        heading="PROJECT [1]"
        title="NAVI DELHI METRO"
        textColor="text-[#8a0666]"
        bgColor="bg-[#ffabea]"
        description="Plan your journey effortlessly with real-time routes, fare details, and metro updates"
      />
    </div>
  );
};

export default Projects;
