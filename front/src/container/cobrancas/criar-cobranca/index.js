import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import { BarraLateral } from "../../../components/barra lateral";
import CurrencyInput from "./CurrencyInput"
import { Header } from "../../../components/header";
import { ButtonPrimary, ButtonSecondary } from "../../../components/button";

export function CriarCobranca() {
  return (
    <div className="main">
      <BarraLateral></BarraLateral>
      <div className="conteudo">
        <Header name="// CRIAR COBRANÇA" className="header"></Header>
        <div className="formulario">
          <form>
            <label>
              Clientes
              <select required className="select-cobranca">
                <option className="select-option" value="" disabled selected hidden> Selecione a cliente</option>
                <option className="select-option" value="cliente 1"> Cliente 1</option>
                <option className="select-option" value="cliente 2"> Cliente 2</option>
              </select>
            </label>
            <label>
              Descrição
              <textarea className="descricao" rows="5" cols="30"></textarea>
              <span className="detalhe-descricao">Essa descrição será impressa no boleto</span>
            </label>
            <div className="valor-e-vencimento">
              <label>
                Valor
                <CurrencyInput className="input-cobranca" type="text" placeholder="R$ 0,00"/>
              </label>
              <label className="separador">
                Vencimento
                <input className="input-cobranca" type="date" />
              </label>
            </div>
            <div className="buttons">
            <ButtonSecondary>Cancelar</ButtonSecondary> <ButtonPrimary id="btn-margin">Criar cobrança</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
