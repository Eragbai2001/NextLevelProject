import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider, ThemeContext } from "./Components/Context/Themecontext";
import Body from "./Components/Body";
function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

const Content = () => {
  // Use the useContext hook to access darkMode and toggleTheme from ThemeContext
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
