import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Components/Context/Themecontext";
import HashLoader from "react-spinners/HashLoader"; // Import HashLoader
import data from "../data.json"; // Import data directly from src

const DescriptivePage = () => {
  const { countryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // Fetch data on mount
  useEffect(() => {
    setLoading(true);
    const foundCountry = data.find(
      (item) => item.name === decodeURIComponent(countryName)
    );
    if (foundCountry) {
      setCountry(foundCountry);
    }
    setLoading(false);
  }, [countryName]);

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color={"white"} loading={loading} size={150} />
      </div>
    );
  }

  // If country is not found
  if (!country) {
    return <div>Country not found</div>;
  }

  // Render country details
  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } mt-20 h-screen`}>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <img src={country.flags.svg} alt={`Flag of ${country.name}`} />
      {/* Add more details as needed */}
    </div>
  );
};

export default DescriptivePage;
