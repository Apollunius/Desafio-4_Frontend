import "./style.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/button";
import { useStores } from "../../context";
import { fazerRequisicaoComBody } from "../../helpers/fetch";
import logo from "../../assets/logo.svg";
import hide from "../../assets/hide.svg";
import show from "../../assets/show.svg";
import Input from "../../components/input";

export function Login(props) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { setToken } = useStores();
  const [clicado, setClicado] = React.useState(false);

  return (
    <div className="center">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              fazerRequisicaoComBody(`http://localhost:8081/auth`, "POST", {
                email,
                senha,
              })
                .then((res) => res.json())
                .then((respostaJson) => {
                  const novoToken = respostaJson.dados.token;
                  if (novoToken == undefined) {
                    return alert(
                      "Usuario inexistente, favor realizar cadastro!"
                    );
                  }
                  setToken(novoToken);
                  setEmail("");
                  setSenha("");
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
          >
            <Input
              title="E-mail"
              type="email"
              placeholder="email@email.com"
              value="email"
              onInput={(event) => setEmail(event.target.value)}
            ></Input>
            <label>
              <div className="title">Senha</div>
              <div className="password">
                <input
                  type={!clicado ? "password" : "text"}
                  onInput={(event) => setSenha(event.target.value)}
                />
                <a className="hide">
                  <img
                    onClick={() => setClicado(!clicado)}
                    src={clicado ? show : hide}
                    alt={clicado ? "mostrar" : "esconder"}
                  />
                </a>
              </div>
            </label>
            <div className="subtitle">
              <a href="">Esqueci minha senha</a>
            </div>
            <div className="btn-login-cadastro">
              <Button name="primary" disabled={!email && !senha}>
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="join">
        Não tem uma conta?
        <Link to="/cadastro">
          <span href="#">Cadastre-se!</span>
        </Link>
      </div>
    </div>
  );
}

export function Cadastro() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [clicado, setClicado] = React.useState(false);

  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className="center">
      <div className="login">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <form>
            <Input
              title="Nome"
              type="text"
              onInput={(event) => setNome(event.target.value)}
            ></Input>
            <Input
              title="E-mail"
              type="email"
              placeholder="email@email.com"
              value={email}
              onInput={(event) => setEmail(event.target.value)}
            ></Input>
            <label>
              <div className="title">Senha</div>
              <div className="password">
                <input
                  type={!clicado ? "password" : "text"}
                  value={senha}
                  onInput={(event) => setSenha(event.target.value)}
                />
                <a className="hide">
                  <img
                    onClick={() => setClicado(!clicado)}
                    src={clicado ? show : hide}
                    alt={clicado ? "mostrar" : "esconder"}
                  />
                </a>
              </div>
            </label>
            <div className="btn-login-cadastro">
              <Button
                name="primary"
                disabled={!email && !senha}
                onClick={(event) => {
                  event.preventDefault();
                  fazerRequisicaoComBody(
                    "http://localhost:8081/usuarios",
                    "POST",
                    {
                      email,
                      senha,
                      nome,
                    }
                  )
                    .then((res) => res.json())
                    .then((respostaJson) => {
                      const { id, mensagem } = respostaJson.dados;
                      if (!id) {
                        if (mensagem === "Email já existente") {
                          alert("Email já existente");
                        } else {
                          alert("Por gentileza, preencha todos os campos!");
                        }
                      } else {
                        alert("CADASTRO REALIZADO COM SUCESSO! 🎉");
                        handleClick();
                      }
                    });
                }}
              >
                {" "}
                Criar conta
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="join">
        Já possui uma conta?
        <Link to="/login">
          <span>Acesse agora!</span>
        </Link>
      </div>
    </div>
  );
}
