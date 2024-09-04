import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider, ThemeContext } from "./Components/Context/Themecontext";
import Body from "./Components/Body";
import DescriptivePage from "./Components/DescriptivePage";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
};

const MainContent = () => {
  const { darkMode } = useContext(ThemeContext);

  const showNavbar = true;

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/country/:countryName" element={<DescriptivePage />} />
      </Routes>
    </div>
  );
};

export default App;