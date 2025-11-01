import Time from "../localtime/localtime";
import menudots from "../../assets/menudots.svg";
import { Button } from "../button";

export const Navbar = () => {
  return (
    <div className="h-20 p-14 flex justify-between items-center">
      <h2 className="flex">
        <Time />
      </h2>
      <img className="mr-6" src={menudots} alt="Logo" width={60} height={60} />
      <Button title="Resume" />
    </div>
  );
};

export default Navbar;
