import React from "react";
import "./styles.css";

const AboutCard = (props) => {
  return (
    <div className="about-card">
      <div className="row">
        <div className="profile">
          <img src={props.url} alt={props.title} />
        </div>
        <div className="content">
          <h2>#{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
