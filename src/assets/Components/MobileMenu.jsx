import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = ({ mobileView, setMobileView, darkMode, setDarkMode }) => {
  const changeMode = () => setDarkMode((prev) => !prev);
  

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${
                    mobileView
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
    >
      <button
        onClick={() => setMobileView(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMobileView(false)}
        className={`text-xl font-semibold text-white my-4 transition-colors duration-200
                    ${darkMode ? "text-black" : "text-white"}
                    hover:text-white`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMobileView(false)}
        className={`text-xl font-semibold text-white my-4 transition-colors duration-200
                    ${darkMode ? "text-black" : "text-white"}
                    hover:text-white`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMobileView(false)}
        className={`text-xl font-semibold text-white my-4 transition-colors duration-200
                    ${darkMode ? "text-black" : "text-white"}
                    hover:text-white`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMobileView(false)}
        className={`text-xl font-semibold text-white my-4 transition-colors duration-200
                    ${darkMode ? "text-black" : "text-white"}
                    hover:text-white`}
      >
        Contact
      </a>

      <div
        onClick={() => {
          changeMode();
          setMobileView(false);
        }}
        className={`mt-4 p-2 cursor-pointer rounded-full transition-colors duration-200
                    ${
                      darkMode
                        ? "text-black bg-white"
                        : "text-gray-300 bg-gray-800"
                    }`}
      >
        {darkMode ? "Light Theme" : "Dark Mode"}
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="text-2xl"
        />
      </div>
    </div>
  );
};
