import { Footer, Form, Navbar } from "../../components";
import connect from "../../assets/connect.jpg";

export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full mt-10 md:mt-20">
        <p className="text-7xl md:text-[250px] font-extrabold md:leading-55 p-8 md:p-16">
          CONNECT <span className="text-[#adadad]">WITH</span> ME
        </p>
        <Form imageSrc={connect} />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
