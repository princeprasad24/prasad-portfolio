import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = ({ getTheme }) => {


  const [fromData, setFromData] = useState({
    user_name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const service_id = "service_6ybecqm";
  const template_id = "template_ih7a4yi";
  const template_id_reply = "template_nxpnmya";
  const public_key = "aORidiTZGt5beCvS_";

  useEffect(() => {
    emailjs.init(public_key);
  }, [public_key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    emailjs.send(service_id, template_id_reply, {
      name: fromData.user_name,
      title: fromData.message,
      email: fromData.email,
    });

    emailjs
      .send(service_id, template_id, {
        name: fromData.user_name,
        title: fromData.message,
        email: fromData.email,
      })
      .then(
        (res) => {
          setIsLoading(false);
          setIsSubmitted(true);
          setFromData({ user_name: "", email: "", message: "" });
          console.log(res.status);
        },
        (err) => {
          setIsLoading(false);
          setError(`Something went wrong. Please try again later. ${err}`);
        }
      );
  };

  return (
    <RevealOnScroll>
      <section
        id="contact"
        className={`min-h-screen flex items-center justify-center py-20 animation-slide ${
          getTheme
            ? "bg-gradient-to-t from-white-900 to-black"
            : "bg-gradient-to-t from-black-900 to-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 w-full">
          <h2
            className={`text-4xl font-extrabold mb-10 text-center ${
              getTheme ? "text-white" : "text-black"
            }`}
          >
            Contact Me
          </h2>

          <div
            className={`bg-white/5 backdrop-blur-md rounded-2xl py-10 px-10 border border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-white/20 ${
              getTheme ? "text-white" : "text-black"
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                value={fromData.user_name}
                onChange={(e) =>
                  setFromData({ ...fromData, user_name: e.target.value })
                }
                required
                placeholder="Enter your Name"
                className={`w-full bg-transparent border rounded px-4 py-3 ${
                  getTheme
                    ? "text-white placeholder-white/70 border-white/20 focus:border-white focus:bg-white/10"
                    : "text-black placeholder-black/70 border-black/20 focus:border-black focus:bg-black/10"
                } transition focus:outline-none`}
              />

              <input
                type="email"
                name="email"
                value={fromData.email}
                onChange={(e) =>
                  setFromData({ ...fromData, email: e.target.value })
                }
                required
                placeholder="Enter your Email"
                className={`w-full bg-transparent border rounded px-4 py-3 ${
                  getTheme
                    ? "text-white placeholder-white/70 border-white/20 focus:border-white focus:bg-white/10"
                    : "text-black placeholder-black/70 border-black/20 focus:border-black focus:bg-black/10"
                } transition focus:outline-none`}
              />

              <textarea
                name="message"
                value={fromData.message}
                onChange={(e) =>
                  setFromData({ ...fromData, message: e.target.value })
                }
                required
                placeholder="Your Message"
                className={`w-full bg-transparent border rounded px-4 py-3 ${
                  getTheme
                    ? "text-white placeholder-white/70 border-white/20 focus:border-white focus:bg-white/10"
                    : "text-black placeholder-black/70 border-black/20 focus:border-black focus:bg-black/10"
                } transition focus:outline-none`}
                rows={5}
              />

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded font-medium transition   ${
                  getTheme
                    ? "bg-black text-white border-black hover:bg-white hover:text-black active:bg-gray-300"
                    : "bg-white text-black border-white hover:bg-black hover:text-white active:bg-gray-900"
                }`}
                onClick={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <p className="text-red-500 text-center mt-3">{error}</p>
              )}
              {isSubmitted && (
                <p className="text-green-500 text-center mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>

            <div className="mt-12 text-center">
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  getTheme ? "text-white" : "text-black"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex justify-center gap-10 rounded-xl border border-white/20 p-4 hover:scale-105 transition-transform duration-300">
                <a
                  href="https://www.linkedin.com/in/prasadgaikawada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-500"
                  } transition-transform transform hover:scale-110`}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/princeprasad_1/profilecard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-500"
                  } transition-transform transform hover:scale-110`}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100039413592661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-500"
                  } transition-transform transform hover:scale-110`}
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://github.com/princeprasad24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-500"
                  } transition-transform transform hover:scale-110`}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
