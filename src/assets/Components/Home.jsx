import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  useEffect(() => {
    document.title = "Prasad Portfolio - Home";
  });

  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-t from-white-900 via-black to-black overflow-hidden"
      >
        <div className="z-10 px-4 w-full max-w-5xl md:px-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl md:max-w-2xl mx-auto">
            Hi, I'm Prasad
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 mx-auto max-w-3xl leading-relaxed">
            I'm a Web developer — passionate about building engaging,
            user-friendly web experiences with clean, performant code.
          </p>

          <div className="flex justify-center">
            <a
              href="#projects"
              className="border border-white hover:border-black hover:bg-white hover:text-black py-3 px-8 md:px-12 text-white rounded-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View Projects <span className="text-2xl">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
