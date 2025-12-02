import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const QuotesSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="flex flex-col justify-center w-[80%] items-center mt-20 mb-40 gap-10 mx-auto">
      <p className="text-7xl md:text-9xl text-blue-600 font-bold text-center">
        WELCOME TO MY <span className="text-[#adadad]">WORK LOBBY</span>
      </p>
      <p className="text-lg md:text-2xl text-center font-thin tracking-widest text-[#adadad]">
        EXPLORE A COLLECTION OF PROJECTS THAT REFLECT MY PASSION FOR CLEAN CODE
        MODERN DESIGN AND PRACTICAL WEB SOLUTIONS
      </p>
      <Button title="EXPLORE MORE" onClick={handleClick} />
    </div>
  );
};

export default QuotesSection;
