import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="content" style={{ maxWidth: 420, margin: '64px auto' }}>
      <div className="wf-card">
        <h2>Login — Aerocode</h2>
        <div className="wf-grid">
          <div className="field"><label>Usuário</label><input placeholder="Digite seu usuário" /></div>
          <div className="field"><label>Senha</label><input type="password" placeholder="Digite sua senha" /></div>
          <Link className="wf-btn" to="/dashboard">Entrar</Link>
        </div>
      </div>
    </div>
  );
}