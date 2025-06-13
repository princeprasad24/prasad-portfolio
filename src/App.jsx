import "./App.css";

import { LoadingScreen } from "./assets/LoadingScreen";
import { Navbar } from "./assets/Components/Navbar";
import { MobileMenu } from "./assets/Components/MobileMenu";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import { Projects } from "./assets/Components/Projects";
import { Contact } from "./assets/Components/Contact";
import { ErrorPage } from "./assets/Components/ErrorPage";
import { Footer } from "./assets/Components/Footer";

import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const themeColor = document.getElementById("themeColor");
    if (themeColor) {
      themeColor.setAttribute("content", darkMode ? "#000000" : "#ffffff");
    }

  }, [darkMode]);
  

 
  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-900 animation-slide  ${
          loaded ? "opacity-100" : "opacity-0"
        } 
        ${darkMode ? "bg-black text-gray-100" : "bg-white text-black-100"} `}
      >
        <Navbar
          mobileView={mobileView}
          setMobileView={setMobileView}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <MobileMenu
          mobileView={mobileView}
          setMobileView={setMobileView}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Home getTheme={darkMode} />
        <About getTheme={darkMode} />
        <Projects getTheme={darkMode} />
        <Contact getTheme={darkMode} />
        <Footer getTheme={darkMode} />
      </div>
    </>
  );
}

export default App;
