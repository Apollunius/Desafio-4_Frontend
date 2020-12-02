import "./style.css";
import React from "react";
import pic from "../../assets/pic.svg";
import { BarraLateral } from "../../../components/barra lateral";
// import CurrencyInput from "./CurrencyInput";


export function CriarCliente() {
  return (
    <div className="main">
      <BarraLateral></BarraLateral>
      <div className="conteudo">
        <div className="header">
          <span className="title-cliente">// ADICIONAR CLIENTE</span>
          <img className="perfil" src={pic} alt="foto do perfil de usuário" />
        </div>
        <div className="formulario">
          <form>
            <label>
              Nome
              <input type="text" className="inputNome"/>
            </label>
            <label>
              Email
              <input className="inputEmail" type="email" />
             
            </label>
            <div className="cpf-e-telefone">
              <label>
                CPF
				<input className="inputCPF" type="text" maxlength="14"  placeholder="000.000.000-00"/>
              </label>
              <label className="separador">
                Telefone
                <input className="inputTelefone" type="tel" />
              </label>
            </div>
            <div className="buttons">
              <button className="button-1">Cancelar</button> <button className="button-2">Adicionar Cliente</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
