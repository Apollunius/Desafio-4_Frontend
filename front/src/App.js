import { BarraLateral } from "./components/barra lateral";
import { CriarCobranca } from "./container/cobrancas/criar-cobranca";
import { Cadastro, Login } from "./container/login";
import { ListarCobranca } from "./container/cobrancas/listar-cobrancas";
import { ListarClientes } from "./container/clientes/listar-clientes";
import { AdicionarCliente } from "./container/clientes/adicionar-clientes";
import { EditarCliente } from "./container/clientes/editar-clientes";
import { Home } from "./container/home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
		<BrowserRouter>
		<Switch>
			{/* <Route exact path='/login' component={Login} /> */}
			<Route exact path='/' component={Home} />
			<Route exact path='/cobrancas' component={ListarCobranca} />
			<Route exact path='/clientes' component={ListarClientes} />
			<Route exact path='/cobrancas/criar' component={CriarCobranca} />
		</Switch>
		</BrowserRouter>
      

    </div>
  );
}

export default App;
