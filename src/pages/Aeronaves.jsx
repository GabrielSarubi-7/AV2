import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal.jsx";

export default function Aeronaves(){
  const [open, setOpen] = useState(false);
  return (
    <div className="wf-grid">
      <div className="wf-btn" onClick={()=>setOpen(true)}>+ Nova aeronave</div>

      {open && (
        <Modal title="Nova aeronave" onClose={()=>setOpen(false)}>
          <div className="field"><label>Código (único)</label><input placeholder="Ex: AC-001"/></div>
          <div className="field"><label>Modelo</label><input placeholder="Ex: E195-E2"/></div>
          <div className="field"><label>Tipo</label>
            <select>
              <option>COMERCIAL</option>
              <option>MILITAR</option>
            </select>
          </div>
          <div className="field"><label>Capacidade (passageiros)</label><input placeholder="Ex: 132" type="number"/></div>
          <div className="field"><label>Alcance (km)</label><input placeholder="Ex: 2600" type="number"/></div>
        </Modal>
      )}

      <div className="table">
        <table>
          <thead><tr><th>Código</th><th>Modelo</th><th>Tipo</th><th></th></tr></thead>
          <tbody>
            <tr><td>AC-001</td><td>E195-E2</td><td>COMERCIAL</td><td><Link to="/aeronaves/1">Detalhes</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}