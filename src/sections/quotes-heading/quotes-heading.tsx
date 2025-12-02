import { Button } from "../../components";
import { AnimatedSection } from "../animatedsection";

export const QuotesHeading = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full justify-between gap-10 p-10 mb-38">
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0">
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
          <p className="text-5xl md:text-9xl text-right italic">
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
