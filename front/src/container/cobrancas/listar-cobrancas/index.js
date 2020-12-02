import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import search from "../../../assets/search.svg";
import vector from "../../../assets/Vector.svg";
import { BarraLateral } from "../../../components/barra lateral";

export function ListarCobranca() {
    return (
        <div className="main">
            <BarraLateral></BarraLateral>
            <div className="conteudo">
                <div className="header">
                    <div className="saldo">
                        <div>
                            <img src={vector}className="cifrao" />
                            <span>Saldo em conta</span>
                        </div>
                        <span className="saldo-em-conta">R$ 0,00</span>
                    </div>
                    <img className="perfil" src={pic} alt="foto do perfil de usuário" />
                </div>
                <form className="busca-listar-cobranca">
                    <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" required/>
                    <button className="botao-listar-cobranca">
                        <img src={search} alt="lupa" />
                        Buscar
                    </button>
                </form>
                <table>
                    <tr>
                        <td>Cliente</td>
                        <td>Descrição</td>
                        <td>Valor</td>
                        <td>Status</td>
                        <td>Vencimento</td>
                        <td>Boleto</td>
                    </tr>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                </table>
             </div>
        </div>
    );
}