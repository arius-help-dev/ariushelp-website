import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logoDark from "../../assets/arius-help-logo-dark.png";

const Login = () => {
  return (
    <div id="login">
      <div className="back-link">
        <span>◄</span>
        <Link to="/">voltar</Link>
      </div>
      <div className="row">
        <div className="first-column">
          <img src={logoDark} alt="Árius-Help" />
          <form>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Exemplo@gmail.com"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input
                placeholder="Sua senha"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button className="button">Login</button>
            <div className="field-row">
              <div className="row">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
                  placeholder="lembrar"
                />
                <label htmlFor="rememberPassword">Lembrar Senha</label>
              </div>
              <Link to="/recover">Esqueceu a Senha?</Link>
            </div>
          </form>

          <div className="field-register">
            <b>
              Ainda não possui uma conta?
              <Link to="/register">Cadastre-se</Link>
            </b>
          </div>
        </div>

        <div className="image-background"></div>
      </div>
    </div>
  );
};

export default Login;
