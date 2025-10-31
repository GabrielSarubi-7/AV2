import { useState } from "react";
import Modal from "../components/Modal.jsx";
export default function Etapas(){
  const [open,setOpen] = useState(false);
  return (
    <div className="grid">
      <button className="btn" onClick={()=>setOpen(true)}>+ Nova Etapa</button>
      {open && (
        <Modal title="Nova Etapa" onClose={()=>setOpen(false)}>
          <div className="field"><label>Aeronave (código)</label><input placeholder="AC-001"/></div>
          <div className="field"><label>Nome da etapa</label><input placeholder="Montagem"/></div>
          <div className="field"><label>Prazo (dias)</label><input type="number" placeholder="10"/></div>
          <div className="field"><label>Status</label><select><option>PENDENTE</option><option>ANDAMENTO</option><option>CONCLUIDA</option></select></div>
          <div className="field"><label>Responsáveis</label><input placeholder="Ana; João"/></div>
        </Modal>
      )}
      <div className="placeholder">[Tabela de etapas]</div>
    </div>
  );
}