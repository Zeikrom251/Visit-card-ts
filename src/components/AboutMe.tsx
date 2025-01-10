import React from "react";
import "./AboutMe.style.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        Je suis un jeune Développeur diplômé d'un <strong>BTS SNIR</strong>,
        actuellement en Formation Full Stack Developer [FSD] chez la{" "}
        <strong>
          <a href="https://3wacademy.fr/" target="_blank">
            3W Academy
          </a>
        </strong>{" "}
        et apprenti Développeur Full Stack chez{" "}
        <strong>
          <a href="https://www.tilkal.com/?lang=fr" target="_blank">
            Tilkal
          </a>
        </strong>
      </p>
    </div>
  );
};

export default AboutMe;
