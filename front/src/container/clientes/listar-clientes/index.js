import "./style.css";
import React from "react";
import pic from "../../../assets/pic.svg";
import search from "../../../assets/search.svg";
import vector from "../../../assets/Vector.svg";
import email from "../../../assets/email.svg";
import tel from "../../../assets/tel.svg";
import edit from "../../../assets/edit.svg";
import { BarraLateral } from "../../../components/barra lateral";
import { ButtonSecondary } from "../../../components/button";
import { Header } from "../../../components/header";

export function ListarClientes() {
    return (
        <div className="main">
            <BarraLateral></BarraLateral>
            <div className="conteudo">
                <Header className="header-branco"></Header>
                <div className="pesquisa-e-adicionar">
                    <ButtonSecondary>Adicionar cliente</ButtonSecondary>
                    <form className="busca-listar-cobranca">
                        <input className="input-procurar" type="text" placeholder="Procurar por Nome, E-mail ou CPF" required/>
                        <button className="botao-listar-cobranca">
                            <img src={search} alt="lupa" />
                            Buscar
                        </button>
                    </form> 
                </div>
                
                <table className="tabela-listar-cliente">
                    <thead>
                        <tr className="tabela-header">
                            <th>Cliente</th>
                            <th>Cobranças Feitas</th>
                            <th>Cobranças Recebidas</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="computar-tabela-cliente">
                        <tr className="tabela-body">
                            <td>
                                <tr className="tabela-cliente-itens">
                                    <td className="tabela-cliente-nome">
                                        Nome e Sobrenome da Cliente
                                    </td>
                                    <td>
                                        <img src={email}/>
                                        email@email.io
                                    </td>
                                    <td>
                                        <img src={tel}/>
                                        (DDD) 4004-4828
                                    </td>
                                </tr>
                            </td>
                            <td>R$1000,00</td>
                            <td>R$1000,00</td>
                            <td>EM DIA</td>
                            <td><img src={edit}/></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mudar-pagina">
                    <a href="#" className="pagina voltar">
                        &#60;
                    </a>
                    <a href="#" className="pagina">
                        1
                    </a>
                    <a href="#" className="pagina">
                        2
                    </a>
                    <a href="#" className="pagina avancar">
                        &#62;
                    </a>
                </div>
             </div>
        </div>
    );
}