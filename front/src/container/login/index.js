import "./style.css";
import React from "react";
import logo from "../../assets/logo.svg";
import hide from "../../assets/hide.svg";
import Input from "../../components/input";
import { Button } from "../../components/button";

function fazerRequisicaoComBody(url, metodo, conteudo, token) {
    return fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
      body: JSON.stringify(conteudo),
    });
  }

export function Login(props) {
	const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const { token, setToken } = props;
  return (
    <div className="center">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <form onSubmit={(event) => {
              event.preventDefault();
              fazerRequisicaoComBody(
                `http://localhost:8081/auth`,
                "POST",
                {
                  email,
                  senha,
                }
              )
                .then((res) => res.json())
                .then((respostaJson) => {
				  const novoToken = respostaJson.dados.token;
				  console.log(novoToken)
                  setToken(novoToken);
                  setEmail("");
                  setSenha("");
                });
            }}>
            <Input
              title="E-mail"
              type="email"
			  placeholder="email@email.com"
			  value="email"
			  onInput={(event) => setEmail(event.target.value)}
            >
			</Input>
            <label>
              <div className="title">Senha</div>
              <div className="password">
                <input type="password" onInput={(event) => setSenha(event.target.value)} />
                <a className="hide">
                  <img src={hide} alt="esconder" />
                </a>
              </div>
            </label>
            <div className="subtitle">
              <a href="">Esqueci minha senha</a>
            </div>
            <div className="send-login">
              <Button name='primary'>Entrar</Button>
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
            <button>Criar conta</button>
          </form>
        </div>
      </div>
      <div className="join">
        {" "}
        Já possui uma conta? <span href="#">Acesse agora!</span>
      </div>
    </div>
  );
}
