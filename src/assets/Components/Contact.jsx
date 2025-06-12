import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  useEffect(() => {
    document.title = "Prasad Portfolio - Contact";
  }, []);

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
  const public_key = "aORidiTZGt5beCvS_";

  useEffect(() => {
    emailjs.init(public_key);
  }, [public_key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 

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
          console.log(res.status)
        },
        (err) => {
          setIsLoading(false);
          setError(`Something went wrong. Please try again later. ${err}`);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black animation-slide bg-gradient-to-t from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-extrabold mb-10 text-white text-center">
          Contact Me
        </h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl py-10 px-10 border border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-white/20">
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
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-white focus:bg-white/10"
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
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-white focus:bg-white/10"
            />

            <textarea
              name="message"
              value={fromData.message}
              onChange={(e) =>
                setFromData({ ...fromData, message: e.target.value })
              }
              required
              placeholder="Your Message"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-white focus:bg-white/10"
              rows={5}
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-6 rounded font-medium transition hover:bg-gray-200 active:bg-gray-300"
              onClick={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
            {isSubmitted && (
              <p className="text-green-500 text-center mt-3">
                Message sent successfully!
              </p>
            )}
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Follow Me
            </h3>
            <div className="flex justify-center gap-10 rounded-xl border border-white/20 p-4 hover:scale-105 transition-transform duration-300">
              <a
                href="https://www.linkedin.com/in/prasadgaikawada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/princeprasad_1/profilecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100039413592661"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
