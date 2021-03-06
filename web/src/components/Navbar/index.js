import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/arius-help-logo.png";
import logoDark from "../../assets/arius-help-logo-dark.png";

const Navbar = (props) => {
  const history = useHistory();
  let navbarToggle = false;

  function handleNavigate(event) {
    event.preventDefault();
    history.push("/");
  }

  function handleActionNavbar(event) {
    event.preventDefault();

    const navbar = document.querySelector("nav");
    const navbarLinks = document.querySelector(".navbar-links");
    const burguerButton = document.querySelector(".burguer-button");

    navbarToggle
      ? hideNavbar(navbar, navbarLinks, burguerButton)
      : showNavbar(navbar, navbarLinks, burguerButton);
  }

  function showNavbar(navbar, navbarLinks, burguerButton) {
    burguerButton.classList.add("active");
    navbar.style.minHeight = "100vh";
    navbar.style.backgroundColor = "rgba(0,0,0,.80)";
    navbarLinks.style.display = "flex";
    navbarToggle = true;
  }

  function hideNavbar(navbar, navbarLinks, burguerButton) {
    burguerButton.classList.remove("active");
    navbar.style.minHeight = "auto";
    navbar.style.backgroundColor = "rgba(0,0,0,.25)";
    navbarLinks.style.display = "none";
    navbarToggle = false;
  }

  return (
    <nav>
      <div className="navbar-toggle-header">
        <img
          src={props.isDark ? logoDark : logo}
          alt="logo arius help"
          className="nav-logo"
          onClick={(event) => handleNavigate(event)}
        />
        <button
          className="burguer-button"
          onClick={(event) => handleActionNavbar(event)}
        >
          <span></span>
        </button>
      </div>

      <div className="navbar-links">
        <ul className="main-links">
          <li className={props.isDark? "nav-link nav-dark" : "nav-link"}>
            <Link className={props.isDark ? "nav-dark": "is-white"} to="/">Home</Link>
          </li>
          <li className={props.isDark? "nav-link nav-dark" : "nav-link"}>
            <Link className={props.isDark ? "nav-dark": "is-white"} to="/about">Sobre</Link>
          </li>
          <li className={props.isDark? "nav-drop nav-dark" : "nav-drop"}>
            <Link to="#" className={props.isDark ? "drop-link nav-dark" : "drop-link is-white"}>
              Serviços
            </Link>
            <ul className="dropped-menu">
              <li className="nav-link">
                <Link to="/services/apps">App's</Link>
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
              {/* <li className="nav-link">
                <Link to="/services/projetos">Projetos</Link>
              </li> */}
            </ul>
          </li>
          <li className={props.isDark? "nav-link nav-dark" : "nav-link"}>
            <Link className={props.isDark ? "nav-dark": "is-white"} to="/blog">Blog</Link>
          </li>
          <li className={props.isDark? "nav-link nav-dark" : "nav-link"}>
            <Link className={props.isDark ? "nav-dark": "is-white"} to="/contact">Contato</Link>
          </li>
        </ul>

        <ul className={props.isDark? "business-link nav-dark" : "business-link"}>
          <li className={props.isDark? "nav-link nav-dark" : "nav-link"}>
            <Link className={props.isDark ? "nav-dark": "is-white"} to="/login">Login</Link>
          </li>
          <Link to="/register" className="button green">
            Cadastrar
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
