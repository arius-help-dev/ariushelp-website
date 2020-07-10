import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ServiceStructure = (props) => {
  return (
    <div id="service-content">
      <div className="row">
        <div className="first-column">
          <h1>{props.title}</h1>
          <img src={props.imageURL} alt="Desenvolvimento de Apps" />
          <p>{props.text}</p>
          <Link className="button" to="/contact">
            Adquira Já
          </Link>
        </div>
        <div className="last-column">
          <img src={props.imageURL} alt="Desenvolvimento de Apps" />
        </div>
      </div>
    </div>
  );
};

export default ServiceStructure;
