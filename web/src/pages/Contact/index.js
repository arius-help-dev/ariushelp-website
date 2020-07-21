import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import contactBackground from "../../assets/contact-background.png";

const Contact = () => {
  function changeForm(event, nameForm) {
    const divFormButtons = document.querySelector(".buttons-row");
    const buttons = [...divFormButtons.getElementsByTagName("button")];

    buttons.map((button) => button.classList.remove("active"));
    event.target.classList.add("active");

    nameForm === "email" ? console.log("show email") : console.log("show orçamento");;
  }

  return (
    <div id="contact">
      <div className="back-link">
        <span>◄</span>
        <Link to="/">voltar</Link>
      </div>
      <div className="row">
        <div className="first-column">
          <img src={contactBackground} alt="contate-nos" />

          <div className="buttons-row">
            <button
              className="button active"
              onClick={(event) => changeForm(event, "email")}
            >
              Email
            </button>
            <button
              className="button"
              onClick={(event) => changeForm(event, "budget")}
            >
              Orçamento
            </button>
          </div>
        </div>
        <div className="last-column">
          <h1 id="test">EMAIL</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
