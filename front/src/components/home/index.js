import "./style.css";
import React from "react";
import pic from "../assets/pic.svg";
import { BarraLateral } from "../barra lateral";

export function Home() {
  return (
    <div className="main">
      <BarraLateral></BarraLateral>
      <div className="conteudo">
        <div className="header">
          <div>// CRIAR COBRANÇA</div>
          <img src={pic} alt="foto do perfil de usuário" />
        </div>
        <div className="formulario">
          <form>
            <label>
              Clientes
              <select name="Selecione o Cliente">
                <option value="cliente 1"> Cliente 1</option>
                <option value="cliente 2"> Cliente 2</option>
                <option value="cliente 3"> Cliente 3</option>
                <option value="cliente 4"> Cliente 4</option>
                <option value="cliente 5"> Cliente 5</option>
              </select>
            </label>
            <label>
              Descrição
              <input type="text"></input>
              <span>Essa descrição será impressa no boleto</span>
            </label>
            <label>
              Valor
              <input type="number" />
            </label>
            <label>
              Vencimento
              <input type="date" />
            </label>
            <div>
              <button>Cancelar</button> <button>Criar cobrança</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
