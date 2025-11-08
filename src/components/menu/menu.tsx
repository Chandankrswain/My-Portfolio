interface Props {
  onClose: () => void;
}

export const Menu = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#141414] h-screen">
      <div></div>
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-black bg-white p-2 rounded-full text-3xl "
      >
        ✕
      </button>
      <p className="text-9xl font-black">
        <span className="text-2xl">01 </span>HOME
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">02 </span>PROJECTS
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">03 </span>CONTACT ME
      </p>
      <p className="text-9xl font-black">
        <span className="text-2xl">04 </span>SOCIAL
      </p>
    </div>
  );
};

export default Menu;
