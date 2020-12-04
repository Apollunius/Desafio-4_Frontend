import { BarraLateral } from "./components/barra lateral";
import { CriarCobranca } from "./container/cobrancas/criar-cobranca";
import { Cadastro, Login } from "./container/login";
import { ListarCobranca } from "./container/cobrancas/listar-cobrancas";
import { ListarClientes } from "./container/clientes/listar-clientes";
import { AdicionarCliente } from "./container/clientes/adicionar-clientes";
import { EditarCliente } from "./container/clientes/editar-clientes";
import { Home } from "./container/home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { tokenctx, useStores } from "./context";

function App() {
  const { token } = useStores();
  return (
    <div>
      <BrowserRouter>
        <div className="main">
          {token && <BarraLateral></BarraLateral>}
          <Switch>
            {!token && <Route exact path="/login" component={Login} />}
            {token && <Route exact path="/home" component={Home} />}
            {token && (
              <Route exact path="/cobrancas" component={ListarCobranca} />
            )}
            {token && (
              <Route exact path="/clientes" component={ListarClientes} />
            )}
            {token && (
              <Route exact path="/cobrancas/criar" component={CriarCobranca} />
            )}
            {token && (
              <Route
                exact
                path="/clientes/adicionar"
                component={AdicionarCliente}
              />
            )}
            {token && (
              <Route exact path="/clientes/editar" component={EditarCliente} />
            )}
            <Route
              path="/"
              render={() => <Redirect to={token ? "/home" : "/login"} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
