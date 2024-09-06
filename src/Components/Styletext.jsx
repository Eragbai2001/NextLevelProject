import React, { useContext } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";

const StyledText = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <span className={darkMode ? "text-black" : "text-slate-300"}>
      {children}
    </span>
  );
};

export default StyledText;