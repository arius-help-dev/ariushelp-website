import React from "react";
import "./styles.css";

import image from "../../assets/about-main-background.jpg";

const AriusGalery = (props) => {
  return (
    <div className="arius-galery">
      <div className="galery-container">
        <div className="row">
          <div className="images-column">
            <div className="main-image">
              <img src={image} alt="AAA" />
              <div className="list-images">
                <img src={image} alt="AAA" />
                <img src={image} alt="AAA" />
                <img src={image} alt="AAA" />
              </div>
            </div>
          </div>

          <div className="content-column">
            <h2>#AriusTeam</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis est vel nunc rutrum elementum. Fusce interdum sem ornare
              felis euismod, a vehicula ipsum suscipit.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AriusGalery;
