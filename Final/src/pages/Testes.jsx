import { useState } from "react";
import Modal from "../components/Modal.jsx";
export default function Testes(){
  const [open,setOpen] = useState(false);
  return (
    <div className="grid">
      <button className="btn" onClick={()=>setOpen(true)}>+ Registrar Teste</button>
      {open && (
        <Modal title="Registrar Teste" onClose={()=>setOpen(false)}>
          <div className="field"><label>Aeronave (código)</label><input placeholder="AC-001"/></div>
          <div className="field"><label>Tipo de teste</label><select><option>ELETRICO</option><option>HIDRAULICO</option><option>AERODINAMICO</option></select></div>
          <div className="field"><label>Resultado</label><select><option>APROVADO</option><option>REPROVADO</option></select></div>
          <div className="field"><label>Observações</label><input placeholder="Opcional"/></div>
        </Modal>
      )}
      <div className="placeholder">[Tabela de testes]</div>
    </div>
  );
}