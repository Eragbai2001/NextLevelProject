import React, { useContext } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";
import SearchBarBox from "../Components/SearchBarBox";
import FilterBox from "../Components/FilterBox";

const Body = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } h-screen`}>
      <div className="flex justify-between items-center h-28 px-10p">
        <SearchBarBox />
        <FilterBox />
      </div>
    </div>
  );
};

export default Body;
