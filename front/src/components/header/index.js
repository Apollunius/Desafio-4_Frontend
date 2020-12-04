import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStores } from "../../context";

import vector from "../../assets/Vector.svg";
import pic from "../../assets/pic.svg";
import logout from "../../assets/log-out.svg";

export function Header(props) {
  const [click, setClick] = useState(true);
  const { token, setToken } = useStores();

  return (
    <div className={props.className}>
      {props.name ? (
        <span className="title-header">{props.name}</span>
      ) : (
        <div className="saldo">
          <div>
            <img src={vector} className="cifrao" />
            <span>Saldo em conta</span>
          </div>
          <span className="saldo-em-conta">R$ 0,00</span>
        </div>
      )}
      <div className="perfil">
        <img
          onClick={() => setClick(!click)}
          className="perfil"
          src={pic}
          alt="foto do perfil de usuário"
        />
        {!click ? (
          <Link to="/login">
            <div className="logout">
              <img src={logout} alt="Deslogar"/>
              <button onClick={() => setToken(null)}>Deslogar</button>
            </div>
          </Link>
        ) : undefined}
      </div>
    </div>
  );
}
