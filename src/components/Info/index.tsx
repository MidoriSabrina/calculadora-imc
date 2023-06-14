import { useState } from "react";
import './styles.css'

export function Info() {
  const [open, setOpen] = useState(false);

  const handleInfoOpen = () => {
    setOpen(prev => !prev)
  };

  return (
    <div className="info-container">
      <div className={open ? 'info-content open' : 'info-content closed'}>
        <p>Magreza &lt; 18,5 kg/m²</p>
        <p>18,5 kg/m² &lt; Normal &lt; 24,9 kg/m² </p>
        <p>24,9 kg/m² &lt; Sobrepeso &lt; 30 kg/m²</p>
        <p> 30 kg/m² &lt; Obesidade</p>
      </div>
      <button className="info-button" onClick={handleInfoOpen}>?</button>
    </div>
  );
};