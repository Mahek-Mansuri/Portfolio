// ContactPage.jsx
import React, { useRef, useEffect, useState, useContext } from "react";
// import { motion } from 'framer-motion';
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
  // const [runId, setRunId] = useState(0); // NOT used directly here but kept for compatibility
  const [showDesc, setShowDesc] = useState(false);
  const headingRef = useRef(null);
  const contactRef = useRef(null);
  const [restartKey, setRestartKey] = useState(0);

  const mountedRef = useRef(false); // prevents observer firing immediately on mount
  const lastTriggeredAt = useRef(0);

  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "error" | "success"

  useEffect(() => {
    // allow a short window for initial paint to settle so observer won't immediately retrigger
    const t = setTimeout(() => {
      mountedRef.current = true;
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return false;
    // very basic email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    // Simulate sending
    setStatus("success");
    console.log("Send contact payload:", form);
    // Reset after a short delay
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  // const headingClass =
  //   theme === "dark" ? "text-xl text-white font-semibold" : "text-xl text-white font-semibold";

  const descClass = theme === "dark" ? "mt-2 text-lg text-white" : "mt-2 text-lg text-white";

  useEffect(() => {
    const el = contactRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const COOLDOWN_MS = 800;

    // central restart routine used by both the observer and the event listener
    const restartTyping = () => {
      const now = Date.now();
      if (now - lastTriggeredAt.current < COOLDOWN_MS) return;
      lastTriggeredAt.current = now;

      // 1) unmount description immediately
      setShowDesc(false);

      // 2) clear any previous hidden cursor markup/styling (defensive)
      try {
        const container = contactRef.current;
        if (container) {
          container.querySelectorAll(".ti-cursor-hidden").forEach((n) => n.classList.remove("ti-cursor-hidden"));
          container.querySelectorAll(".ti-cursor").forEach((n) => (n.style.display = ""));
        }
      } catch (e) {
        /* ignore DOM access issues */
      }

      // 3) Wait two frames so the description unmount is applied before remounting the heading.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setRestartKey((k) => k + 1);
        });
      });
    };

    // IntersectionObserver: trigger restartTyping when section becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // don't act until initial mount grace period has passed (if you keep mountedRef logic)
          if (typeof mountedRef !== "undefined" && mountedRef.current === false) return;
          // trigger safe restart
          restartTyping();
        });
      },
      { root: null, rootMargin: "0px", threshold: [0.4] }
    );

    observer.observe(el);

    // Also listen for a custom event (Home.jsx can dispatch window.dispatchEvent(new CustomEvent('contact:retype')))
    const onEvent = () => restartTyping();
    window.addEventListener("contact:retype", onEvent);

    // cleanup
    return () => {
      try {
        observer.unobserve(el);
      } catch (e) { }
      observer.disconnect();
      window.removeEventListener("contact:retype", onEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // keep empty deps so observer + event listener install once


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
            className="min-h-screen flex flex-col items-center justify-center px-4"
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

        {/* right-section */}

        <div className="right-section w-full md:w-1/2" style={{ background: theme === "dark" ? "rgba(15, 23, 42, 0.7)" : "white" }}>
          <main className="card ">
            <form className="form" style={{ color: theme === "dark" ? "white" : "black" }} onSubmit={handleSubmit} noValidate>
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
                <button type="submit" className="btn-primary">
                  Send message
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  style={{ background: theme === "dark" ? "#171e30" : "white", color: theme === "dark" ? "white" : "black" }}
                >
                  Reset
                </button>
              </div>

              {status === "error" && <div className="status error">Please complete all fields with a valid email.</div>}
              {status === "success" && <div className="status success">Thanks — your message has been sent!</div>}
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
              </a>            </div>
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

      {/* Footer */}
      <p
        className={`mt-12 text-sm footer ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
      // data-aos="fade-up"
      >
        © {new Date().getFullYear()} Sohel Pinjari. All rights reserved.
      </p>
    </div>
  );
}

export default ContactPage;
