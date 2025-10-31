import { Outlet, NavLink } from "react-router-dom";
export default function Layout(){
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>AEROCODE</h2>
        <div className="nav">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/aeronaves">Aeronaves</NavLink>
          <NavLink to="/pecas">Peças</NavLink>
          <NavLink to="/etapas">Etapas</NavLink>
          <NavLink to="/funcionarios">Funcionários</NavLink>
          <NavLink to="/testes">Testes</NavLink>
          <NavLink to="/relatorio">Relatório</NavLink>
        </div>
      </aside>
      <div>
        <header className="header">
          <strong>Wireframe • GUI Aerocode</strong>
          <a className="wf-btn" href="/login">Logout</a>
        </header>
        <main className="content"><Outlet/></main>
      </div>
    </div>
  );
}