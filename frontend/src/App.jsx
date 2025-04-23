import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './pages/registro';
import Relatorio from './pages/relatorio';

function App() {
  return (
    <Router>
      <div>
        {/* Menu de navegação simples */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/registro" style={{ margin: '10px' }}>Registro</Link>
          <Link to="/relatorio" style={{ marginRight: '10px' }}>Relatório</Link>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="*" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

