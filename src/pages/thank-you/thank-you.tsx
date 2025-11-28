import tick from "../../assets/tick.png";
import { Footer, Navbar } from "../../components";

export const ThankYou = () => {
  return (
    <div className=" w-full h-full my-auto">
      <Navbar />
      <div className="flex flex-col items-center gap-5">
        <img className="w-90 h-90" src={tick} alt="Success" />
        <h1 className="text-9xl font-semibold text-gray-300">Thank You</h1>
        <p className="text-[#adadad] text-2xl">
          Thank you for reaching out. I truly appreciate your time and will
          respond soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
