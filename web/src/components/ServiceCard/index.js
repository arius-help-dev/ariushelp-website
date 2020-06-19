import React from "react";
import "./styles.css";

const ServiceCard = (props) => {
  return(
    <div className="service-card">
      <div className="card-header">
        <figure>
          <img src={props.url} alt="Pasta de trabalho" />
        </figure>
      </div>
      <div className="card-body">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;