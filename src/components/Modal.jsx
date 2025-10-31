export default function Modal({title, children, onClose}){
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
      <div style={{background:'#fff',border:'2px solid #111',borderRadius:10,padding:16,width:360}}>
        <h3 style={{marginTop:0}}>{title}</h3>
        <div className="wf-grid">{children}</div>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <div className="wf-btn" onClick={onClose} style={{flex:1,textAlign:'center'}}>Fechar</div>
          <div className="wf-btn" style={{flex:1,textAlign:'center'}}>Confirmar</div>
        </div>
      </div>
    </div>
  );
}