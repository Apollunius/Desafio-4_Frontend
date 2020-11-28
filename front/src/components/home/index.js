import "./style.css";
import React from "react";
import logo from "../assets/logo2.svg";
import pic from "../assets/pic.svg"
import home from "../assets/home.svg"
import cobrancas from "../assets/cobrancas.svg"
import users from "../assets/users.svg"


export function Home() {
  return (
    <div className="main">
      <div className="menuLateral">
        <div className="logo">
          <img src={logo} />
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#"><img src={home} alt="Início"/>Home</a>
              </li>
              <li>
                <a href="#"><img src={cobrancas} alt="Início"/>Cobranças</a>
              </li>
              <li>
                <a href="#"><img src={users} alt="Início"/>Clientes</a>
              </li>
            </ul>
          </nav>
		  <button>Criar cobrança</button>
        </div>
      </div>
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
					<input type="date"/>
				</label>
				<div><button>Cancelar</button> <button>Criar cobrança</button></div>
			</form>
		</div>
      </div>
    </div>
  );
}
