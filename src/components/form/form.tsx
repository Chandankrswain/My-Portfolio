import { Button } from "../button";
import contact from "../../assets/contact.svg";

export const Form = () => {
  return (
    <div className="flex mt-40 px-10 md:px-20 text-white justify-between">
      <div>
        {/* Heading Section */}
        <div className="mb-10">
          <p className="text-5xl font-bold mb-2">GET IN TOUCH!</p>
          <p className="text-2xl font-thin">
            INTERESTED IN WORKING TOGETHER? LET’S CONNECT
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-6 max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert("MESSAGE SENT");
          }}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">NAME</label>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-1 border-gray-500 focus:border-orange-400 focus:outline-none py-6   px-3 text-lg placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">EMAIL</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent border-1 border-gray-500 focus:border-orange-400 focus:outline-none py-6 px-3 text-lg placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-lg font-thin mb-3">MESSAGE</label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              className="bg-transparent border-1 border-gray-500 focus:border-orange-400 focus:outline-none py-6 px-3 text-lg placeholder-gray-400 resize-none transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <Button title="SUBMIT" />
        </form>
      </div>
      <img className="w-[600px] h-[800px] " src={contact} alt="contact" />
    </div>
  );
};

export default Form;
