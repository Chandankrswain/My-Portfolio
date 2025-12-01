import { Footer, Form, Navbar } from "../../components";
import connect from "../../assets/connect.jpg";

export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full mt-20">
        <p className="text-[250px] font-extrabold leading-55 p-16">
          CONNECT <span className="text-[#adadad]">WITH</span> ME
        </p>
        <Form imageSrc={connect} />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
