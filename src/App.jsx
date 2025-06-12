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

import { useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [mobileView, setMobileView] = useState(false);

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
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
