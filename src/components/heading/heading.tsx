interface HeadingProps {
  heading?: string;
}

export const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="bg-orange-500 text-9xl text-[#141414] p-4 skew-y-2 font-black ">
      {heading}
    </div>
  );
};

export default Heading;
