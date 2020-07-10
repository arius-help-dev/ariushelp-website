import React from "react";

import Navbar from "../../components/Navbar";
import ServiceStructure from "../../components/ServiceStructure";

import instaservice from "../../assets/services-instaservice.png";

const Instaservice = () => {
  return (
    <>
      <Navbar />
      <ServiceStructure
        title="Instagram Service Posts &amp; Engajamento"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
        diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
        leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
        sagittis vehicula id sit amet libero."
        imageURL={instaservice}
      />
    </>
  );
};

export default Instaservice;
