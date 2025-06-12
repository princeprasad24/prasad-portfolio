import { useEffect } from "react";

export const Home = () => {

  useEffect(()=>{
    document.title = "Prasad Protfolio - Home"
  })
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-black animation-slide bg-gradient-to-t from-gray-900 to-black"
    >
      <div className="z-10 px-6 w-full max-w-4xl md:px-10">
        <h1 className="text-5xl pl-3 md:text-7xl font-extrabold mb-6 border-b-4 border-white pb-4 leading-tight text-white drop-shadow-md text-left">
          Hi, I'm Prasad
        </h1>

        <p className="text-gray-300 pl-5 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed text-left">
          I'm a frontend developer — a passionate front-end developer focused on
          building engaging, user-friendly web experiences.
        </p>

        <div className="flex justify-start space-x-6">
          <a
            href="#projects"
            className="border border-white hover:border-black hover:bg-white hover:text-black ml-7  flex  gap-3 items-center transition-colors duration-300 text-white py-3 px-10 rounded font-semibold shadow-lg transition-transform hover:shadow-white/30"
          >
            View Projects <span className="text-2xl">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
