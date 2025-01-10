import socialLinks from "../data/SocialLinks.json";
import "./SocialLink.style.css";

const SocialLinks = () => {
  return (
    <div className="social-buttons">
      {Object.entries(socialLinks).map(([key, { name, link, icon, color }]) => (
        <div className="btn-container" key={key}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: color }} // Style inline avec la couleur depuis JSON
          >
            <div className="icon">{icon}</div>
          </a>
          <span className="btn-text">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
