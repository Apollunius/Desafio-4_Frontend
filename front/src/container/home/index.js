import "./style.css";
import React from "react";
import pic from "../../assets/pic.svg";
import vector from "../../assets/Vector.svg";
import money from "../../assets/money.svg";
import users from "../../assets/users.svg";
import { BarraLateral } from "../../components/barra lateral";

export function Home() {
    return (
        <div className="main">
            <BarraLateral></BarraLateral>
            <div className="conteudo">
                <div className="header-home">
                    <div className="saldo">
                        <div>
                            <img src={vector} className="cifrao" />
                            <span>Saldo em conta</span>
                        </div>
                        <span className="saldo-em-conta">R$ 0,00</span>
                    </div>
                    <img className="perfil" src={pic} alt="foto do perfil de usuário" />
                </div>
                <div className="cards">
                    <div className="card-cliente">
                        <div className="header-clientes">
                            <img src={users} />
                            Clientes
                        </div>
                        <div className="card-conteudo">                        
                            <div className="em-dia-card">
                                <span>
                                    Em dia
                                </span>
                                <span className="valor-em-dia-card"> 0 </span>
                            </div>
                            <div className="inadimplentes-card">
                                <span>
                                    Inadimplentes
                                </span>
                                <span className="valor-inadimplentes-card"> 0 </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-cobranca">
                        <div className="header-cobrancas">
                            <img src={money} />
                            Cobranças
                        </div>
                        <div className="card-conteudo"> 
                            <div className="previstas-card">
                                <span>
                                    Previstas
                                </span>
                                <span className="valor-previstas-card"> 0 </span>
                            </div>
                            <div className="vencidas-card">
                                <span>
                                    Vencidas
                                </span>
                                <span className="valor-vencidas-card"> 0 </span>
                            </div>
                            <div className="pagas-card">
                                <span>
                                    Pagas
                                </span>
                                <span className="valor-pagas-card"> 0 </span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}