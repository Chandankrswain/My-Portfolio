interface Props {
  index?: string;
  title?: string;
  image?: string;
}

export const ProjectList = ({ image, index, title }: Props) => {
  return (
    <div className="flex border-b-1 mx-30 p-10 border-[#adadad]">
      <p className="text-lg text-left font-thin text-[#adadad]">///{index}</p>
      <p className="text-7xl italic font-thin ml-14 w-full text-left">
        {title}
      </p>
      <img
        className="w-full object-cover [clip-path:polygon(30px_0%,100%_0%,100%_calc(100%-30px),calc(100%-30px)_100%,0%_100%,0%_30px)] h-[150px]"
        src={image}
        alt=""
      />
    </div>
  );
};

export default ProjectList;
