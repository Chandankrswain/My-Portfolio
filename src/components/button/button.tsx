interface ButtonProps {
  title?: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className="relative px-6 py-3 font-medium text-black bg-white bg-transparent 
                 [clip-path:polygon(10px_0%,100%_0%,100%_calc(100%-10px),calc(100%-10px)_100%,0%_100%,0%_10px)] 
                 hover:bg-blue-900 hover:text-white transition-all duration-500"
    >
      {title}
    </button>
  );
};

export default Button;
