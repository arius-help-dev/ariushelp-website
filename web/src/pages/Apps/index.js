import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar";

const Apps = () => {
  return (
    <>
      <Navbar />

      <div id="apps-content">
        <div className="container">
          <div className="content">
            <h1>Aplicativos Mobile Android &amp; IOS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
              leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
              sagittis vehicula id sit amet libero.{" "}
            </p>
            <Link className="button">Adquira Já</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
