import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    useEffect(()=>{
        document.title = "Prasad Protfolio - About"
    },[])

    const SkillCard = ({ title, skills }) => (
      <div className="p-6 rounded-xl bg-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-md max-w-full">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((label) => (
            <SkillBadge key={label} label={label} />
          ))}
        </div>
      </div>
    );

    const SkillBadge = ({ label }) => (
      <span className="bg-white/10 text-white py-1 px-3 rounded-full text-sm font-medium shadow-sm hover:bg-black hover:shadow-white/30">
        {label}
      </span>
    ); 

  return (
    <RevealOnScroll>
      <section
        id="about"
        className="min-h-screen flex items-center bg-black py-20 px-6 md:px-12 animation-slide bg-gradient-to-t from-white-900 to-black"
      >
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl font-extrabold mb-10 text-white text-left">
            About Me
          </h2>
  
          <div className="bg-white/5 backdrop-blur-md rounded-2xl py-10 px-10 shadow-lg max-w-full">
            <p className="text-gray-300 mb-8 leading-relaxed text-base text-left max-w-4xl">
              Passionate front-end developer focused on building engaging,
              user-friendly web experiences. I also work with Python and Java for
              backend logic and scripting, and I'm always exploring new tools and
              technologies to grow my skills.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <SkillCard title="Frontend" skills={["HTML5", "CSS3", "React"]} />
              <SkillCard
                title="Backend"
                skills={["Node.js", "Python", "Express.js"]}
              />
              <SkillCard
                title="Database"
                skills={["MongoDB", "Mongoose", "Xmapp"]}
              />
              <SkillCard
                title="Tools & Platforms"
                skills={["Git", "GitHub", "Postman"]}
              />
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};


