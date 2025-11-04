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
    <div className="flex w-[80%]  ">
      <p>{heading}</p>
      <ProjectThumbnailCard
        title={title}
        textColor={textColor}
        bgColor={bgColor}
        bgImage={bgImage}
      />
      <p className="pl-2 mt-20 text-4xl font-semibold ">{description}</p>
    </div>
  );
};

export default ProjectCard;
