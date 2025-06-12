import { useEffect } from "react";

export const Navbar = ({ mobileView, setMobileView }) => {
  useEffect(() => {
    document.body.style.overflow = mobileView ? "hidden" : "";
  }, [mobileView]);
  return (
    <nav className="font-semibold text-[12.8px] text-white fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Prasad
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMobileView((prev) => !prev)}
          >
            &#9776;
          </div>
 
          <div className="hidden  md:flex items-center space-x-8">
            {/* hover:border hover:border-white hover:outline-2 */}
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors  text-gray border-gray-400 duration-100 shadow-xl p-1  px-2 rounded    "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors   text-gray border-gray-400 duration-100 shadow-xl p-1  px-2 rounded    "
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors   text-gray border-gray-400 duration-100 shadow-xl p-1  px-2 rounded    "
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors   text-gray border-gray-400 duration-100 shadow-xl p-1  px-2 rounded    "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
