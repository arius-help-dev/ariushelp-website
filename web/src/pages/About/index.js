import React from "react";
// import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutCard from "../../components/AboutCard";

// import AriusGalery from "../../components/AriusGalery";

import missionImage from "../../assets/edvaldojunior.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      <header class="about-main">
        <div className="row">
          <div className="column">
            <h1>Árius Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              tortor quis lorem venenatis rhoncus. Aliquam et viverra tortor.
            </p>
          </div>
        </div>
      </header>

      <section id="about-arius">
        <div className="container">
          <AboutCard
            url={missionImage}
            title="Missão"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <AboutCard
            url={missionImage}
            title=" Missão"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <AboutCard
            url={missionImage}
            title="Missão"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <AboutCard
            url={missionImage}
            title="Missão"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>

      {/* <section className="about-content">
        <div className="container">
          <div className="main-content">
            <h1>Time Árius-Help</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis est vel nunc rutrum elementum. Fusce interdum sem ornare felis euismod, a vehicula ipsum suscipit. </p>
          </div>
          
          <AriusGalery />

        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default About;
