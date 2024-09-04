import React, { useContext } from "react";
import Togglebutton from "../Togglebutton";
import { ThemeContext } from "../Context/Themecontext";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-Navbar text-white"
      } flex justify-between items-center h-20 px-10p shadow-2xl fixed top-0 left-0 w-full z-50`}>
      <div>
        <h1 className="text-3xl sm:text-xl">Where in the world?</h1>
      </div>
      <div className="flex mx-2">
        <Togglebutton />
      </div>
    </div>
  );
};

export default Navbar;
