import "./style.css";
import React from "react";
import search from "../../../assets/search.svg";
import printer from "../../../assets/printer.svg";
import toggleOn from "../../../assets/toggle-on.svg";
import toggleOff from "../../../assets/toggle-off.svg";
import { Header } from "../../../components/header";
import { useStores } from "../../../context";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { fazerRequisicaoComBody } from "../../../helpers/fetch"

export function ListarCobranca() {

  const [offset, setOffset] = React.useState(0)
  const [dadosCobranca, setDadosCobranca] = React.useState("")
  const { token } = useStores();
  const [paginasCobranca, setPaginasCobranca] = React.useState(1)
  const [paginaCobrancaAtual, setPaginaCobrancaAtual] = React.useState(1)

  async function onChange() {
  
    await fazerRequisicaoComBody(
      `http://localhost:8081/clientes?clientesPorPagina=10&offset=${offset}`,
      "GET",
      undefined,
      token
    )
      .then((res) => res.json())
      .then((data) => {
        setDadosClientes(data.dados.cobrancas);
        setPaginasCliente(data.dados.totalDePaginas);
        setPaginaClienteAtual(data.dados.paginaAtual);
      });
  }

  React.useEffect(() => {
    fetch(`http://localhost:8081/cobrancas?cobrancasPorPagina=10&offset=${offset}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setDadosCobranca(data.dados.cobrancas);
            setPaginasCobranca(data.dados.totalDePaginas);
            setPaginaCobrancaAtual(data.dados.paginaAtual);
        })
        .catch(err => {
            console.error(err);
        })
  }, [offset])

  console.log(dadosCobranca)
  return (
    <div className="conteudo">
      <Header className="header-branco"></Header>
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
        { [...dadosCobranca].map((element) => {
          const parteDoVencimento = element.vencimento.substring(0, 10);
          const vencimentoInvertido = parteDoVencimento.replace(/[^\d]/g, '');
          const vencimentoReal = vencimentoInvertido.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1')
          return (                          
            <tr className="tabela-body">
              <td>{element.iddocliente}</td>
              <td>{element.descricao.length>10? element.descricao.slice(0, 9) + "...": element.descricao}</td>
              <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.valor/100)}</td>
              <td className="status">{element.status=='PAGO'? <img src={toggleOn} />: element.status=='AGUARDANDO'? <img src={toggleOff}/>: ''}{element.status}</td>
              <td>{vencimentoReal}</td>
              <td>
                <img src={printer} />
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
            total={paginasCobranca * 10}
            pageSize={10}
            onChange={onChange}
          />
          </div>
      </div>
    </div>
  );
}
