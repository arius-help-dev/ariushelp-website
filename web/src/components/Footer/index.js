import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone } from "react-icons/fi";
import "./styles.css";

const Footer = (props) => {
  return (
    <footer className={props.isTransparent ? "is-transparent" : ""}>
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
              <a
                href="https://www.facebook.com/ariushelp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ariushelp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/arius-help"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=558381556449&text=Ol%C3%A1%20%C3%81rius-Help!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPhone size={24} />
              </a>
            </li>
          </ul>
          <Link to="/contato" className="button">
            Contato
          </Link>
        </div>
      </div>
      <span>Árius-Help&copy; 2020 - Alguns Direitos Reservados.</span>
    </footer>
  );
};

export default Footer;
