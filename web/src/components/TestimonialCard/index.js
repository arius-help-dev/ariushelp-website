import React from "react";
import "./styles.css";

import starImage from "../../assets/star-rank.svg";

const TestimonialCard = (props) => {
  return(
    <div className="testimonialCard">
      <div className="header">
        <img src={starImage} alt="Estrela" />
        <img src={starImage} alt="Estrela" />
        <img src={starImage} alt="Estrela" />
        <img src={starImage} alt="Estrela" />
        <img src={starImage} alt="Estrela" />
      </div>
      <div className="body">
        <blockquote>“{props.text}”</blockquote>
      </div>
      <div className="footer">
        <img src={props.profileUrl} alt="Imagem perfil" />
        <div className="info">
          <cite>{props.author}</cite>
          <span>{props.ocupation}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;