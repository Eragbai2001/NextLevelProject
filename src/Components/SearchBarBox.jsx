import React, { useContext, useState } from "react";
import { Search } from "lucide-react";
import "./SearchBarBox.css";
import { ThemeContext } from "../Components/Context/Themecontext";
import { useNavigate } from "react-router-dom";

const SearchBarBox = ({
  setResults,
  setSelectedItem,
  results,
  selectedItem,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchData = (value) => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        setSelectedItem(-1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedItem((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedItem((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedItem >= 0) {
        navigate(`/country/${encodeURIComponent(results[selectedItem].name)}`, {
          state: { result: results[selectedItem] },
        });
      } else if (input) {
        const matchedResult = results.find(
          (result) => result.name.toLowerCase() === input.toLowerCase()
        );
        if (matchedResult) {
          navigate(`/country/${encodeURIComponent(matchedResult.name)}`, {
            state: { result: matchedResult },
          });
        } else {
        }
      }
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-Navbar text-white"
      } input-wrapper shadow-xl sm:w-80  gl:mt-5`}>
      <Search id="search-icon" className="ml-6" />
      <input
        placeholder=" Search for a country..."
        className="ml-5"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBarBox;
