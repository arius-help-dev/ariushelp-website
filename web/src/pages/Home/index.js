import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Navbar from "../../components/Navbar/";
import ServiceCard from "../../components/ServiceCard/";
import TestimonialCard from "../../components/TestimonialCard/"
import Footer from "../../components/Footer";

import mainBusiness from "../../assets/home-business.png";
import mainTeam from "../../assets/home-preabout-image.png";

import briefCase from "../../assets/briefcase.svg";
import profileImage from "../../assets/edvaldojunior.jpg";

const Home = () => {
  return (
    <Footer />
    // <>
    //   <Navbar />

    //   <main>
    //     <div className="row">
    //       <div className="first-column">
    //         <h1>Lorem Ipsum Dollor</h1>
    //         <p>Lorem ipsum dolor sit amet, consectetur elit. Cras ornare tempus libero, eu dictum orci imperdiet vitae. Vestibulum risus ligula, sodales nec facilisis sed, mollis at purus.</p>
    //         <Link className="button green" to="/servicos/e-commerce">Saiba Mais</Link>
    //       </div>
    //       <div className="last-column">
    //         <img src={mainBusiness} alt="e-commerce" />
    //       </div>
    //     </div>
    //   </main>

    //   <section id="intro-services">
    //     <div className="row">
    //       <div className="first-column">
    //         <h1>Lorem ipsum ixi Dollor?</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur elit. Cras ornare tempus libero, 
    //           eu dictum orci imperdiet vitae.
    //         </p>
    //         <Link to="#" className="button">Cadastro</Link>
    //       </div>
    //       <div className="last-column">
    //         <ServiceCard
    //           title="Sites personalizados"
    //           text="Elaboramos sites lindos e reponsivos para o seu negócio"
    //           url={briefCase}
    //         />
    //         <ServiceCard
    //           title="Sites personalizados"
    //           text="Elaboramos sites lindos e reponsivos para o seu negócio"
    //           url={briefCase}
    //         />
    //         <ServiceCard
    //           title="Sites personalizados"
    //           text="Elaboramos sites lindos e reponsivos para o seu negócio"
    //           url={briefCase}
    //         />
    //         <ServiceCard
    //           title="Sites personalizados"
    //           text="Elaboramos sites lindos e reponsivos para o seu negócio"
    //           url={briefCase}
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   <section id="intro-about">
    //     <div className="row">
    //       <div className="first-column">
    //         <h1>A Equipe Árius-Help</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur elit. Cras ornare tempus libero, eu dictum orci imperdiet vitae. Vestibulum risus ligula, sodales nec facilisis sed, mollis at purus.
    //         </p>
    //         <Link to="/about" className="button">Saiba Mais</Link>
    //       </div>
    //       <div className="last-column">
    //         <img src={mainTeam} alt="AriusTeam" />
    //       </div>
    //     </div>
    //   </section>

    //   <section id="testimonials">
    //     <h1>Conheça alguns depoimentos</h1>
    //     <div className="cards-container">
    //       <TestimonialCard
    //         rank="5"
    //         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris eu leo fermentum, 
    //         eu blandit neque sollicitudin."
    //         profileUrl={profileImage}
    //         author="Edvaldo Junior"
    //         ocupation="Desenvolvedor Fullstack"
    //       />

    //       <TestimonialCard
    //         rank="5"
    //         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris eu leo fermentum, 
    //         eu blandit neque sollicitudin."
    //         profileUrl={profileImage}
    //         author="Edvaldo Junior"
    //         ocupation="Desenvolvedor Fullstack"
    //       />

    //       <TestimonialCard
    //         rank="5"
    //         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris eu leo fermentum, 
    //         eu blandit neque sollicitudin."
    //         profileUrl={profileImage}
    //         author="Edvaldo Junior"
    //         ocupation="Desenvolvedor Fullstack"
    //       />
    //     </div>
    //   </section>

    // </Footer>
  );
};

export default Home;
