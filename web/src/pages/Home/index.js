import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar/index.js";
import ServiceCard from "../../components/ServiceCard/index.js";

import mainBusiness from "../../assets/home-business.png";

import briefCase from "../../assets/briefcase.svg";

const Home = () => {
  return (
    <>
    
      <ServiceCard
        title="Sites personalizados"
        text="Elaboramos sites lindos e reponsivos para o seu negócio"
        url={briefCase}
      />

      <ServiceCard
        title="Sites personalizados"
        text="Elaboramos sites lindos e reponsivos para o seu negócio"
        url={briefCase}
      />

      <ServiceCard
        title="Sites personalizados"
        text="Elaboramos sites lindos e reponsivos para o seu negócio"
        url={briefCase}
      />

      <ServiceCard
        title="Sites personalizados"
        text="Elaboramos sites lindos e reponsivos para o seu negócio"
        url={briefCase}
      />

      {/* <Navbar /> */}

      {/* <main>
        <div className="row">
          <div className="first-column">
            <h1>Lorem Ipsum Dollor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit. Cras ornare tempus libero, eu dictum orci imperdiet vitae. Vestibulum risus ligula, sodales nec facilisis sed, mollis at purus.</p>
            <Link className="button green" to="/servicos/e-commerce">Saiba Mais</Link>
          </div>
          <div className="last-column">
            <img src={mainBusiness} alt="e-commerce" />
          </div>
        </div>
      </main> */}
    </>
  );
};

export default Home;
