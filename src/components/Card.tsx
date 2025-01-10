import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLink";
import Tag from "./Tag";
import "./Card.style.css";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="banner"></div>
      <ProfilePhoto />
      <div className="info">
        <h1>Ryan CHIKHI</h1>
        <p>Développeur Full Stack</p>
        <Tag />
        <SocialLinks />
        <AboutMe />
        <div className="contact-button">
          <a
            href="https://drive.google.com/uc?export=download&id=1-JrQxnUHU8P9k9lbje6rzJsreC34wAPF"
            className="btn-contact"
          >
            Ajouter au Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
