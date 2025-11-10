import online from "../../assets/online.svg";
import { Navbar } from "../../components";
import { motion } from "framer-motion";
export const HeroSection = () => {
  return (
    <div className="flex flex-col h-[780px] justify-between cursor-none">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h4 className="flex">
          <img
            className="mr-2 cursor-none"
            src={online}
            alt="online"
            width={14}
            height={14}
          />
          AVAILABLE FOR WORK
        </h4>
        <div className="flex justify-center flex-col">
          <motion.p
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              delay: 0.3,
            }}
            className="text-9xl font-black"
          >
            CHANDAN KR.
          </motion.p>
          <motion.p
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              delay: 0.5,
            }}
            className="text-9xl font-black"
          >
            SWAIN
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ y: "100px" }}
        animate={{ y: "0px" }}
        transition={{
          type: "tween",
          ease: "linear",
          delay: 0.8,
        }}
        className="flex justify-between p-10"
      >
        <p className="text-xl font-light p-6 text-white">
          &gt; BASED IN INDIA, NEW DELHI
        </p>
        <p className="text-xl font-light  p-6 text-white">
          &gt; FRONT END DEVELOPER{" "}
          <span className="text-[#ababab]">+ WEB DEVELOPER</span>
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
