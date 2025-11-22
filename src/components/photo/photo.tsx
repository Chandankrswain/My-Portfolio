import myphoto from "../../../public/images/photo.jpg";

export const MyPhoto = () => {
  return (
    <div>
      <p className="text-[120px] text-[#adadad] opacity-20   left-18 absolute">
        Hello!
      </p>
      <img className=" w-[66%] mx-auto mb-10" src={myphoto} />
    </div>
  );
};

export default MyPhoto;
