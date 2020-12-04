import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import { BarraLateral } from "../../../components/barra lateral";
import { Button} from "../../../components/button";
import { Header } from "../../../components/header";

export function EditarCliente() {
  return (
    <div className="conteudo">
      <Header name="// EDITAR CLIENTE" className="header"></Header>
        <div className="formulario-clientes">
          <form className="form-clientes">
            <label>
              Nome
              <input className="input-cliente-nome" type="text" placeholder="Nome do cliente"/>
            </label>
            <label>
              E-mail
              <input className="input-cliente-email" type="email" placeholder="email@email.com"/>
            </label>
            <div className="cpf-e-telefone">
              <label>
                CPF
                <input className="input-cliente-cpf" type="text"placeholder="000.000.000-00"/>
              </label>
              <label className="separador">
                Telefone
                <input className="input-cliente-telefone" type="tel" placeholder="(DDD) 00000-0000"/>
              </label>
            </div>
            <div className="buttons-clientes">
              <Button name='secondary' id="espaco" type="button">Cancelar</Button> <Button name='primary'>Salvar alterações</Button>
            </div>
          </form>
        </div>
      </div>
  );
}
