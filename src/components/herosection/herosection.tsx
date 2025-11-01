import { Navbar } from "../navbar";
import online from "../../assets/online.svg";

export const HeroSection = () => {
  return (
    <div className="flex flex-col h-[90%] justify-between">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h4 className="flex">
          <img
            className="mr-2"
            src={online}
            alt="online"
            width={14}
            height={14}
          />
          AVAILABLE FOR WORK
        </h4>
        <div className="flex justify-center flex-col">
          <p className="text-9xl font-black">CHANDAN KR.</p>
          <p className="text-9xl font-black">SWAIN</p>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <p className="text-md font-thin p-10 text-[#ababab]">
          &gt; BASED IN INDIA, NEW DELHI
        </p>
        <p className="text-md font-thin p-10 text-[#ababab]">
          &gt; FRONT END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
