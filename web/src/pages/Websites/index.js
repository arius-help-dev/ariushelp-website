import React from "react";

import Navbar from "../../components/Navbar";
import ServiceStructure from "../../components/ServiceStructure";

import websites from "../../assets/services-websites.png";

const Websites = () => {
  return (
    <>
      <Navbar isDark />
      <ServiceStructure
        title="Websites Totalmente Responsivos"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
        diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
        leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
        sagittis vehicula id sit amet libero."
        imageURL={websites}
      />
    </>
  );
};

export default Websites;
