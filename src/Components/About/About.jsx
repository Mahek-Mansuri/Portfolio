// About.js
import React, { useEffect, useContext } from "react";
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TypeIt from "typeit-react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlutter,
  faHtml5,
  faJsSquare,
  faReact,
  faGithub,
  faTelegram,
  faUpwork,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    if (id === 'contact') {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('contact:retype'));
      }, 40);
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="about-section flex flex-col items-center py-12 px-4 md:px-12 lg:px-24"
      style={{
        background: theme === "dark" ? "#111827" : "#f8fafc",
        color: theme === "dark" ? "#e2e8f0" : "#1e293b",
      }}
      id="about"
    >
      {/* Section Header */}
      <div className="w-full max-w-6xl mb-12 text-center" data-aos="fade-up">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-cyan-400" : ""}`}
          style={{ color: theme === "dark" ? "" : "#0e7490" }}>
          About Me
        </h2>
        <div className={`w-24 h-1 mx-auto mb-6 ${theme === "dark" ? "bg-cyan-500" : "bg-cyan-700"}`}></div>
        <p className={`max-w-2xl mx-auto text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
          Get to know my background, skills, and what drives me as a developer
        </p>
      </div>

      {/* Profile Card */}
      <div
        className="w-full max-w-[1300px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
        data-aos="fade-up"
        style={{
          background: theme === "dark" ? "linear-gradient(145deg, #0f172a, #1e293b)" : "white",
          border: theme === "dark" ? "none" : "1px solid #e2e8f0"
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div
            className="md:w-2/5 p-8 flex flex-col items-center justify-center"
            style={{
              background: theme === "dark"
                ? "linear-gradient(145deg, rgba(8, 47, 73, 0.6), rgba(15, 23, 42, 0.8))"
                : "linear-gradient(145deg, #f1f5f9, #e2e8f0)"
            }}
            data-aos="zoom-in"
          >
            <div className="relative mb-6">
              <div
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] rounded-full overflow-hidden border-4 shadow-lg"
                style={{
                  borderColor: theme === "dark" ? "rgba(56, 189, 248, 0.4)" : "bg-cyan-800"
                }}
              >
                <div className="profile-pic"></div>
              </div>
              <div
                className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md"
                style={{
                  background: theme === "dark" ? "#0f172a" : "#f1f5f9",
                  border: theme === "dark" ? "1px solid rgba(56, 189, 248, 0.2)" : "1px solid rgba(99, 102, 241, 0.2)"
                }}
              >
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="text-xl"
                  style={{ color: theme === "dark" ? "#38bdf8" : "bg-cyan-700" }}
                />
              </div>
            </div>

            <h2 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
              <TypeIt
                key={theme}
                options={{
                  speed: 120,
                  startDelay: 300,
                  cursor: true,
                  cursorChar: "|",
                  loop: true,
                  breakLines: false,
                  deleteSpeed: 90,
                  lifeLike: true,
                }}
                getBeforeInit={(instance) => {
                  return instance
                    .type("Sohel Pinjari")
                    .pause(1800)
                    .delete(100)
                    .type("Sohel Pinjari");
                }}
              />
            </h2>

            <p className={`text-center text-sm mt-1 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              <TypeIt
                key={`${theme}-roles`}
                options={{
                  speed: 130,
                  startDelay: 1400,
                  cursor: true,
                  cursorChar: "|",
                  loop: true,
                  breakLines: false,
                  deleteSpeed: 85,
                  lifeLike: true,
                }}
                getBeforeInit={(instance) => {
                  const words = [
                    "Full Stack Developer",
                    "Mobile App Specialist",
                    "UI/UX Enthusiast"
                  ];

                  let chain = instance.type(words[0]).pause(1500).delete(words[0].length);

                  words.slice(1).forEach((word) => {
                    chain = chain.type(word).pause(1500).delete(word.length);
                  });

                  return chain;
                }}
              />
            </p>

            {/* Social Links */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://t.me/+918866449228"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 text-cyan-300"
                  : "bg-slate-100 hover:bg-slate-200 text-cyan-700"
                  }`}
                 aria-label="Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                href="https://linkedin.com/in/SohilPinjari"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 text-cyan-300"
                  : "bg-slate-100 hover:bg-slate-200 text-cyan-700"
                  }`}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01793fc549cb7f3194" 
                className={`p-3 rounded-full transition-all duration-300 ${theme === "dark"
                  ? "bg-slate-800 hover:bg-slate-700 text-cyan-300"
                  : "bg-slate-100 hover:bg-slate-200 text-cyan-700"
                  }`}
                  aria-label="Upwork"
              >
                <FontAwesomeIcon icon={faUpwork} />
              </a>
            </div>
          </div>

          {/* Bio & Cards */}
          <div
            className="md:w-3/5 p-8"
            style={{
              background: theme === "dark" ? "rgba(15, 23, 42, 0.7)" : "white",
            }}
          >
            <h1
              className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-cyan-400" : "text-cyan-700"}`}
              data-aos="fade-right"
            >
              Hi, I'm Sohel 👋
            </h1>
            <p
              className={`mb-6 leading-relaxed main-text ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              I'm a passionate <span className={`font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-600"}`}>Web & App Developer</span> with 3+ years of experience creating modern, high-performance applications. I specialize in building responsive interfaces with React and Flutter, crafting products that are not just functional, but provide exceptional user experiences.
            </p>

            {/* Skills Section */}
            <div className="mb-8" data-aos="fade-up">
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>My Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "React.js", level: 95, icon: faReact },
                  { name: "Flutter", level: 90, icon: faFlutter },
                  { name: "JavaScript", level: 92, icon: faJsSquare },
                  { name: "HTML/CSS", level: 88, icon: faHtml5 },
                  { name: "UI/UX Design", level: 85, icon: faLaptopCode },
                  { name: "Node.js", level: 80, icon: faJsSquare }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}
                  >
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className={`text-xl mr-2 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
                      />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"}`}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: theme === "dark"
                            ? "linear-gradient(90deg, #0ea5e9, #38bdf8)"
                            : "linear-gradient(90deg, #0e7490, #155e75)"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards */}
            <Container className="mb-6">
              <Row className="g-4">
                {/* Card 1 */}
                <Col md={6} data-aos="fade-up" >
                  <Card
                    className={`h-100 border-0 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 ${theme === "dark" ? "bg-slate-800" : "bg-slate-50"
                      }`} style={{
                        background: theme === "dark"
                          ? "linear-gradient(145deg, rgba(8, 47, 73, 0.6), rgba(15, 23, 42, 0.8))"
                          : "linear-gradient(145deg, #f1f5f9, #e2e8f0)"
                      }}
                  >
                    <Card.Header
                      className={`border-0 rounded-t-xl py-3 ${theme === "dark"
                        ? "bg-gradient-to-r from-cyan-800 to-blue-800 text-cyan-200"
                        : "bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-700"
                        }`}
                    >
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faFlutter} className={`text-xl mr-3 ${theme === 'dark' ? "text-cyan-400" : "text-cyan-600"}`} />
                        <span className={`font-bold  ${theme === 'dark' ? "text-cyan-400" : "text-cyan-600"}`}>Mobile App Development</span>
                      </div>
                    </Card.Header>
                    <Card.Body className="py-4">
                      <Card.Title className={`mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Building Cross-Platform Solutions
                      </Card.Title>
                      <Card.Text className={theme === "dark" ? "text-white" : "text-black"}>
                        Crafting smooth, responsive, and visually striking mobile apps for Android & iOS using Flutter. Focused on performance and beautiful UI.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Card 2 */}
                <Col md={6} data-aos="fade-up" data-aos-delay="200">
                  <Card
                    className={`h-100 border-0 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 ${theme === "dark" ? "bg-slate-800" : "bg-slate-50"
                      }`} style={{
                        background: theme === "dark"
                          ? "linear-gradient(145deg, rgba(8, 47, 73, 0.6), rgba(15, 23, 42, 0.8))"
                          : "linear-gradient(145deg, #f1f5f9, #e2e8f0)"
                      }}
                  >
                    <Card.Header
                      className={`border-0 rounded-t-xl py-3 ${theme === "dark"
                        ? "bg-gradient-to-r from-blue-800 to-purple-800 text-blue-200"
                        : "bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700"
                        }`}
                    >
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faLaptopCode} className={`text-xl mr-3 ${theme === 'dark' ? "text-cyan-400" : "text-cyan-600"}`} />
                        <span className={`font-bold  ${theme === 'dark' ? "text-cyan-400" : "text-cyan-600"}`}>Web Development</span>
                      </div>
                    </Card.Header>
                    <Card.Body className="py-4">
                      <Card.Title className={`mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Modern Web Experiences
                      </Card.Title>
                      <Card.Text className={theme === "dark" ? "text-white" : "text-black"}>
                        Designing responsive websites and web apps with React that look stunning and work flawlessly across all devices.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            {/* Contact Buttons */}
            <div className="cta-buttons flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={() => scrollToSection('contact')}
                className={`cta-button px-5 py-3 no-underline rounded-lg font-medium flex items-center transition-all duration-300 ${theme === "dark"
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg"
                  : "bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg"
                  }`}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </button>
              <a
                href="https://github.com/sohel-pinjari"
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-button px-5 py-3 no-underline rounded-lg font-medium flex items-center transition-all duration-300 ${theme === "dark"
                  ? "bg-slate-700 hover:bg-slate-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-800"
                  }`}
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                download="Sohel_Pinjari_CV.pdf"
                rel="noopener noreferrer"
                className={`cta-button px-5 py-3 no-underline rounded-lg font-medium flex items-center transition-all duration-300 ${theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                  }`}
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;