import React from "react";

import Navbar from "../../components/Navbar";
import ServiceStructure from "../../components/ServiceStructure";

import ecommerce from "../../assets/services-ecommerce.png";

const Ecommerce = () => {
  return (
    <>
      <Navbar isDark />
      <ServiceStructure
        title="E-Commerce - Sua Loja Online"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
        diam tincidunt, rhoncus diam a, ornare arcu. Vivamus porta mattis
        leo, nec rhoncus massa sollicitudin et. Donec vel magna id lorem
        sagittis vehicula id sit amet libero."
        imageURL={ecommerce}
      />
    </>
  );
};

export default Ecommerce;
