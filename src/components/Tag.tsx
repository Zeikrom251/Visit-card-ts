import tags from "../data/Tag.json";
import "./Tag.style.css";

const Tag = () => {
  return (
    <div className="tags">
      {Object.entries(tags).map(
        ([key, { companyName, link, textColor, color }]) => (
          <div className="tag-container" key={key}>
            <a
              href={link}
              target="_blank"
              className="tag"
              style={{
                backgroundColor: color,
                color: textColor,
                border: `1px solid ${textColor}`,
              }}
            >
              <span className="tag-text">{companyName}</span>
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default Tag;
