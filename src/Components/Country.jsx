import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Country = ({ results = [] }) => {
  const navigate = useNavigate();

  const handleClick = (result) => {
    navigate(`/country/${encodeURIComponent(result.name)}`, {
      state: { result },
    });
  };

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-4 px-10p gap-14 min-h-screen lg:grid-cols-3 gl:grid-cols-2 gl:mt-20 dm:grid-cols-1">
      {results && results.length > 0 ? (
        results.map((result, index) => (
          <div
            key={index}
            onClick={() => handleClick(result)}
            style={{ cursor: "pointer" }}>
            <Card
              className={`${
                darkMode
                  ? "bg-customary-bg text-black"
                  : "bg-custom-bg text-white"
              } max-w-[19rem] overflow-hidden shadow-lg rounded-none `}>
              <CardHeader className="m-0 rounded-none h-48  ">
                <img
                  src={result.flags.svg}
                  alt={`Flag of ${result.name}`}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4">
                <Typography variant="h5" className="font-semibold mb-2">
                  {result.name}
                </Typography>
                <Typography>
                  <strong>Population:</strong>{" "}
                  {result.population.toLocaleString()}
                </Typography>
                <Typography>
                  <strong>Region:</strong> {result.region}
                </Typography>
                <Typography>
                  <strong>Capital:</strong> {result.capital}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))
      ) : (
        <Typography variant="h5" color="red">
          No results found.
        </Typography>
      )}
    </div>
  );
};

export default Country;
