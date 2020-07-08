import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar";

import smartphone from "../../assets/services-app.png";

const Apps = () => {
  return (
    <>
      <Navbar />

      <div id="apps-content">
        <div className="row">
          <div className="first-column">
            <h1>Aplicativos Mobile Android &amp; IOS</h1>
            <img src={smartphone} alt="Desenvolvimento de Apps"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
              leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
              sagittis vehicula id sit amet libero.{" "}
            </p>
            <Link className="button" to="/contact">Adquira Já</Link>
          </div>
          <div className="last-column">
            <img src={smartphone} alt="Desenvolvimento de Apps"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
