import { AvatarModel, Button } from "../../components";

export const About = () => {
  return (
    <div className="h-full flex w-full justify-center items-center mb-48 mt-20">
      {/* <AvatarModel /> */}
      <div className="flex flex-col">
        <p className="text-4xl font-extrabold tracking-widest">
          <span className="text-[#adadad]"> &gt;</span> ABOUT
        </p>
        <p className="w-[620px] text-xl font-thin mb-6 m-2 text-[#adadad] leading-11">
          A FRONTEND DEVELOPER WHO LOVES CREATING MODERN AND INTERACTIVE WEB
          EXPERIENCES. WITH A BACKGROUND IN FINANCE I BRING A STRONG FOCUS ON
          DETAIL AND PROBLEM SOLVING TO EVERY PROJECT. MY GOAL IS TO COMBINE
          DESIGN AND FUNCTIONALITY TO BUILD WEB SOLUTIONS THAT STAND OUT AND
          PERFORM SEAMLESSLY.
        </p>
        <Button title="CONTACT ME" />
      </div>
    </div>
  );
};

export default About;
