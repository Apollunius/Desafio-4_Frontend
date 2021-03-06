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
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { fazerRequisicaoComBody } from "../../../helpers/fetch"


export function ListarClientes() {

const [offset, setOffset] = React.useState(0)
const [busca, setBusca] = React.useState("");
const [dadosClientes, setDadosClientes] = React.useState("")
const [paginasCliente, setPaginasCliente] = React.useState(1)
const [paginaClienteAtual, setPaginaClienteAtual] = React.useState(1)
const { token, setIdDoCliente, idDoCliente } = useStores();

async function onChange() {

  await fazerRequisicaoComBody(
    `http://localhost:8081/clientes?clientesPorPagina=10&offset=${offset}`,
    "GET",
    undefined,
    token
  )
    .then((res) => res.json())
    .then((data) => {
      setDadosClientes(data.dados.clientes);
      setPaginasCliente(data.dados.totalDePaginas);
      setPaginaClienteAtual(data.dados.paginaAtual);
    });
}
React.useEffect(()=>{
  if(busca) {
    fetch(`http://localhost:8081/clientes?busca=${busca}&clientesPorPagina=10&offset=${offset}`, {
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
  }
}, [offset])

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
            value={busca}
            onChange={event => setBusca(event.target.value)}
            required
          />
          <button className="botao-listar-cobranca" type="button" onClick={()=> {
          }}>
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
                    <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.cobrancasFeitas/10000)}</td>
                    <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.cobrancasRecebidas/10000)}</td>
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
        <div className="pagination">
          <Pagination
            size="small"
            total={paginasCliente * 10}
            pageSize={10}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
