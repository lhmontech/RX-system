import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Registro from './pages/registro';
import Relatorio from './pages/relatorio';
import Historico from './pages/historico';
import { FolderPen, FolderKanban, FolderSearch, Radiation } from 'lucide-react';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
      <div className="app-container">
        <nav className="navbar">
        <Radiation size={36} className="Logo" />
        <div className="tooltip">
          <Link to="/registro" className={currentPath === '/registro' ? 'active-link' : 'link'}>
            <FolderPen />    
          </Link>
          <span className="tooltipText">Registro</span>
        </div>
        <div className="tooltip">
          <Link to="/historico" className={currentPath === '/historico' ? 'active-link' : 'link'}>
            <FolderSearch />
          </Link>
          <span className="tooltipText">Histórico</span>
        </div>
        <div className="tooltip">
          <Link to="/relatorio" className={currentPath === '/relatorio' ? 'active-link' : 'link'}>
            <FolderKanban />
          </Link>
          <span className="tooltipText">Relatório</span>
        </div>
        </nav>
        <div className="FramePrincipal">
        <Routes>
          <Route path="/" element={<Navigate to="/registro" />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="*" element={<Registro />} />
          <Route path="*" element={<Navigate to="/registro" />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

