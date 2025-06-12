import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ getTheme }) => {
  useEffect(() => {
    document.title = "Prasad Portfolio - Home";
  }, []);

  return (
    <RevealOnScroll>
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative ${
          getTheme
            ? "bg-gradient-to-t from-white-900  to-black"
            : "bg-gradient-to-t from-black-900  to-white"
        } overflow-hidden`}
      >
        <div
          className={`z-10 px-4 w-full max-w-5xl md:px-10 text-center ${
            !getTheme ? "text-black" : "text-white"
          }`}
        >
          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl md:max-w-2xl mx-auto ${
              !getTheme ? "text-black" : "text-white"
            }`}
          >
            Hi, I'm Prasad
          </h1>

          <p
            className={` text-lg md:text-xl mb-12 mx-auto max-w-3xl leading-relaxed ${
              !getTheme ? "text-black/500" : "text-white"
            }`}
          >
            I'm a Web developer — passionate about building engaging,
            user-friendly web experiences with clean, performant code.
          </p>

          <div className="flex justify-center">
            <a
              href="#projects"
              className={`border ${
                !getTheme
                  ? "border-black hover:border-black hover:bg-white hover:text-black"
                  : "border-white hover:border-white hover:bg-black hover:text-white"
              }  py-3 px-8 md:px-12 rounded-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              View Projects <span className="text-2xl">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
