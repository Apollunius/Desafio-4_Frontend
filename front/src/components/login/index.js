import "./style.css";
import React from "react";
import logo from "../assets/logo.svg";
import hide from "../assets/hide.svg";
import Input from "../input";

export function Login() {
  return (
    <div className="center">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <form>
            <Input
              title="E-mail"
              type="email"
              placeholder="email@email.com"
            ></Input>
            <label>
              <div className="title">Senha</div>
              <div className="password">
                <input type="password" />
                <a className="hide">
                  <img src={hide} alt="esconder" />
                </a>
              </div>
            </label>
            <div className="subtitle">
              <a href="">Esqueci minha senha</a>
            </div>
            <div className="send-login">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="join">
        {" "}
        Não tem uma conta? <a href="#">Cadastre-se!</a>
      </div>
    </div>
  );
}

export function Cadastro() {
  return (
    <div className="center">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <form>
            <Input title="Nome" type="text"></Input>
            <Input
              title="E-mail"
              type="email"
              placeholder="email@email.com"
            ></Input>
            <label>
              <div className="title">Senha</div>
              <div className="password">
                <input type="password" />
                <a className="hide">
                  <img src={hide} alt="esconder" />
                </a>
              </div>
            </label>
            <div className="send-login">
            <button>Criar conta</button>
            </div>
            
          </form>
        </div>
      </div>
      <div className="join">
        {" "}
        Já possui uma conta? <a href="#">Acesse agora!</a>
      </div>
    </div>
  );
}
