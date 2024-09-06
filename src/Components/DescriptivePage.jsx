import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Components/Context/Themecontext";
import HashLoader from "react-spinners/HashLoader";
import { MoveLeft } from "lucide-react";
import StyledText from "../Components/Styletext"; // Import the new component

const DescriptivePage = () => {
  const { countryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

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
       <HashLoader color={darkMode ? "white" : "black"} loading={loading} size={150} />

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
    const borderCountry = data.find(
      (country) => country.alpha3Code === borderCode
    );

    if (borderCountry) {
      navigate(`/country/${encodeURIComponent(borderCountry.name)}`);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-customary-lg text-black" : "bg-customary-text text-white"
      } pt-40 h-screen px-10p w-screen`}>
      <Link
        to="/"
        className={`${
          darkMode ? "bg-customary-bg text-black" : "bg-custom-bg text-white"
        } text-1xl flex items-center justify-center w-36 py-2 rounded-md shadow-xl`}>
        <MoveLeft className="mr-2" />
        Back
      </Link>

      <div className="grid grid-cols-2 mt-10 xl:grid-cols-1 ">
        <div className="flex flex-col items-left ">
          <div>
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name}`}
              className="shadow-xl max-w-xl h-96 lg:h-72  sm:max-w-xs md:h-44"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-10">
            <div className="grid grid-cols-2 items-center gap-40 lg:grid-cols-1 lg:gap-0  ">
              <div className="flex flex-col">
                <h1 className="text-4xl  ">{country.name}</h1>
                <p className="mt-2">
                  Native Name: <StyledText>{country.nativeName}</StyledText>
                </p>
                <p>
                  Population:{" "}
                  <StyledText>{country.population.toLocaleString()}</StyledText>
                </p>
                <p>
                  Region: <StyledText>{country.region}</StyledText>
                </p>
                <p>
                  Subregion: <StyledText>{country.subregion}</StyledText>
                </p>
                <p>
                  Capital: <StyledText>{country.capital}</StyledText>
                </p>
              </div>
              <div className="flex flex-col lg:mt-5">
                <div>
                  <p className="mt-2">
                    Top Level Domain:{" "}
                    <StyledText>{country.topLevelDomain}</StyledText>
                  </p>
                  <p>
                    Currencies:{" "}
                    <StyledText>
                      {country.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </StyledText>
                  </p>
                  <p>
                    Languages:{" "}
                    <StyledText>
                      {country.languages
                        .map((language) => language.name)
                        .join(", ")}
                    </StyledText>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-7">
              Border Countries:
              {country.borders && country.borders.length > 0 ? (
                country.borders.slice(0, 3).map((border, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptivePage;
