import { ProjectCard } from "../../../components";

export const LeftCard = () => {
  return (
    <div>
      <ProjectCard
        heading="PROJECT [1]"
        title="NAVI DELHI METRO"
        textColor="text-[#8a0666]"
        bgColor="bg-[#ffabea]"
        bgImage="/images/navi-delhi.png"
        description="Plan your journey effortlessly with real-time routes, fare details, and metro updates"
      />
    </div>
  );
};

export default LeftCard;
