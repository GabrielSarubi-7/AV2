import { useState } from "react";
import Modal from "../components/Modal.jsx";

export default function Pecas(){
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-grid">
      <div className="wf-btn" onClick={()=>setOpen(true)}>+ Nova peça</div>

      {open && (
        <Modal title="Nova peça" onClose={()=>setOpen(false)}>
          <div className="field"><label>Aeronave (código)</label><input placeholder="Ex: AC-001"/></div>
          <div className="field"><label>Nome</label><input placeholder="Ex: Motor"/></div>
          <div className="field"><label>Tipo</label>
            <select>
              <option>NACIONAL</option>
              <option>IMPORTADA</option>
            </select>
          </div>
          <div className="field"><label>Fornecedor</label><input placeholder="Ex: GE"/></div>
          <div className="field"><label>Status</label>
            <select>
              <option>EM_PRODUCAO</option>
              <option>EM_TRANSPORTE</option>
              <option>PRONTA</option>
            </select>
          </div>
        </Modal>
      )}

      <div className="placeholder">[Tabela de peças]</div>
    </div>
  );
}