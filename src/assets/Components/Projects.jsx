import { useEffect } from "react";

export const Projects = () => {
    useEffect(() => {
      document.title = "Prasad Protfolio - Projects";
    });
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
    <section
      id="projects"
      className="min-h-screen flex items-center bg-black py-20 px-6 md:px-12 animation-slide bg-gradient-to-t from-gray-900 to-black"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-extrabold mb-10 text-white text-left">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
          {projectsCard.map(({ title, desc, techs, link }) => (
            <div
              key={title}
              className="bg-black/70 p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-white/40 hover:shadow-md hover:shadow-white/20 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white py-1 px-3 rounded-xl text-sm font-medium shadow-sm  hover:bg-black  hover:shadow-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white-900 hover:text-white-300 transition-color  "
              >
                <div className="flex items-center gap-3 border border-white/50 text-white rounded-xl px-6 py-2 hover:border-black/50 hover:bg-white hover:text-black hover:shadow-white">
                  View Project <span className="text-2xl">&rarr;</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
