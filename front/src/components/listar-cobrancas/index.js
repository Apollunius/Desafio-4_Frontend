import "./style.css";
import React from "react";
import pic from "../assets/pic.svg";
import vector from "../assets/Vector.svg";
import { BarraLateral } from "../barra lateral";
import CurrencyInput from "./CurrencyInput";

export function CriarCobranca() {
    return (
        <div className="main">
            <BarraLateral></BarraLateral>
            <div className="conteudo">
                <div className="header">
                    <div className="saldo">
                        <div>
                            <span className="cifrao">$</span>
                            <span>Saldo em conta</span>
                        </div>
                        <span className="saldo-em-conta">R$ 0,00</span>
                    </div>
                    <img className="perfil" src={pic} alt="foto do perfil de usuário" />
                </div>
                <form>
                    <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" required/>
                    <button>
                        <img src={vector} alt="lupa" />
                        Buscar
                    </button>
                </form>
                <div>
                    <span>Cliente</span>
                    <span>Descrição</span>
                    <span>Valor</span>
                    <span>Status</span>
                    <span>Vencimento</span>
                    <span>Boleto</span>
                </div>
             </div>
        </div>
    );
}