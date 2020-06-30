import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

const AriusGalery = (props) => {
  const slidesObject = props.data;
  
  return (
    <Carousel>
      {slidesObject.map((slideData) => (
        <div>
          <img src={slideData.url} alt={slideData.title} />
          <p className="legend">{slideData.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default AriusGalery;
