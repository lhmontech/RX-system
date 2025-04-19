import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './pages/registro';

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
          <Route path="/historico" element={<div>Histórico ainda não implementado</div>} />
          <Route path="/relatorio" element={<div>Relatório ainda não implementado</div>} />
          <Route path="*" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

