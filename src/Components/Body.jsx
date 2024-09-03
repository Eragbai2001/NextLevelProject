import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";
import SearchBarBox from "../Components/SearchBarBox";
import FilterBox from "../Components/FilterBox";
import SearchResult from "../Components/SearchResult";
import HashLoader from "react-spinners/HashLoader"; // Import HashLoader

const Body = () => {
  const { darkMode } = useContext(ThemeContext);
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate data fetching with useEffect
  React.useEffect(() => {
    // Mock a data fetching delay
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is "fetched"
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color={darkMode ? "#000000" : "#ffffff"} loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } h-screen relative`}
    >
      <div className="flex justify-between items-center h-28 px-10p mt-20">
        <SearchBarBox
          setResults={setResults}
          setSelectedItem={setSelectedItem}
          results={results}
          selectedItem={selectedItem}
        />
        <FilterBox />
      </div>

      <div className="absolute px-10p z-30">
        <SearchResult results={results} selectedItem={selectedItem} />
      </div>

      <h1 className="text-3xl sm:text-xl px-10p">Where in the world?</h1>
    </div>
  );
};

export default Body;
