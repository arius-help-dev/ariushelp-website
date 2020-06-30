import React from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutCard from "../../components/AboutCard";
import AriusGalery from "../../components/AriusGalery";

import missionImage from "../../assets/edvaldojunior.jpg";

import image from "../../assets/about-main-background.jpg";

const obje = [
  {
    url: image,
    title: "Árius-Team 2020"
  },
  {
    url: image,
    title: "Árius-Team 2021"
  },
  {
    url: image,
    title: "Árius-Team 2022"
  }
]

const About = () => {
  return (
    <>
      <Navbar />

      <header id="about-header">
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

      <div className="about-body">
        <section id="topics">
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

        <section id="galery">
          <div className="container">
            <div className="main-content">
              <h1>Time Árius-Help</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis est vel nunc rutrum elementum. Fusce interdum sem ornare felis euismod, a vehicula ipsum suscipit. </p>
            </div>

            <div className="box">
              <AriusGalery data={obje} />
            </div>
          </div>
        </section>

        <Footer isTransparent="true" />

      </div>
    </>
  );
};

export default About;
