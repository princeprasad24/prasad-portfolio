import "./App.css";

import { LoadingScreen } from "./assets/LoadingScreen";
import { Navbar } from "./assets/Components/Navbar";
import { MobileMenu } from "./assets/Components/MobileMenu";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import { Projects } from "./assets/Components/Projects";
import { Contact } from "./assets/Components/Contact";

import { useState, useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [currentSection, setCurrentSection] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSection(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-900 animation-slide  ${
          loaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 `}
      >
        <Navbar mobileView={mobileView} setMobileView={setMobileView} />
        <MobileMenu mobileView={mobileView} setMobileView={setMobileView} />


        {currentSection === "#home" && <Home />}
        {currentSection === "#about" && <About />}
        {currentSection === "#projects" && <Projects />}
        {currentSection === "#contact" && <Contact />}

        {currentSection !== "#home" &&
          currentSection !== "#about" &&
          currentSection !== "#projects" &&
          currentSection !== "#contact" && <div>404 - Page Not Found</div>}
      </div>
    </>
  );
}

export default App;
