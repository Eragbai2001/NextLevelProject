import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Components/Context/Themecontext";
import HashLoader from "react-spinners/HashLoader"; // Import HashLoader

const DescriptivePage = () => {
  const { countryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  // Fetch data on mount
  useEffect(() => {
    fetch("/data.json") // Adjusted URL if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color={darkMode ? "#000000" : "#ffffff"} loading={loading} size={150} />
      </div>
    );
  }

  // Find the country by name
  const country = data.find((item) => item.name === decodeURIComponent(countryName));

  // If country is not found
  if (!country) {
    return <div>Country not found</div>;
  }

  // Render country details
  return (
    <div
      className={`${
        darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
      } mt-20 h-screen`}
    >
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