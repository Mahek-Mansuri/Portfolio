import React from "react";

const NeonTyping = ({ text }) => {
  return (
    <>
      <h2 className="neon-typing">{text}<span className="cursor">|</span></h2>

      <style jsx>{`
        .neon-typing {
          font-family: 'Courier New', Courier, monospace;
          font-size: 2rem;
          font-weight: bold;
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff,
            0 0 80px #0ff;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid transparent;
          width: 0;
          animation:
            typing 3.5s steps(30, end) forwards,
            flicker 1.5s infinite alternate;
          margin: 0;
        }

        .cursor {
          display: inline-block;
          color: #0ff;
          animation: blink 1s steps(2, start) infinite;
          margin-left: 2px;
        }

        /* Typing reveal */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Flicker glow effect */
        @keyframes flicker {
          0%, 100% {
            text-shadow:
              0 0 5px #0ff,
              0 0 10px #0ff,
              0 0 20px #0ff,
              0 0 40px #0ff,
              0 0 80px #0ff;
          }
          50% {
            text-shadow:
              0 0 10px #0ff,
              0 0 20px #3ff,
              0 0 30px #0ff,
              0 0 50px #3ff,
              0 0 100px #0ff;
          }
        }

        /* Cursor blink */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default NeonTyping;
