import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import { Container } from "react-bootstrap";
import TypeIt from "typeit-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlutter, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  return (
    <div className="about-section min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center py-16 px-6 md:px-20">
      {/* Profile Card */}
      <div
        className="max-w-1xl w-full neon-border rounded-2xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row bg-gray-900/80 backdrop-blur-md">

          {/* Profile Image Section */}
          <div
            className="md:w-1/3 bg-gradient-to-b from-blue-500/40 to-purple-600/40 flex flex-col items-center justify-center p-8"
            data-aos="zoom-in"
          >
            <img
              src="profile-pic"
              alt=""
              className="w-40 h-40 object-cover profile-pic rounded-full border-4 border-orange-400 hover:scale-105 transition duration-300"
            />

            {/* Name with subtle pre-delay, steady speed */}
            <h2 className="text-xl font-bold text-orange-400 mt-4">
              <TypeIt
                options={{
                  speed: 120,
                  startDelay: 500,
                  cursor: true,
                  cursorChar: "|",
                  loop: true,
                  breakLines: false,
                  deleteSpeed: 90,
                  lifeLike: true
                }}
                getBeforeInit={(instance) => {
                  return instance
                    .type("Sohel Pinjari")
                    .pause(1800)
                    .delete(100) // smart delete
                    .type("Sohel Pinjari")
                    .pause(900);
                }}
              />
            </h2>

            {/* Roles morph with color emphasis */}
            <p className="text-sm text-blue-300 mt-1">
              <TypeIt
                options={{
                  speed: 130,
                  startDelay: 1400,
                  cursor: true,
                  cursorChar: "|",
                  loop: true,
                  breakLines: false,
                  deleteSpeed: 85,
                  lifeLike: true
                }}

                getBeforeInit={(instance) => {
                  const stripTags = (s) => s.replace(/<[^>]*>/g, "");

                  const words = [
                    '<span class="text-indigo-300 font-semibold">Flutter Mobile Apps</span>',
                    '<span class="text-emerald-300 font-semibold">Responsive Websites</span>',
                  ];

                  const pauses = [1000, 900, 1100, 1000, 1100, 1000, 1400];

                  let chain = instance.type("I build ");

                  words.forEach((w, i) => {
                    const visibleLen = stripTags(w).length;
                    chain = chain.type(w).pause(pauses[i]).delete(visibleLen);
                  });

                  // remove "I build "
                  chain = chain.delete("I build ".length);

                  // Availability sequence — keep last item visible
                  chain = chain.type("Available for ");

                  // type backend (delete it)
                  chain = chain
                    .type('<span class="text-indigo-300 font-semibold">Freelancing</span>')
                    .pause(1200)
                    .delete(stripTags('<span class="text-indigo-300 font-semibold">Freelancing</span>').length);

                  // type frontend (delete it)
                  chain = chain
                    .type('<span class="text-emerald-300 font-semibold">frontend</span>')
                    .pause(1000)
                    .delete(stripTags('<span class="text-emerald-300 font-semibold">frontend</span>').length);

                  // type full-stack and KEEP it (no delete)
                  chain = chain.type('<span class="text-pink-300 font-semibold">full-stack</span>').pause(1400);

                  return chain;
                }}
              />
            </p>
          </div>


          {/* Bio & Cards */}
          <div className="md:w-2/3 p-8" style={{ textAlign: "justify" }}>
            <h1
              className="text-3xl font-bold text-orange-400"
              data-aos="fade-right"
            >
              Hi, I’m Sohel Pinjari 👋
            </h1>
            <p
              className="mt-4 text-gray-300 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              I’m a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Web & App Developer
              </span>{" "}
              specializing in creating futuristic, high-performance
              applications. With React.js, Flutter, and modern UI/UX design, I
              craft products that are not just functional, but visually
              stunning.
            </p>

            {/* Cards */}
            <Container className="my-5">
              <Row className="g-4">

                {/* Card 1 */}
                <Col md={6} className="web-card">
                  <Card className="h-100 custom-card">
                    <Card.Header className="custom-card-header bg-success text-white fw-bold">
                      <div className="title-row">
                        <FontAwesomeIcon icon={faFlutter} className="header-icon" />
                        <span className="header-title">App Developer</span>
                      </div>
                      <div className="title-underline" />
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Building Beautiful Apps with Flutter</Card.Title>
                      <Card.Text>
                        Crafting smooth, responsive, and visually striking mobile apps for Android & iOS using a single codebase.
                      </Card.Text>
                      <div
                        className="flex flex-wrap gap-2 mt-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Card 2 */}
                <Col md={6}>
                  <Card className="h-100 custom-card">
                    <Card.Header className="custom-card-header bg-primary text-white fw-bold">
                      <div className="title-row">
                        <FontAwesomeIcon icon={faLaptopCode} className="header-icon" />
                        <span className="header-title">Web Developer</span>

                        {/* small tech icons — optional */}
                        <div className="web-icons" aria-hidden>
                          <FontAwesomeIcon icon={faHtml5} className="small-icon" />
                          <FontAwesomeIcon icon={faJsSquare} className="small-icon" />
                          <FontAwesomeIcon icon={faReact} className="small-icon" />
                        </div>
                      </div>
                      <div className="title-underline"/>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Crafting Digital Experiences</Card.Title>
                      <Card.Text>
                        Designing websites and apps that look stunning and work flawlessly.
                      </Card.Text>
                      <div
                        className="flex flex-wrap gap-2 mt-2"
                        data-aos="fade-up"
                        data-aos-delay="200">
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Container>

            {/* Contact Buttons */}
            <div
              className="mt-8 flex gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="mailto:john.doe@example.com"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-[0_0_15px_rgba(255,165,0,0.8)] transition"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-[0_0_15px_rgba(0,191,255,0.8)] transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Sohel Pinjari. All rights reserved.
      </p>
    </div>
  );
};

export default About;




