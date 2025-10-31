export default function AeronaveDetalhe(){
  return (
    <div className="wf-grid">
      <div className="wf-card">[Informações da aeronave selecionada]</div>
      <div className="wf-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="wf-card">[Etapas da aeronave]</div>
        <div className="wf-card">[Peças da aeronave]</div>
      </div>
      <div className="wf-card">[Testes realizados]</div>
      <div className="wf-btn">Gerar Relatório</div>
    </div>
  );
}