import { Button } from "../../components";

export const QuotesSection = () => {
  return (
    <div className="flex flex-col justify-center w-[80%] items-center mt-20 mb-20 gap-10 mx-auto">
      <p className="text-9xl text-blue-600 font-bold text-center">
        WELCOME TO MY <span className="text-[#adadad]">WORK LOBBY</span>
      </p>
      <p className="text-2xl text-center font-thin tracking-widest text-[#adadad]">
        EXPLORE A COLLECTION OF PROJECTS THAT REFLECT MY PASSION FOR CLEAN CODE
        MODERN DESIGN AND PRACTICAL WEB SOLUTIONS
      </p>
      <Button title="EXPLORE MORE" />
    </div>
  );
};

export default QuotesSection;
