import React from "react";
import "./cardStyles.css";

const Card = ({ img, imgAlt, text, title, titleLink }) => {
  return (
    <div className="cardContainer">
      <div className="card-header">
        <a
          href={titleLink}
          target="_blank"
          rel="noreferrer"
          className="subtitle"
        >
          {title}
        </a>
        <img className="card-img" alt={imgAlt} src={img} />
      </div>
      <div className="card-body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
