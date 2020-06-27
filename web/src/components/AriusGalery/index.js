import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

import image from "../../assets/about-main-background.jpg";

const AriusGalery = (props) => {
  return (
    <Carousel>
      <div>
        <img src={image} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={image} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={image} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default AriusGalery;
