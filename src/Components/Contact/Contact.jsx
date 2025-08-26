import React, { useRef, useEffect, useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../Context/ThemeContext";
import "./Contact.css";
import TypeIt from "typeit-react";

function mergeRefs(...refs) {
  return (el) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(el);
      else (ref.current = el);
    });
  };
}

function ContactPage() {
  const [showDesc, setShowDesc] = useState(false);
  const headingRef = useRef(null);
  const contactRef = useRef(null);
  const [restartKey, setRestartKey] = useState(0);
  const formRef = useRef();

  const mountedRef = useRef(false);
  const lastTriggeredAt = useRef(0);

  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      mountedRef.current = true;
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    if (status) {
      setStatus(null);
      setStatusMessage("");
    }
  };

  const validate = () => {
    if (!form.name.trim()) {
      setStatusMessage("Please enter your name");
      return false;
    }

    if (!form.email.trim()) {
      setStatusMessage("Please enter your email address");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatusMessage("Please enter a valid email address");
      return false;
    }

    if (!form.message.trim()) {
      setStatusMessage("Please enter your message");
      return false;
    }

    if (form.message.trim().length < 10) {
      setStatusMessage("Message should be at least 10 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setStatusMessage("Sending your message...");

    emailjs.sendForm(
      'service_p0ki3px',
      'template_xi2ovj5',
      formRef.current,
      'P0P1NshsmwaRrooLI'
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setStatus("success");
        setStatusMessage("Thanks! Your message has been sent successfully.");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus(null);
          setStatusMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus("error");
        setStatusMessage("Sorry, there was a problem sending your message. Please try again later.");
      });
  };

  const descClass = theme === "dark" ? "mt-2 text-lg text-white" : "mt-2 text-lg text-white";

  useEffect(() => {
    const el = contactRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const COOLDOWN_MS = 800;

    const restartTyping = () => {
      const now = Date.now();
      if (now - lastTriggeredAt.current < COOLDOWN_MS) return;
      lastTriggeredAt.current = now;

      setShowDesc(false);

      try {
        const container = contactRef.current;
        if (container) {
          container.querySelectorAll(".ti-cursor-hidden").forEach((n) => n.classList.remove("ti-cursor-hidden"));
          container.querySelectorAll(".ti-cursor").forEach((n) => (n.style.display = ""));
        }
      } catch (e) {
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setRestartKey((k) => k + 1);
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (typeof mountedRef !== "undefined" && mountedRef.current === false) return;
          restartTyping();
        });
      },
      { root: null, rootMargin: "0px", threshold: [0.4] }
    );

    observer.observe(el);

    const onEvent = () => restartTyping();
    window.addEventListener("contact:retype", onEvent);

    return () => {
      try {
        observer.unobserve(el);
      } catch (e) { }
      observer.disconnect();
      window.removeEventListener("contact:retype", onEvent);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center "
      style={{
        background: theme === "dark" ? "#111827" : "#f8fafc",
        color: theme === "dark" ? "#e2e8f0" : "#1e293b",
      }}
      id="contact"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl Contact-section">
        <div className="p-8 flex flex-col items-center justify-center left-section">
          <section
            ref={mergeRefs(contactRef, headingRef)}
            className="flex flex-col items-center justify-center px-4"
          >
            <div className="text-center">
              <h2
                className="text-3xl font-bold mb-4 text-white"
              >
                <TypeIt
                  key={`heading-${restartKey}-${theme}`}
                  options={{
                    speed: 100,
                    startDelay: 200,
                    cursor: true,
                    cursorChar: "|",
                    loop: false,
                    breakLines: false,
                    lifeLike: true,
                  }}
                  getBeforeInit={(instance) => {
                    try {
                      const container = headingRef.current;
                      if (container) {
                        container.querySelectorAll(".ti-cursor-hidden").forEach((n) => n.classList.remove("ti-cursor-hidden"));
                        container.querySelectorAll(".ti-cursor").forEach((n) => (n.style.display = ""));
                      }
                    } catch (e) { }

                    instance
                      .type("Get in Touch")
                      .pause(1000)
                      .exec(() => {
                        const el = headingRef.current;
                        if (el) {
                          const cur = el.querySelector(".ti-cursor");
                          if (cur) cur.classList.add("ti-cursor-hidden");
                        }
                        setShowDesc(true);
                      });

                    return instance;
                  }}
                />
              </h2>

              {showDesc && (
                <p className={descClass}>
                  <TypeIt
                    key={`${restartKey}-desc-${theme}`}
                    options={{
                      speed: 80,
                      startDelay: 180,
                      cursor: true,
                      cursorChar: "|",
                      loop: false,
                      breakLines: true,
                      lifeLike: true,
                    }}
                    getBeforeInit={(instance) => {
                      instance.type(
                        "Looking for web or app development expert? Let's discuss how we can work together to build scalable solutions."
                      );
                      return instance;
                    }}
                  />
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="right-section w-full md:w-1/2" style={{ background: theme === "dark" ? "rgba(15, 23, 42, 0.7)" : "white" }}>
          <main className="card ">
            <form
              ref={formRef}
              className="form"
              style={{ color: theme === "dark" ? "white" : "black" }}
              onSubmit={handleSubmit}
              noValidate
            >
              <h2 className="form-head">Send a message</h2>

              <label className="field">
                <span className="field-label">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input"
                  style={{ background: theme === "dark" ? "#171e30" : "white", color: theme === "dark" ? "white" : "black" }}
                  aria-label="Name"
                  required
                />
              </label>

              <label className="field">
                <span className="field-label">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input"
                  style={{ background: theme === "dark" ? "#171e30" : "white", color: theme === "dark" ? "white" : "black" }}
                  aria-label="Email"
                  type="email"
                  required
                />
              </label>

              <label className="field">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question"
                  className="textarea"
                  style={{ background: theme === "dark" ? "#171e30" : "white", color: theme === "dark" ? "white" : "black" }}
                  rows={6}
                  aria-label="Message"
                  required
                />
              </label>

              <div className="actions">
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setStatus(null);
                    setStatusMessage("");
                  }}
                  style={{ background: theme === "dark" ? "#171e30" : "white", color: theme === "dark" ? "white" : "black" }}
                >
                  Reset
                </button>
              </div>

              {status && (
                <div className={`status ${status}`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </main>
          <div
            className="contact-info"
            style={{
              backgroundColor: theme === "dark" ? "#171F30" : "white",
              color: theme === "dark" ? "white" : "black"
            }}
          >
            <div className="info-item">
              <i className="bi bi-telephone-fill icon" aria-hidden="true"></i>
              <a
                href="tel:+916353903438"
                className="text phone-link"
                aria-label="Call +91 63539 03438"
                title="Call +91 63539 03438"
                style={{ textDecoration: "none", color: theme === "dark" ? "white" : "black" }}
              >
                +91 63539 03438
              </a>
            </div>
            <div className="info-item">
              <i className="bi bi-envelope-fill icon"></i>
              <a
                href="mailto:pinjari9222@gmail.com"
                className="text email-link"
                aria-label="Email pinjari9222@gmail.com"
                title="Email pinjari9222@gmail.com"
                style={{ textDecoration: "none", color: theme === "dark" ? "white" : "black" }}
              >
                pinjari9222@gmail.com
              </a>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt-fill icon"></i>
              <span className="text">Surat , Gujarat , India</span>
            </div>
            <div className="info-item">
              <i className="bi bi-whatsapp icon"></i>
              <span className="text">
                <a
                  href="https://wa.me/8866449228"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: theme === "dark" ? "white" : "black" }}
                >
                  Chat on WhatsApp
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p
        className={`mt-12 text-sm footer ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
      >
        © {new Date().getFullYear()} Sohel Pinjari. All rights reserved.
      </p>
    </div>
  );
}

export default ContactPage;