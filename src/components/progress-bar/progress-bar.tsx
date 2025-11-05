export const ProgressBar = () => {
  return (
    <div className=" w-[70%] flex flex-col mx-auto">
      <div className="h-[1px] bg-gray-300"></div>
      <div className="flex justify-between text-white mt-3">
        <p>[1/3]</p>
        <p>VIEW ALL PROJECTS</p>
      </div>
    </div>
  );
};

export default ProgressBar;
