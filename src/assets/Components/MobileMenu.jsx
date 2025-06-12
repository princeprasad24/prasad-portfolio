export const MobileMenu = ({ mobileView, setMobileView }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
  
                       ${
                         mobileView
                           ? "h-screen opacity-100 pointer-events-auto"
                           : "h-0 opacity-0 pointer-events-none"
                       }
                     `}
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
        className={`text-2xl animation-slide font-semibold text-white my-4 transform transition-transform duration-300
                      ${
                        mobileView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }        
              `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMobileView(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                mobileView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }        
      `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMobileView(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                mobileView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }        
      `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMobileView(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                mobileView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }        
      `}
      >
        Contact
      </a>
    </div>
  );
};
