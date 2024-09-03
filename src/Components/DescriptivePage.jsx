import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Components/Context/Themecontext";

const DescriptivePage = () => {
  const { countryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("/data.json?url")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const country = data.find(
    (item) => item.name === decodeURIComponent(countryName)
  );

  if (!country) {
    return <div>Country not found</div>;
  }

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
