import "./style.css";
import React from "react";
import { Button } from "../../../components/button";
import { Header } from "../../../components/header";
import { useStores } from "../../../context";
import { fazerRequisicaoComBody } from "../../../helpers/fetch"
import { Link } from "react-router-dom";

export function AdicionarCliente() {

  const { token } = useStores();
  const [nomeCliente, setNomeCliente] = React.useState("");
  const [cpfCliente, setCpfCliente] = React.useState("");
  const [emailCliente, setEmailCliente] = React.useState("");
  const [telCliente, setTelCliente] = React.useState("");
  
  
  return (
    <div className="conteudo">
        <Header name="// ADICIONAR CLIENTE" className="header"></Header>
        <div className="formulario-clientes">
          <form className="form-clientes">
            <label>
              Nome
              <input 
                className="input-cliente-nome" 
                type="text" 
                id="number" 
                value={nomeCliente}
                onChange={event => setNomeCliente(event.target.value)}
              />
              
            </label>
            <label>
              E-mail
              <input 
                className="input-cliente-email" 
                type="email" 
                id="number" 
                value={emailCliente}
                onChange={event => setEmailCliente(event.target.value)}
              />
            </label>
            <div className="cpf-e-telefone">
              <label>
                CPF
                <input 
                  className="input-cliente-cpf" 
                  type="text" 
                  id="number" 
                  value={cpfCliente}
                  onChange={event => setCpfCliente(event.target.value)}
                />
              </label>
              <label className="separador">
                Telefone
                <input 
                  className="input-cliente-telefone" 
                  type="tel" 
                  id="number" 
                  value={telCliente}
                  onChange={event => setTelCliente(event.target.value)}
                />
              </label>
            </div>
            <div className="buttons-clientes">
              <Link to="/clientes">
                <Button name='secondary' id="espaco" type="button">Cancelar</Button>
              </Link> 
              <Link to="/clientes">
                <Button name="primary" onClick={() => {
                  fazerRequisicaoComBody(`http://localhost:8081/clientes`, 'POST', {
                    "nome": nomeCliente,
                    "cpf": cpfCliente,
                    "email": emailCliente,
                    "tel": telCliente
                  }, token);
                  
                  alert('Cliente adicionado com sucesso!');
                }}>Adicionar Cliente</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
}
