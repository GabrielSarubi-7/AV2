import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal.jsx";
export default function Aeronaves(){
  const [open, setOpen] = useState(false);
  return (
    <div className="grid">
      <button className="btn" onClick={()=>setOpen(true)}>+ Nova Aeronave</button>
      {open && (
        <Modal title="Nova Aeronave" onClose={()=>setOpen(false)}>
          <div className="field"><label>Código</label><input placeholder="AC-001"/></div>
          <div className="field"><label>Modelo</label><input placeholder="E195-E2"/></div>
          <div className="field"><label>Tipo</label><select><option>COMERCIAL</option><option>MILITAR</option></select></div>
          <div className="field"><label>Capacidade</label><input type="number" placeholder="132"/></div>
          <div className="field"><label>Alcance (km)</label><input type="number" placeholder="2600"/></div>
        </Modal>
      )}
      <div className="table">
        <table>
          <thead><tr><th>Código</th><th>Modelo</th><th></th></tr></thead>
          <tbody><tr><td>AC-001</td><td>E195-E2</td><td><Link to="/aeronaves/1">Detalhes</Link></td></tr></tbody>
        </table>
      </div>
    </div>
  );
}