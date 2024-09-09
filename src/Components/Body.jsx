import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";
import SearchBarBox from "../Components/SearchBarBox";
import FilterBox from "../Components/FilterBox";
import SearchResult from "../Components/SearchResult";
import HashLoader from "react-spinners/HashLoader";
import Country from "../Components/Country";

const Body = () => {
  const { darkMode } = useContext(ThemeContext);
  const [results, setResults] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started");
    setTimeout(() => {
      console.log("Loading finished");
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setResult(data); // Set the data into the state
        setIsLoading(false); // Stop loading when the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color={"black"} loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } min-h-screen relative`}>
      <div className="flex justify-between items-center h-28 px-10p mt-20 gl:flex-wrap ">
        <SearchBarBox
          setResults={setResults}
          setSelectedItem={setSelectedItem}
          results={results}
          selectedItem={selectedItem}
        />
        <FilterBox darkMode={darkMode} />
      </div>

      <div className="absolute px-10p z-30">
        <SearchResult results={results} selectedItem={selectedItem} />
      </div>
      <div>
        {isLoading ? <h1>Loading...</h1> : <Country results={result} />}
      </div>
    </div>
  );
};

export default Body;
