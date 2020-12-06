import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/button";
import { Header } from "../../../components/header";
import search from "../../../assets/search.svg";
import email from "../../../assets/email.svg";
import tel from "../../../assets/tel.svg";
import edit from "../../../assets/edit.svg";
import { useStores } from "../../../context";


export function ListarClientes() {

const [offset, setOffset] = React.useState(0)
const [busca, setBusca] = React.useState("");
const [dadosClientes, setDadosClientes] = React.useState("")
const [paginasCliente, setPaginasCliente] = React.useState(1)
const [paginaClienteAtual, setPaginaClienteAtual] = React.useState(1)
const { token, setIdDoCliente, idDoCliente } = useStores();

const qtdDePaginas = [];


React.useEffect(()=>{
    if(!busca) {
        fetch(`http://localhost:8081/clientes?clientesPorPagina=10&offset=${offset}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setDadosClientes(data.dados.clientes);
            setPaginasCliente(data.dados.totalDePaginas);
            setPaginaClienteAtual(data.dados.paginaAtual);
        })
        .catch(err => {
            console.error(err);
        })
    } else {
        fetch(`http://localhost:8081/clientes?busca=${busca}&clientesPorPagina=10&offset=${offset}`)
        .then(res => res.json())
        .then(data => {
            setDadosClientes(data.dados.clientes);
            setPaginasCliente(data.dados.totalDePaginas);
            setPaginaClienteAtual(data.dados.paginaAtual);
        })
        .catch(err => {
            console.error(err);
        })
    }
}, [offset])

for(let i=0; i<paginasCliente; i++) {
  qtdDePaginas.push(i+1)
}
  return (
    <div className="conteudo">
      <Header className="header-branco"></Header>
      <div className="pesquisa-e-adicionar">
        <Link to="/clientes/adicionar">
          <Button name="secondary" type="submit">
            Adicionar cliente
          </Button>
        </Link>
        <form className="busca-listar-cobranca">
          <input
            className="input-busca"
            type="text"
            placeholder="Procurar por Nome, E-mail ou CPF"
            required
          />
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
        { [...dadosClientes].map((element) => {
            return (                          
                <tr className="tabela-body">
                    <td>
                        <tr className="tabela-cliente-itens">
                            <td className="tabela-cliente-nome">
                                {element.nome}
                            </td>
                            <td>
                                <img src={email} />
                                {element.email}
                            </td>
                            <td>
                                <img src={tel} />
                                {element.tel}
                            </td>
                        </tr>
                    </td>
                    <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.cobrancasFeitas/100)}</td>
                    <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.cobrancasRecebidas/100)}</td>
                    <td>{element.estaInadimplente? 'INADIMPLENTE':'EM DIA'}</td>
                    <td>
                    <Link to="/clientes/editar">
                        <img src={edit} id={element.id} onClick={() => {
                          setIdDoCliente(element.id)
                        }}/>
                    </Link>
                    </td>
                </tr>
            )}
        )}
        </tbody>
      </table>
      <div className="mudar-pagina">
        <a href="#" className="pagina voltar">
          &#60;
        </a>
        {   
            paginasCliente != 1?
            qtdDePaginas.forEach(item => {
                return (
                <a href="#" className="pagina">
                    {item}
                </a>
            )}        
            ):
            <a href="#" className="pagina">
                1
            </a>
        }
        <a href="#" className="pagina avancar">
          &#62;
        </a>
      </div>
    </div>
  );
}
