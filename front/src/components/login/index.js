import React from "react";
import logo from "../assets/logo.svg";
import hide from "../assets/hide.svg";

export function Login() {
    return (
      <div className="center">
        <div className="login">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <form>
              <label>
                <div className="title">E-mail</div>
                <input type="email" placeholder="exemplo@gmail.com" />
              </label>
              <label>
                <div className="title">Senha</div>
                <div className="password"><input type="password" />
				<a><img src={hide} alt="esconder" /></a></div>
				
              </label>
              <div className="subtitle">Esqueci minha senha</div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
        <div className="join"> 
          {" "}
          Não tem uma conta? <span href="#">Cadastre-se!</span>
        </div>
      </div>
    );
  }

  export function Cadastro () {
	  return (
		<div className="center">
        <div className="login">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <form>
			<label>
                <div className="title">Nome</div>
                <input type="text"/>
              </label>
              <label>
                <div className="title">E-mail</div>
                <input type="email" placeholder="exemplo@gmail.com" />
              </label>
              <label>
                <div className="title">Senha</div>
                <div className="password"><input type="password" />
				<a><img src={hide} alt="esconder" /></a></div>
				
              </label>
              <button>Criar conta</button>
            </form>
          </div>
        </div>
        <div className="join"> 
          {" "}
          Já possui uma conta? <span href="#">Acesse agora!</span>
        </div>
      </div>

	  )
  }