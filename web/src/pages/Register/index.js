import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contract, setContract] = useState(false);

  // const history = useHistory();
  // se tudo certo então... history.push('/login');

  function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      contract,
    };
    console.log(data);

  }

  return (
    <div id="register">
      <div className="back-link">
        <span>◄</span>
        <Link to="/">voltar</Link>
      </div>

      <div className="row">
        <div className="image-background"></div>

        <div className="content-column">
          <h2>Faça seu cadastro gratuíto</h2>
          <p>
            Faça já sua conta 100% gratuita e vamos já melhorar seu marketing
            digital!
          </p>

          <form onSubmit={handleRegister}>
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
                  value={lastName}
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
                <label htmlFor="phone">Nº Celular</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="cofirmPassword">Confirme a Senha</label>
                <input
                  type="password"
                  id="cofirmPassword"
                  name="cofirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="contract-field">
              <input
                type="radio"
                id="contract"
                name="contract"
                value={true}
                onChange={(event) => setContract(event.target.value)}
              />
              <label htmlFor="contract">
                eu concordo com os <b>termos de uso</b>
              </label>
            </div>
            <button className="button">Cadastrar</button>
            <div className="field-login">
              <b>
                Já possui alguma conta? Faça <Link to="/login">Login</Link>
              </b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
