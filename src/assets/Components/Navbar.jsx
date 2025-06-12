import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ mobileView, setMobileView, setTheme }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode((prev) => !prev);
    setTheme((prev) => !prev); // Toggle global theme
  };

  useEffect(() => {
    document.body.style.overflow = mobileView ? "hidden" : "";

    // Apply the dark mode class to the body element
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mobileView, darkMode]);

  return (
    <nav className="font-semibold text-[12.8px] fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className={`font-mono text-xl font-bold ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            Prasad
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMobileView((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={` hover:text-white transition-colors ${
                darkMode ? "text-black" : "text-white"
              } border-gray-400 duration-100 shadow-xl p-1 px-2 rounded`}
            >
              Home
            </a>
            <a
              href="#about"
              className={` hover:text-white transition-colors ${
                darkMode ? "text-black" : "text-white"
              } border-gray-400 duration-100 shadow-xl p-1 px-2 rounded`}
            >
              About
            </a>
            <a
              href="#projects"
              className={` hover:text-white transition-colors ${
                darkMode ? "text-black" : "text-white"
              } border-gray-400 duration-100 shadow-xl p-1 px-2 rounded`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hover:text-white transition-colors ${
                darkMode ? "text-black" : "text-gray/900 "
              } border-gray-400 duration-100 shadow-xl p-1 px-2 rounded`}
            >
              Contact
            </a>

            <div onClick={changeMode}>
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className={` ${
                  darkMode ? "text-black" : "text-gray"
                } duration-100 shadow-xl p-1 px-2 `}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
