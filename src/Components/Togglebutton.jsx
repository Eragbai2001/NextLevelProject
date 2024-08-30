import React, { useContext } from "react";
import { Moon, SunDim } from "lucide-react";
import { ThemeContext } from "../Components/Context/Themecontext";

const Togglebutton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme} className="flex sm:text-sm">
        {darkMode ? <SunDim className="mx-2" /> : <Moon className="mx-2" />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Togglebutton;
