import React from "react";
import "./style.css";
import { Button } from "../button";
import { Link } from "react-router-dom";

import home from "../../assets/home.svg";
import cobrancas from "../../assets/cobrancas.svg";
import users from "../../assets/users.svg";
import logo from "../../assets/logo2.svg";

export function BarraLateral() {
  return (
    <div className="menuLateral">
      <Link to='/home'><div className="logo">
        <img src={logo} />
      </div>
	  </Link>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/home">
                <img src={home} alt="Início" />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/cobrancas">
                <img src={cobrancas} alt="Cobranças" />
                COBRANÇAS
              </Link>
            </li>
            <li>
              <Link to="/clientes">
                <img src={users} alt="Clientes" />
                CLIENTES
              </Link>
            </li>
          </ul>
        </nav>
		<Link to='/cobrancas/criar'>
		<Button name='primary' type='submit'>Criar cobrança</Button>
		</Link>
        
      </div>
    </div>
  );
}
