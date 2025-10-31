import { useState } from "react";
import Modal from "../components/Modal.jsx";

export default function Testes(){
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-grid">
      <div className="wf-btn" onClick={()=>setOpen(true)}>+ Registrar teste</div>

      {open && (
        <Modal title="Registrar teste" onClose={()=>setOpen(false)}>
          <div className="field"><label>Aeronave (código)</label><input placeholder="Ex: AC-001"/></div>
          <div className="field"><label>Tipo de teste</label>
            <select>
              <option>ELETRICO</option>
              <option>HIDRAULICO</option>
              <option>AERODINAMICO</option>
            </select>
          </div>
          <div className="field"><label>Resultado</label>
            <select>
              <option>APROVADO</option>
              <option>REPROVADO</option>
            </select>
          </div>
          <div className="field"><label>Observações</label><input placeholder="Opcional"/></div>
        </Modal>
      )}

      <div className="placeholder">[Tabela de testes]</div>
    </div>
  );
}