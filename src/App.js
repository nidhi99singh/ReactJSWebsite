import { React, useState, useEffect } from "react";
import "./App.css";
import "./components/Theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import BrandsSection from "./components/Brands";
import Work from "./components/HowItWork";
import SliderSection from "./components/SliderSection";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
function App() {
  // const [theme, setTheme] = useState("light");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`} >
      <Router>
        <Navbar theme={theme} />
        <Theme theme={theme} themeFunction={toggleTheme} />
        <HeroBanner theme={theme} />
        <BrandsSection />
        <Work theme={theme} />
        <SliderSection theme={theme} />
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
