import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeModal from "./ThemeModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="w-full bg-white h-20 flex items-center justify-between px-4 lg:px-10 py-4 relative bg-blend-multiply">
      {/* logo */}
      <div className="flex justify-center items-center gap-4">
        <img
          src="assets/images/pokeCover.svg"
          alt="Poke Cover"
          className="w-36 mt-8 hidden lg:block"
        />
        <Link
          to="/"
          className="text-lg lg:text-2xl font-semibold font-clash cursor-pointer"
        >
          Poke<span className="text-primary">book</span>
        </Link>
      </div>
      {/* search */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex items-center justify-center w-1/5 ">
        <div className="navSearch">
          <MagnifyingGlassIcon className="w-5 text-g100 mr-4 cursor-pointer" />
          <input
            type="text"
            placeholder="Enter pokeman name"
            className="lg:text-lg w-4/5 lg:w-3/4 py-2 focus:outline-none"
          />
        </div>
      </div>
      {/* theme */}
      <div className="border-gray border rounded-full flex items-center justify-center cursor-pointer">
        <div
          onClick={() => handleOpen()}
          className="bg-primary w-8 h-8 m-1 rounded-full"
        />
      </div>
      <ThemeModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
