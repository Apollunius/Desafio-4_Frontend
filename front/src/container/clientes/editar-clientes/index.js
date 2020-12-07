import "./style.css";
import React from "react";
import { Button } from "../../../components/button";
import { Header } from "../../../components/header";
import { useStores } from "../../../context";
import { fazerRequisicaoComBody } from "../../../helpers/fetch";
import { Link } from "react-router-dom";

export function EditarCliente() {
  const { token, idDoCliente } = useStores();
  const [novoNomeCliente, setNovoNomeCliente] = React.useState("");
  const [novoCpfCliente, setNovoCpfCliente] = React.useState("");
  const [novoEmailCliente, setNovoEmailCliente] = React.useState("");
  const [novoTelCliente, setNovoTelCliente] = React.useState("");
  const [statusEditar, setStatusEditar] = React.useState("");

  return (
    <div className="conteudo">
      <Header name="// EDITAR CLIENTE" className="header"></Header>
      <div className="formulario-clientes">
        <form className="form-clientes">
          <label>
            Nome
            <input
              className="input-cliente-nome"
              type="text"
              id="number"
              value={novoNomeCliente}
              placeholder="Nome do cliente"
              onChange={(event) => setNovoNomeCliente(event.target.value)}
            />
          </label>
          <label>
            E-mail
            <input
              className="input-cliente-email"
              type="email"
              id="number"
              value={novoEmailCliente}
              placeholder="email@email.com"
              onChange={(event) => setNovoEmailCliente(event.target.value)}
            />
          </label>
          <div className="cpf-e-telefone">
            <label>
              CPF
              <input
                className="input-cliente-cpf"
                type="text"
                id="number"
                value={novoCpfCliente}
                placeholder="000.000.000-00"
                onChange={(event) => setNovoCpfCliente(event.target.value)}
              />
            </label>
            <label className="separador">
              Telefone
              <input
                className="input-cliente-telefone"
                type="tel"
                id="number"
                value={novoTelCliente}
                placeholder="(DDD) 00000-0000"
                onChange={(event) => setNovoTelCliente(event.target.value)}
              />
            </label>
          </div>
          <div className="buttons-clientes">
            <Button name="secondary" id="espaco" type="button">
              Cancelar
            </Button>
            <Link to="/clientes">
              <Button
                name="primary"
                onClick={() => {
                  fazerRequisicaoComBody(
                    `http://localhost:8081/clientes`,
                    "PUT",
                    {
                      id: idDoCliente,
                      nome: novoNomeCliente,
                      cpf: novoCpfCliente,
                      email: novoEmailCliente,
                      tel: novoTelCliente,
                    },
                    token
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      setStatusEditar(data.dados.status);
                    })
                    .catch((err) => {
                      console.error(err);
                    });

                  statusEditar === 200
                    ? alert("Cliente editado com sucesso!")
                    : alert("CPF está inválido!!");
                }}
              >
                Salvar Alterações
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
