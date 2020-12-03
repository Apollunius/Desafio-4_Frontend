import { BarraLateral } from "./components/barra lateral";
import { CriarCobranca } from "./container/cobrancas/criar-cobranca";
import { Cadastro, Login } from "./container/login";
import { ListarCobranca } from "./container/cobrancas/listar-cobrancas";
import { ListarClientes} from "./container/clientes/listar-clientes";

function App() {
  
  return (
    <div>
      <ListarClientes></ListarClientes>
    </div>
  );
}

export default App;
