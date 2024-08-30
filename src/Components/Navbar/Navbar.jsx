import React, { useContext } from "react";
import "./Navbar.css";
import Togglebutton from "../Togglebutton";
import { ThemeContext } from "../Context/Themecontext";
const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <nav
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-gray-800 text-white"
      } flex justify-between items-center h-28 px-10p shadow-2xl`}>
      <div>
        <h1 className="text-3xl sm:text-xl">Where in the world?</h1>
      </div>
      <div className="flex mx-2">
        <Togglebutton />
      </div>
    </nav>
  );
};

export default Navbar;
