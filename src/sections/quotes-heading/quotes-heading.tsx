import { Button } from "../../components";

export const QuotesHeading = () => {
  return (
    <div>
      <div className="flex flex-end w-full justify-between p-10">
        <div className="w-full flex">
          <Button title="LINKEDIN" />
          <Button title="GITHUB" />
          <Button title="GMAIL" />
        </div>

        <p className="text-9xl text-right italic">
          SOLVING{" "}
          <span className="text-[#adadad] font-extrabold ">REAL PROBLEMS</span>{" "}
          WITH ELEGANT{" "}
          <span className="text-[#adadad] font-extrabold">INTERFACES</span>.
        </p>
      </div>
    </div>
  );
};
//Solving real problems with elegant interfaces.
export default QuotesHeading;
