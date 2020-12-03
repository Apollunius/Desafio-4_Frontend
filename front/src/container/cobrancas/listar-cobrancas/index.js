import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import search from "../../../assets/search.svg";
import vector from "../../../assets/Vector.svg";
import printer from "../../../assets/printer.svg";
import { BarraLateral } from "../../../components/barra lateral";

export function ListarCobranca() {
    return (
        <div className="main">
            <BarraLateral></BarraLateral>
            <div className="conteudo">
                <div className="header">
                    <div className="saldo">
                        <div>
                            <img src={vector} className="cifrao" />
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
                    <thead>
                        <tr className="tabela-header">
                            <th>Cliente</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Vencimento</th>
                            <th>Boleto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tabela-body">
                            <td>Nome do cliente</td>
                            <td>Descricao</td>
                            <td>R$1000,00</td>
                            <td>PENDENTE</td>
                            <td>12/12/2020</td>
                            <td><img src={printer}/></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mudar-pagina">
                    <a href="#" className="pagina voltar">
                        &#60
                    </a>
                    <a href="#" className="pagina">
                        1
                    </a>
                    <a href="#" className="pagina">
                        2
                    </a>
                    <a href="#" className="pagina avancar">
                        &#62
                    </a>
                </div>
             </div>
        </div>
    );
}