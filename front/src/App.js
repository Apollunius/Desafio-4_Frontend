import { BarraLateral } from "./components/barra lateral";
import { CriarCobranca } from "./container/cobrancas/criar-cobranca";
import { Cadastro, Login } from "./container/login";
import { ListarCobranca } from "./container/cobrancas/listar-cobrancas";
import { ListarClientes } from "./container/clientes/listar-clientes";
import { AdicionarCliente } from "./container/clientes/adicionar-clientes";
import { EditarCliente } from "./container/clientes/editar-clientes";

function App() {
  
  return (
    <div>
      <EditarCliente></EditarCliente>
    </div>
  );
}

export default App;
