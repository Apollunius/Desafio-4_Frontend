import "./style.css";
import React from "react";
import money from "../../assets/money.svg";
import users from "../../assets/users.svg";
import { Header } from "../../components/header";
import { useStores } from "../../context";

export function Home() {

    const [dadosRelatorio, setDadosRelatorio] = React.useState("")
    const { token } = useStores();

    React.useEffect(() => {
        fetch(`http://localhost:8081/relatorios`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token && `Bearer ${token}`,
                }
            })
            .then(res => res.json())
            .then(data => {
                setDadosRelatorio(data.dados.relatorio);
            })
            .catch(err => {
                console.error(err);
            })
      }, [])
      console.log(dadosRelatorio)
    return (
        <div className="conteudo">
			<Header className="header-branco"></Header>
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
                                <span className="valor-em-dia-card"> {dadosRelatorio.qtdClientesAdimplentes} </span>
                            </div>
                            <div className="inadimplentes-card">
                                <span>
                                    Inadimplentes
                                </span>
                                <span className="valor-inadimplentes-card"> {dadosRelatorio.qtdClientesInadimplentes} </span>
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
                                <span className="valor-previstas-card"> {dadosRelatorio.qtdCobrancasPrevistas} </span>
                            </div>
                            <div className="vencidas-card">
                                <span>
                                    Vencidas
                                </span>
                                <span className="valor-vencidas-card"> {dadosRelatorio.qtdCobrancasVencidas} </span>
                            </div>
                            <div className="pagas-card">
                                <span>
                                    Pagas
                                </span>
                                <span className="valor-pagas-card"> {dadosRelatorio.qtdCobrancasPagas} </span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    );
}