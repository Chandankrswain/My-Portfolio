import { ProjectThumbnailCard } from "../project-thumbnail";

export interface ProjectCardProps {
  heading?: string;
  title: string;
  textColor: string;
  bgColor: string;
  description: string;
  bgImage?: string;
}

export const ProjectCard = ({
  heading,
  title,
  textColor,
  bgColor,
  description,
  bgImage,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row w-[80%] gap-2  ">
      <p>{heading}</p>
      <ProjectThumbnailCard
        title={title}
        textColor={textColor}
        bgColor={bgColor}
        bgImage={bgImage}
      />
      <p className="pl-2 mt-4 md:mt-20 w-[200px] md:w-full text-lg md:text-4xl font-semibold ">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
