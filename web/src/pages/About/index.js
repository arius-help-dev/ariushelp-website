import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return(
    <>
      <Navbar />

      <header class="about-main">
        <div className="row">
          <div className="column">
            <h1>Árius Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tortor quis lorem venenatis rhoncus. Aliquam et viverra tortor.</p>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}

export default About;