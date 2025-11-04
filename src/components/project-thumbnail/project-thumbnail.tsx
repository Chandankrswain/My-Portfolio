interface ProjectThumbnailCardProps {
  title?: string;
  textColor?: string;
  bgColor?: string;
}

export const ProjectThumbnailCard = ({
  title,
  textColor,
  bgColor,
}: ProjectThumbnailCardProps) => {
  return (
    <div
      className={`w-[600px] ${textColor} h-[470px] [clip-path:polygon(50px_0%,100%_0%,100%_calc(100%-50px),calc(100%-50px)_100%,0%_100%,0%_50px)] ${bgColor} hover:bg-[url('/images/navi-delhi.png')] hover:text-transparent bg-cover`}
    >
      <p className="text-[180px] font-extrabold leading-40">{title}</p>
    </div>
  );
};

export default ProjectThumbnailCard;
