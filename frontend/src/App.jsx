import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './pages/registro';
import Historico from './pages/historico';
// Você ainda pode criar o componente de Relatório depois

function App() {
  return (
    <Router>
      <div>
        {/* Menu de navegação simples */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/registro" style={{ marginRight: '10px' }}>Registro</Link>
          <Link to="/historico" style={{ marginRight: '10px' }}>Histórico</Link>
          <Link to="/relatorio">Relatório</Link>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/relatorio" element={<div>Relatório ainda não implementado</div>} />
          <Route path="*" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

