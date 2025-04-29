import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Registro from './pages/registro';
import Relatorio from './pages/relatorio';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
      <div className="app-container">
        <nav className="navbar">
        <img src="images/radiation.png" className="Logo" />
        <div className="tooltip">
          <Link to="/registro" className={currentPath === '/registro' ? 'active-link' : ''}>
            <img 
              src={currentPath === '/registro' ? '/images/folder-pen-active.png' : '/images/folder-pen.png'} 
              alt="ícone de registro" 
            />
            <span className="tooltipText">Registro</span>
          </Link>
        </div>
        <div className="tooltip">
          <Link to="/relatorio" className={currentPath === '/relatorio' ? 'active-link' : ''}>
            <img 
              src={currentPath === '/relatorio' ? '/images/folder-kanban-active.png' : '/images/folder-kanban.png'} 
              alt="ícone de relatório" 
            />
          </Link>
          <span className="tooltipText">Relatório</span>
        </div>
        </nav>
        <div className="FramePrincipal">
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="*" element={<Registro />} />
        </Routes>
        <Outlet />
        </div>
      </div>
  );
}

export default App;

