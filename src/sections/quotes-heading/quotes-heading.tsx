import { Button } from "../../components";
import { AnimatedSection } from "../animatedsection";

export const QuotesHeading = () => {
  return (
    <div>
      <div className="flex flex-end w-full justify-between p-10 mb-38">
        <div className="w-full flex">
          <Button
            title="LINKEDIN"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/chandan-kumar-swain-3b6674141/";
            }}
          />
          <Button
            title="GITHUB"
            onClick={() => {
              window.location.href = "https://github.com/Chandankrswain";
            }}
          />
          <Button
            title="GMAIL"
            onClick={() => {
              window.open("mailto:mr.chandanswain@gmail.com", "_blank");
            }}
          />
        </div>

        <AnimatedSection variant="slide-left">
          <p className="text-9xl text-right italic">
            SOLVING{" "}
            <span className="text-[#adadad] font-extrabold ">
              REAL PROBLEMS
            </span>{" "}
            WITH ELEGANT{" "}
            <span className="text-[#adadad] font-extrabold">INTERFACES</span>.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default QuotesHeading;
