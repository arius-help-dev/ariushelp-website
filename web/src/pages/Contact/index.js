import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import CurrencyInput from "react-currency-input";

import contactBackground from "../../assets/contact-background.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // for budget email
  const [value, setValue] = useState("");
  const [service, setService] = useState("");

  function handleSendSimpleEmail(event) {
    event.preventDefault();

    const data = {
      name,
      lastname,
      email,
      subject,
      message,
    };
    console.log(data);
  }

  function handleSendBudgetEmail(event) {
    event.preventDefault();

    const data = {
      name,
      lastname,
      email,
      subject,
      message,
      value,
      service,
    };
    console.log(data);
  }

  // functions bellow controls forms interface
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
            <form onSubmit={handleSendSimpleEmail}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastname">Sobrenome</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Seu Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    placeholder="Sua mensagem..."
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <button className="button">Enviar</button>
            </form>
          </div>

          <div className="container hidden" id="budgetForm">
            <h2>Orçamento</h2>
            <p>Vamos fazer o seu orçamento</p>
            <form onSubmit={handleSendBudgetEmail}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastname">Sobrenome</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="value">Valor em R$</label>
                  <CurrencyInput
                    decimalSeparator=","
                    thousandSeparator="."
                    id="value"
                    name="value"
                    value={value}
                    onChange={(event) => setValue(event)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="service">Serviço</label>
                  <select
                    id="services"
                    name="services"
                    onChange={(event) => setService(event.target.value)}
                  >
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
