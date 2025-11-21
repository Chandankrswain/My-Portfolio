import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ProgressBarProps {
  active: number; // 1, 2, 3
  total: number;
}

export const ProgressBar = ({ active, total }: ProgressBarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <div className="w-[80%] flex flex-col mx-auto mb-10">
      {/* Line */}
      <div className="h-[1px] bg-gray-300 rounded-full relative overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          animate={{ width: `${(active / total) * 100}%` }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Text */}
      <div className="flex justify-between text-white mt-3">
        <p>
          [{active}/{total}]
        </p>
        <p onClick={handleClick}>VIEW ALL PROJECTS</p>
      </div>
    </div>
  );
};
