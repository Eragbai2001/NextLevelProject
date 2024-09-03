import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";
import SearchBarBox from "../Components/SearchBarBox";
import FilterBox from "../Components/FilterBox";
import SearchResult from "../Components/SearchResult";

const Body = () => {
  const { darkMode } = useContext(ThemeContext);
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } h-screen relative`}>
      <div className="flex justify-between items-center h-28 px-10p mt-20">
        <SearchBarBox
          setResults={setResults}
          setSelectedItem={setSelectedItem}
          results={results}
          selectedItem={selectedItem}
        />
        <FilterBox />
      </div>

      <div className="absolute   px-10p z-30">
        <SearchResult results={results} selectedItem={selectedItem} />
      </div>

      <div></div>
      <h1 className="text-3xl sm:text-xl px-10p">Where in the world?</h1>
    </div>
  );
};

export default Body;
