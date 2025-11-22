import myphoto from "/images/photo.jpg";

export const MyPhoto = () => {
  return (
    <div className=" mt-20">
      <p className="text-[120px] text-[#adadad] opacity-30 left-18 absolute z-50">
        Hello!
      </p>
      <img
        className=" w-[66%] mx-auto mb-10 [clip-path:polygon(70px_0%,100%_0%,100%_calc(100%-70px),calc(100%-70px)_100%,0%_100%,0%_70px)]"
        src={myphoto}
      />
    </div>
  );
};

export default MyPhoto;
