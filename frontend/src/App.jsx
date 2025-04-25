import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Registro from './pages/registro';
import Relatorio from './pages/relatorio';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Menu de navegação simples */}
        <nav className="navbar">
          <Link to="/registro">Registro</Link>
          <Link to="/relatorio">Relatório</Link>
        </nav>
        <div className="content">
        <Outlet />
        </div>

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

