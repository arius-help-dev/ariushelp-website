import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logoDark from "../../assets/arius-help-logo-dark.png";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // const history = useHistory();
  // se tudo certo então... history.push('/profile');

  function handleLogin(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <div id="login">
      <div className="back-link">
        <span>◄</span>
        <Link to="/">voltar</Link>
      </div>
      <div className="row">
        <div className="first-column">
          <img src={logoDark} alt="Árius-Help" />
          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Exemplo@gmail.com"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input
                placeholder="Sua senha"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <button className="button">Login</button>
            <div className="field-row">
              <div className="row">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
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
