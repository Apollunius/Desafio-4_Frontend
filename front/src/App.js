import { BarraLateral } from "./components/barra lateral";
import { CriarCobranca } from "./container/cobrancas/criar-cobranca";
import { Cadastro, Login } from "./container/login";
import { ListarCobranca } from "./container/cobrancas/listar-cobrancas";

function App() {
  
  return (
    <div>
      <ListarCobranca></ListarCobranca>
    </div>
  );
}

export default App;
