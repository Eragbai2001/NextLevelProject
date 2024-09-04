import React, { useContext } from "react";
import "./SearchBarBox.css";
import { ThemeContext } from "../Components/Context/Themecontext";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ results, selectedItem }) => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClick = (result) => {
    navigate(`/country/${encodeURIComponent(result.name)}`, {
      state: { result },
    });
  };

  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-Navbar text-white"
      } results-list shadow-xl rounded-lg`}>
      {results.map((result, index) => (
        <div
          key={index}
          className={`result-item ${index === selectedItem ? "active" : ""}`}
          onClick={() => handleClick(result)}
          style={{ cursor: "pointer" }}>
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
