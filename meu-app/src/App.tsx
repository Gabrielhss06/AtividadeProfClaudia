import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Saudacao from "./trilha1/Saudacao";
import Contador from "./trilha1/Contador";
import ListaDeTarefas from "./trilha1/ListaDeTarefas";
import ToggleVisibilidade from "./trilha1/ToggleVisibilidade";

function App() {
  return (
    <div>
      <h1>Meu App React + TypeScript</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Saudacao nomeInicial="Mundo" />} />
          <Route path="/contador" element={<Contador inicial={0} />} />
          <Route path="/saudacao" element={<Saudacao nomeInicial="João" />} />
          <Route
            path="/listaDeTarefas"
            element={<ListaDeTarefas tarefasIniciais={[]} />}
          />
          <Route
            path="/toggleVisibilidade"
            element={<ToggleVisibilidade texto="Exemplo de texto" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
