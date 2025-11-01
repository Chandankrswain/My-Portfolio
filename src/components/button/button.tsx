interface ButtonProps {
  title?: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <div>
      <button className="relative border-1 border-white px-6 py-3 font-medium ">
        {title}
      </button>
    </div>
  );
};

export default Button;
