import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/arius-help-logo.png";

const Navbar = () => {
  const history = useHistory();

  function handleNavigate(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <nav>
      <img
        src={logo}
        alt="logo arius help"
        className="nav-logo"
        onClick={(event) => handleNavigate(event)}
      />
      <div className="navbar-links">
        <ul className="main-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className="nav-drop">
            <Link to="#" className="drop-link">
              Serviços
            </Link>
            <ul className="dropped-menu">
              <li className="nav-link">
                <Link to="/services/app">App's</Link>
              </li>
              <li className="nav-link">
                <Link to="/services/websites">Websites</Link>
              </li>
              <li className="nav-link">
                <Link to="/services/instaservice">Instaservice</Link>
              </li>
              <li className="nav-link">
                <Link to="/services/e-commerce">Ecommerce</Link>
              </li>
              <li className="nav-link">
                <Link to="/services/projetos">Projetos</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <Link to="/Blog">Blog</Link>
          </li>
          <li className="nav-link">
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>

        <ul className="business-link">
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <Link to="/cadastro" className="button green">
            Cadastrar
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
