import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import { BarraLateral } from "../../../components/barra lateral";
import { Button } from "../../../components/button";
import { Header } from "../../../components/header";

export function AdicionarCliente() {
  return (
    <div className="main">
      <BarraLateral></BarraLateral>
      <div className="conteudo">
        <Header name="// ADICIONAR CLIENTE" className="header"></Header>
        <div className="formulario-clientes">
          <form className="form-clientes">
            <label>
              Nome
              <input className="input-cliente-nome" type="text"/>
            </label>
            <label>
              E-mail
              <input className="input-cliente-email" type="email"/>
            </label>
            <div className="cpf-e-telefone">
              <label>
                CPF
                <input className="input-cliente-cpf" type="text"/>
              </label>
              <label className="separador">
                Telefone
                <input className="input-cliente-telefone" type="tel" />
              </label>
            </div>
            <div className="buttons-clientes">
              <Button name='secondary' id="espaco" type="button">Cancelar</Button> <Button name="primary">Adicionar Cliente</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
