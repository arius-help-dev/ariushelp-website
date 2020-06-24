import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone } from "react-icons/fi";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="first-column">
          <b>MAPA DO SITE</b>
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/about">SOBRE</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
          </ul>
        </div>
        <div className="second-column">
          <b>SERVIÇOS</b>
          <ul>
            <li>
              <Link to="/services/apps">APPS</Link>
            </li>
            <li>
              <Link to="/services/websites">WEBSITES</Link>
            </li>
            <li>
              <Link to="/services/instaservice">INSTASERVICE</Link>
            </li>
            <li>
              <Link to="/services/projetos">PROJETOS</Link>
            </li>
          </ul>
        </div>
        <div className="last-column">
          <ul>
            <li>
              <Link to="#">
                <FiFacebook size={24} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FiInstagram size={24} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FiLinkedin size={24} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FiPhone size={24} />
              </Link>
            </li>
          </ul>
          <Link to="/contato" className="button">
            Contato
          </Link>
        </div>
      </div>
      {/* <span>Árius-Help&copy; 2020 - Alguns Direitos Reservados.</span> */}
    </footer>
  );
};

export default Footer;