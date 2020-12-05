import "./style.css";
import React from "react";
import search from "../../../assets/search.svg";
import printer from "../../../assets/printer.svg";
import toggleOn from "../../../assets/toggle-on.svg";
import toggleOff from "../../../assets/toggle-off.svg";
import { Header } from "../../../components/header";
import { useStores } from "../../../context";

export function ListarCobranca() {
  const [offset, setOffset] = React.useState(0);
  const [dadosCobranca, setDadosCobranca] = React.useState("");
  const { token } = useStores();
  const [paginas, setPaginas] = React.useState(0);
  const [paginaAtual, setPaginaAtual] = React.useState(1);
  const qtdDePaginas = [];

  React.useEffect(() => {
    fetch(
      `http://localhost:8081/cobrancas?cobrancasPorPagina=10&offset=${offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token && `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPaginas(data.dados.totalDePaginas);
        setDadosCobranca(data.dados.cobrancas);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [offset]);

  for (let i = 0; i < paginas; i++) {
    qtdDePaginas.push(i + 1);
  }

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
          {[...dadosCobranca].map((element) => {
            return (
              <tr className="tabela-body">
                <td>Nome do cliente</td>
                <td>{element.descricao}</td>
                <td>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(element.valor / 100)}
                </td>
                <td>
                  {element.status === "PAGO" ? (
                    <img src={toggleOn} />
                  ) : element.status === "PENDENTE" ? (
                    <img src={toggleOff} />
                  ) : (
                    ""
                  )}
                  {element.status}
                </td>
                <td>
                  {element.vencimento
                    .replace("T03:00:00.000Z", "")
                    .replace(/[^\d]/g, "")
                    .replace(/(\d{4})(\d{2})(\d{2})/, "$3/$2/$1")}
                </td>
                <td>
                  <img src={printer} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mudar-pagina">
        <a href="#" className="pagina voltar">
          &#60;
        </a>
        <a href="#" className="pagina">
         
          {paginas !== 1
            ? qtdDePaginas.forEach((item) => {
                return { item };
              })
            : 1}
        </a>
        <a href="#" className="pagina avancar">
          &#62;
        </a>
      </div>
    </div>
  );
}
