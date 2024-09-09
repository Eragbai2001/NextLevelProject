import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by ");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilter = (region) => {
    setSelectedRegion(region);
    if (region === "Filter by ") {
      setFilteredCountries(countriesData);
    } else {
      setFilteredCountries(
        countriesData.filter((country) => country.region === region)
      );
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        filteredCountries,
        handleFilter,
        selectedRegion,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
