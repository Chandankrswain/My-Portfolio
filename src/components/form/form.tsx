import { useEffect, useRef, useState } from "react";
import { Button } from "../button";

import { Alert } from "../alert";
import { AnimatedSection } from "../../sections";

interface Props {
  imageSrc?: string;
}

export const Form = ({ imageSrc }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitClick = () => {
    if (formRef.current) {
      formRef.current.submit();
      setIsSubmitted(true);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex mt-20 md:mt-40 px-10 md:px-20 gap-10 text-white justify-between">
      <div>
        {/* Heading Section */}
        <AnimatedSection variant="pop">
          {isSubmitted && <Alert />}
        </AnimatedSection>

        <div className="mb-10">
          <p className="text-5xl font-bold mb-2">GET IN TOUCH!</p>
          <p className="text-2xl font-thin">
            INTERESTED IN WORKING TOGETHER? LET’S CONNECT
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          action="https://formsubmit.co/mr.chandanswain@gmail.com"
          method="POST"
          className="flex flex-col gap-6 max-w-2xl"
        >
          {/* disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thank-you"
          />
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent border border-gray-500 focus:border-orange-400 focus:outline-none py-6 px-3 text-lg placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="bg-transparent border border-gray-500 focus:border-orange-400 focus:outline-none py-6 px-3 text-lg placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">MESSAGE</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={5}
              className="bg-transparent border border-gray-500 focus:border-orange-400 focus:outline-none py-6 px-3 text-lg placeholder-gray-400 resize-none transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <Button title="SUBMIT" onClick={handleSubmitClick} />
        </form>
      </div>

      {!isMobile && (
        <img className="w-[600px] h-[800px]" src={imageSrc} alt="contact" />
      )}
    </div>
  );
};

export default Form;
