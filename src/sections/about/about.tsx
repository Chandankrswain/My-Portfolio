import { Button } from "../../components";

export const About = () => {
  return (
    <div className="h-full flex flex-col md:flex-row w-full justify-center border border-[#495057] items-center mb-52 mt-30">
      <div className="flex flex-col md-flex-row ">
        <div className="md:w-[85%] border border-[#495057] flex flex-col justify-between p-6">
          <div className="w-10 h-8 rounded-full bg-white mb-6"></div>
          <p className=" text-lg md:text-2xl font-thin mb-6 m-2 text-[#adadad] p-6">
            A FRONTEND DEVELOPER WHO LOVES CREATING MODERN AND INTERACTIVE WEB
            EXPERIENCES. WITH A BACKGROUND IN FINANCE I BRING A STRONG FOCUS ON
            DETAIL AND PROBLEM SOLVING TO EVERY PROJECT. MY GOAL IS TO COMBINE
            DESIGN AND FUNCTIONALITY TO BUILD WEB SOLUTIONS THAT STAND OUT AND
            PERFORM SEAMLESSLY.
          </p>
        </div>

        <div className="flex flex-col items-end text-right p-8">
          <p className="text-7xl md:text-9xl font-extrabold mb-6">
            BEHIND THE CODE
          </p>
          <Button title="CONTACT ME" />
        </div>
      </div>
    </div>
  );
};

export default About;
