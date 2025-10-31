import { useState } from "react";
import Modal from "../components/Modal.jsx";

export default function Funcionarios() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-grid">
      <div className="wf-btn" onClick={() => setOpen(true)}>+ Novo funcionário</div>

      {open && (
        <Modal title="Novo funcionário" onClose={() => setOpen(false)}>
          <div className="field"><label>ID</label><input placeholder="Ex: 1001" /></div>
          <div className="field"><label>Nome</label><input placeholder="Ex: Ana Souza" /></div>
          <div className="field"><label>Telefone</label><input placeholder="(11) 99999-0000" /></div>
          <div className="field"><label>Endereço</label><input placeholder="Rua, nº, cidade" /></div>
          <div className="field"><label>Usuário</label><input placeholder="Ex: ana.souza" /></div>
          <div className="field"><label>Senha</label><input type="password" placeholder="••••••" /></div>
          <div className="field"><label>Nível de Permissão</label>
            <select>
              <option>ADMINISTRADOR</option>
              <option>ENGENHEIRO</option>
              <option>OPERADOR</option>
            </select>
          </div>
        </Modal>
      )}

      <div className="placeholder">[Tabela de funcionários]</div>
    </div>
  );
}