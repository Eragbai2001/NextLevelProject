import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Components/Context/Themecontext";
import HashLoader from "react-spinners/HashLoader";
import { MoveLeft } from "lucide-react";

const DescriptivePage = () => {
  const { countryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  useEffect(() => {
    fetch("/data.json")
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color={"white"} loading={loading} size={150} />
      </div>
    );
  }

  const country = data.find(
    (item) => item.name === decodeURIComponent(countryName)
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  const handleClick = (borderCode) => {
    // Find the country that matches the border code (e.g., "USA" => "United States")
    const borderCountry = data.find(
      (country) => country.alpha3Code === borderCode
    ); // assuming alpha3Code is the country code in your data

    if (borderCountry) {
      // Redirect to the new country's page using its name
      navigate(`/country/${encodeURIComponent(borderCountry.name)}`);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-customary-text text-white"
      } pt-40 h-screen px-10`}>
      <Link
        to="/"
        className={`${
          darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
        } text-1xl flex items-center justify-center w-36 py-2 rounded-md shadow-xl`}>
        <MoveLeft className="mr-2" />
        Back
      </Link>
      <h1>{country.name}</h1>
      <p>Native Name: {country.nativeName}</p>
      <p>Top Level Domain: {country.topLevelDomain}</p>
      <p>
        Currencies:{" "}
        {country.currencies.map((currency) => currency.name).join(", ")}
      </p>
      <p>
        Languages:{" "}
        {country.languages.map((language) => language.name).join(", ")}
      </p>

      {/* Render the borders and navigate to the country page on click */}
      {country.borders && country.borders.length > 0 ? (
        country.borders.map((border, index) => (
          <div
            key={index}
            onClick={() => handleClick(border)}
            className={`${
              darkMode
                ? "bg-customary-bg text-black"
                : "bg-custom-bg text-white"
            } text-1xl flex items-center justify-center w-36 py-2 rounded-md shadow-xl m-2 cursor-pointer`}>
            {border}
          </div>
        ))
      ) : (
        <p>No borders available</p>
      )}

      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <img src={country.flags.svg} alt={`Flag of ${country.name}`} />
    </div>
  );
};

export default DescriptivePage;
