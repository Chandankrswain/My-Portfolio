import { AvatarModel } from "../avatarmodel";

export const Banner = () => {
  return (
    <div className="h-full flex w-full ">
      <AvatarModel />
      <div className="flex flex-col  ">
        <p className="text-2xl font-bold">ABOUT ME</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Banner;
