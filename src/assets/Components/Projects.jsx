import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ getTheme }) => {
  useEffect(() => {
    document.title = "Prasad Portfolio - Projects";
  }, []);

  const projectsCard = [
    {
      title: "Gaming Website",
      desc: "An interactive website that offers fun mini-games such as Memory Game, Rock-Paper-Scissors, Tic-Tac-Toe and more. Designed to provide a playful and engaging user experience.",
      techs: ["HTML", "CSS", "JS"],
      link: "https://vdp-gaming-hub.netlify.app/",
    },
    {
      title: "Weather App",
      desc: "A user-friendly application that displays current weather details for any city entered by the user. It shows key information like temperature, humidity, and weather conditions.",
      techs: ["HTML", "CSS", "React"],
      link: "https://vdp-weather-app.vercel.app/",
    },
    {
      title: "Password Strength Checker",
      desc: "A helpful tool that analyzes the strength of user-entered passwords. Provides real-time feedback on password quality based on length, character variety, and overall security level.",
      techs: ["HTML", "CSS", "React"],
      link: "https://vdp-pwd-strength.vercel.app/",
    },
    {
      title: "To-Do List",
      desc: "A simple and efficient to-do list app to help users manage daily tasks. Users can add, delete, and mark tasks as completed with ease.",
      techs: ["HTML", "CSS", "React"],
      link: "https://vdp-todo-list.vercel.app/",
    },
  ];

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className={`scroll-mt-20 min-h-screen flex items-center py-20 px-6 md:px-12 animation-slide ${
          getTheme
            ? "bg-gradient-to-t from-white-900 to-black"
            : "bg-gradient-to-t from-black-900 to-white"
        }`}
      >
        <div className="max-w-7xl w-full">
          <h2
            className={`text-4xl font-extrabold mb-10 ${
              getTheme ? "text-white" : "text-black"
            } text-left`}
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            {projectsCard.map(({ title, desc, techs, link }) => (
              <div
                key={title}
                className={`${
                  getTheme
                    ? "bg-black/70 border-white/20 text-white hover:border-white/40 hover:shadow-md"
                    : "bg-white/10 border-black/20 text-white hover:border-black/40 hover:shadow-md"
                } p-6 rounded-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    getTheme ? "text-white" : "text-black"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    getTheme ? "text-gray-300" : "text-gray-700"
                  } mb-4`}
                >
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className={`${
                        getTheme
                          ? "bg-white/10 text-white hover:bg-black hover:shadow-white/30"
                          : "bg-black/10 text-black hover:bg-white hover:shadow-black/30"
                      } py-1 px-3 rounded-xl text-sm font-medium shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  } transition-color`}
                >
                  <div
                    className={`flex items-center gap-3 border rounded-xl px-6 py-2 ${
                      getTheme
                        ? "border-white/50 hover:border-black/50 hover:bg-white hover:text-black hover:shadow-white"
                        : "border-black/50 hover:border-white/50 hover:bg-black hover:text-white hover:shadow-black"
                    }`}
                  >
                    View Project <span className="text-2xl">&rarr;</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
