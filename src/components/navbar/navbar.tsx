import Time from "../localtime/localtime";
import menudots from "../../assets/menudots.svg";
import { Button } from "../button";
import { useState } from "react";
import Menu from "../menu/menu";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="h-20 p-14 flex justify-between items-center relative ">
      <h2 className="flex">
        <Time />
      </h2>

      <motion.img
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.2, ease: "easeInOut" }} // smooth animation
        className="mr-6 cursor-none"
        src={menudots}
        alt="Menu"
        onClick={handleClick}
        width={60}
        height={60}
      />

      <Button title="RESUME" />

      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-50">
            <Menu onClose={() => setIsActive(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
