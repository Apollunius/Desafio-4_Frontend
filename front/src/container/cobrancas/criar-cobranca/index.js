import "./style.css";
import React from "react";
import CurrencyInput from "./CurrencyInput";
import { Header } from "../../../components/header";
import { Button } from "../../../components/button";
import { useStores } from "../../../context";
import { Link } from "react-router-dom";
import { fazerRequisicaoComBody } from "../../../helpers/fetch"

export function CriarCobranca() {

  const { token } = useStores();
  const [dadosTodosClientes, setDadosTodosClientes] = React.useState("")
  const [idClienteSelecionado, setIdClienteSelecionado] = React.useState("")
  const [nomeClienteSelecionado, setNomeClienteSelecionado] = React.useState("")
  const [descricaoCobranca, setDescricaoCobranca] = React.useState("");
  const [valorCobranca, setValorCobranca] = React.useState("");
  const [vencimentoCobranca, setVencimentoCobranca] = React.useState("");

  React.useEffect(()=>{
    fetch(`http://localhost:8081/clientes/dados`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      setDadosTodosClientes(data.dados.dados)
      console.log(dadosTodosClientes)
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="conteudo">
      <Header name="// CRIAR COBRANÇA" className="header"></Header>
      <div className="formulario">
        <form>
          <label>
            Clientes
            <select required className="select-cobranca" onChange={event => {
                      setIdClienteSelecionado(event.target.value)
                    }}>
              <option
                className="select-option"
                value=""
                disabled
                selected
                hidden
              >
                {" "}
                Selecione a cliente
              </option>
              {[...dadosTodosClientes].map((element) => {
                return (
                  <option 
                    className="select-option" 
                    value={element.id}
                    onChange={event => {
                      setNomeClienteSelecionado(event.target.value)
                      setIdClienteSelecionado(element.id)
                      console.log(idClienteSelecionado)
                    }
                      }>
                    {" "}
                    {element.nome}
                  </option>
                )
              })} 
            </select>
          </label>
          <label>
            Descrição
            <textarea 
              className="descricao" 
              rows="5" 
              cols="30"
              id="number" 
              value={descricaoCobranca}
              onChange={event => setDescricaoCobranca(event.target.value)}
            ></textarea>
            <span className="detalhe-descricao">
              Essa descrição será impressa no boleto
            </span>
          </label>
          <div className="valor-e-vencimento">
            <label>
              Valor
              <CurrencyInput
                className="input-cobranca"
                type="text"
                placeholder="R$ 0,00"
                id="number" 
                value={valorCobranca}
                onChange={event => setValorCobranca(event.target.value)}
              />
            </label>
            <label className="separador">
              Vencimento
              <input 
                className="input-cobranca" 
                type="date" 
                id="number" 
                value={vencimentoCobranca}
                onChange={event => setVencimentoCobranca(event.target.value)} />
            </label>
          </div>
          <div className="buttons">
            <Link to="/cobranca">
              <Button name='secondary' id="espaco" type="button">Cancelar</Button>{" "}
            </Link> 
            <Link to="/cobranca">
              <Button name="primary" id="btn-margin" onClick={() => {
                const novoValor = valorCobranca.replace(/[^\d]/g, '')*100;
                
                console.log(idClienteSelecionado, descricaoCobranca, valorCobranca, novoValor, vencimentoCobranca )
                  fazerRequisicaoComBody(`http://localhost:8081/cobrancas`, 'POST', {
                    "idDoCliente": idClienteSelecionado,
                    "descricao": descricaoCobranca,
                    "valor": novoValor,
                    "vencimento": vencimentoCobranca
                  }, token);
                  
                  alert('Cobrança criada com sucesso!');
              }}>
                Criar cobrança
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
