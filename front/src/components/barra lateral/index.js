import React from "react";
import home from "../../assets/home.svg";
import cobrancas from "../../assets/cobrancas.svg";
import users from "../../assets/users.svg";
import logo from "../../assets/logo2.svg";
import "./style.css";
import { Button } from "../button";

export function BarraLateral() {
  return (
    <div className="menuLateral">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <nav>
          <ul>
            <li>
            <a href="/">
                <img src={home} alt="Início" />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="/cobrancas">
                <img src={cobrancas} alt="Cobranças" />
                COBRANÇAS
              </a>
            </li>
            <li>
              <a href="/clientes">
                <img src={users} alt="Clientes" />
                CLIENTES
              </a>
            </li>
          </ul>
        </nav>
		<form method='get' action='/cobrancas/criar'>
		<Button name='primary' type='submit'>Criar cobrança</Button>
		</form>
        
      </div>
    </div>
  );
}
