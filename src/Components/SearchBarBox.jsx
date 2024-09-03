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
  const navigate = useNavigate(); // Use navigate for routing

  const fetchData = (value) => {
    fetch("../data.json")
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
        setSelectedItem(-1); // Reset selected item when new results are fetched
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
      e.preventDefault(); // Prevent default behavior like moving the cursor
      setSelectedItem((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent default behavior like moving the cursor
      setSelectedItem((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "Enter" && selectedItem >= 0) {
      e.preventDefault(); // Prevent default form submission or other behavior
      // Perform the action for the selected item
      navigate(`/country/${encodeURIComponent(results[selectedItem].name)}`, {
        state: { result: results[selectedItem] },
      });
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-Navbar text-white"
      } input-wrapper shadow-xl sm:w-80`}>
      <Search id="search-icon" className="ml-6" />
      <input
        placeholder=" Search for a country..."
        className="ml-5"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown} // Attach the onKeyDown handler here
      />
    </div>
  );
};

export default SearchBarBox;
