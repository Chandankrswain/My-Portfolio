export const Footer = () => {
  return (
    <div className="mt-10">
      <p className="text-[60px] md:text-[250px] text-[#adadad] text-center font-bold">
        @IM.CKAY
      </p>
      <div className="flex md:flex-row flex-col items-center gap-4 justify-between md:mx-20 mb-10">
        <p>Chandan@portfolio:-$ </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          SCROLL TO THE TOP
        </button>
      </div>
    </div>
  );
};

export default Footer;
