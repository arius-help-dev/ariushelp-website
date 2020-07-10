import React from "react";

import Navbar from "../../components/Navbar";
import ServiceStructure from "../../components/ServiceStructure";

import smartphone from "../../assets/services-app.png";

const Apps = () => {
  return (
    <>
      <Navbar />
      <ServiceStructure
        title="Aplicativos Mobile Android &amp; IOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
        diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
        leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
        sagittis vehicula id sit amet libero."
        imageURL={smartphone}
      />
    </>
  );
};

export default Apps;
