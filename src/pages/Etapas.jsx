import { useState } from "react";
import Modal from "../components/Modal.jsx";

export default function Etapas() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-grid">
      <div className="wf-btn" onClick={() => setOpen(true)}>+ Nova etapa</div>

      {open && (
        <Modal title="Nova etapa" onClose={() => setOpen(false)}>
          <div className="field"><label>Aeronave (código)</label><input placeholder="Ex: AC-001" /></div>
          <div className="field"><label>Nome da etapa</label><input placeholder="Ex: Montagem" /></div>
          <div className="field"><label>Prazo (dias)</label><input type="number" placeholder="Ex: 10" /></div>
          <div className="field"><label>Status</label>
            <select>
              <option>PENDENTE</option>
              <option>ANDAMENTO</option>
              <option>CONCLUIDA</option>
            </select>
          </div>
          <div className="field"><label>Responsáveis (nomes)</label><input placeholder="Ex: Ana; João" /></div>
        </Modal>
      )}

      <div className="placeholder">[Tabela de etapas]</div>
    </div>
  );
}