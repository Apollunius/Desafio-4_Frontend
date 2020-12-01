import React from "react";
import home from "../assets/home.svg";
import cobrancas from "../assets/cobrancas.svg";
import users from "../assets/users.svg";
import logo from "../assets/logo2.svg";
import "./style.css";

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
              <a href="#">
                <img src={home} alt="Início" />
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={cobrancas} alt="Início" />
                COBRANÇAS
              </a>
            </li>
            <li>
              <a href="#">
                <img src={users} alt="Início" />
                CLIENTES
              </a>
            </li>
          </ul>
        </nav>
        <button>Criar cobrança</button>
      </div>
    </div>
  );
}
