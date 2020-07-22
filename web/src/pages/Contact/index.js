import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import CurrencyInput from "react-currency-input";

import contactBackground from "../../assets/contact-background.png";

const Contact = () => {
  function showEmailForm() {
    const emailForm = document.getElementById("emailForm");
    emailForm.classList.remove("hidden");
  }

  function showBudgetForm() {
    const budgetForm = document.getElementById("budgetForm");
    budgetForm.classList.remove("hidden");
  }

  function hideForms() {
    const emailForm = document.getElementById("emailForm");
    const budgetForm = document.getElementById("budgetForm");
    emailForm.classList.add("hidden");
    budgetForm.classList.add("hidden");
  }

  function changeForm(event, nameForm) {
    const divFormButtons = document.querySelector(".buttons-row");
    const buttons = [...divFormButtons.getElementsByTagName("button")];

    buttons.map((button) => button.classList.remove("active"));
    event.target.classList.add("active");

    hideForms();
    nameForm === "email" ? showEmailForm() : showBudgetForm();
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

          <div className="container" id="emailForm">
            <h2>Email</h2>
            <p>Dúvias, parcerias, lives? - entre em contato conosco</p>
            <form>
              <div className="field-row">
                <div className="field">
                  <label>Nome</label>
                  <input />
                </div>
                <div className="field">
                  <label>Sobrenome</label>
                  <input />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Seu Email</label>
                  <input type="email" />
                </div>
                <div className="field">
                  <label>Assunto</label>
                  <input type="text" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Mensagem</label>
                  <textarea placeholder="Sua mensagem..."></textarea>
                </div>
              </div>
              <button className="button">Enviar</button>
            </form>
          </div>

          <div className="container hidden" id="budgetForm">
            <h2>Orçamento</h2>
            <p>Vamos fazer o seu orçamento</p>
            <form>
              <div className="field-row">
                <div className="field">
                  <label>Nome</label>
                  <input />
                </div>
                <div className="field">
                  <label>Sobrenome</label>
                  <input />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Seu Email</label>
                  <input type="email" />
                </div>
                <div className="field">
                  <label>Assunto</label>
                  <input type="text" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Valor em R$</label>
                  <CurrencyInput decimalSeparator="," thousandSeparator="." />
                </div>
                <div className="field">
                  <label>Serviço</label>
                  <select id="services" name="services">
                    <option value="apps">Apps</option>
                    <option value="website">Websites</option>
                    <option value="eCommerce">E-commerce</option>
                    <option value="Instaservice">Instaservice</option>
                    <option value="Instaservice">Outro</option>
                  </select>
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Mensagem</label>
                  <textarea placeholder="Descreva o seu projeto ..."></textarea>
                </div>
              </div>
              <button className="button">Enviar</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
