import tick from "../../assets/tick.png";

export const Alert = () => {
  return (
    <div className=" inset-0 flex justify-center items-center ">
      <div className="flex absolute right-0 items-center  px-8 py-6 rounded-xl shadow-lg">
        <img className="w-24 h-24" src={tick} alt="Success" />
        <h1 className="text-xl font-semibold mt-4">Thank You</h1>
      </div>
    </div>
  );
};

export default Alert;
