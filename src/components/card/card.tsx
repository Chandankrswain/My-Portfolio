interface CardProps {
  image: string;
  title: string;
}

export const Card = ({ image, title }: CardProps) => {
  return (
    <div className="w-[340px] h-[340px] flex flex-col justify-between  p-10  border-1 border-[#333333] ">
      <img src={image} alt="" className="h-40 w-40 opacity-20 " />
      <p className="text-2xl text-[#f2f2f2] overflow-hidden">{`> ${title}`}</p>
    </div>
  );
};

export default Card;
