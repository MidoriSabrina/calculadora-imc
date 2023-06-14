import { ChangeEvent, useState } from "react";
import './styles.css'

export function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [resultNumber, setResultNumber] = useState("");

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setResultStatus("");
    setResultNumber("");
  };

  const handleInputHeight = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) setHeight(value);
  };

  const handleInputWeight = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^[\d.,]*$/.test(value)) setWeight(value.replace(/,/g, "."));
  };

  const verifyStatusImc = (imc: number) => {
    if (imc > 30) return "Obesidade";
    if (imc >= 24.9) return "Sobrepeso";
    if (imc >= 18.5) return "Normal";
    return "Magreza";
  };

  const calculate = () => {
    if (height == "" || weight == "")
      setResultStatus("Preencha todos os campos");
    else {
      const imc = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
      const status = verifyStatusImc(imc);

      setResultStatus(status);
      setResultNumber(imc.toFixed(1) + " kg/m²");
    }
  };

  return (
    <div className="calculator-container">
      <div className="visor">
        <div>
          <p className="resultStatus">{resultStatus}</p>
        </div>
        <div>
          <p className="resultNumber">{resultNumber}</p>
        </div>
      </div>
      <div className="input-container">
        <p>Altura (cm)</p>
        <input
          type="text"
          placeholder="Insira sua altura"
          value={height}
          maxLength={3}
          onChange={(event) => handleInputHeight(event)}
        />
      </div>
      <div className="input-container">
        <p>Peso (kg)</p>
        <input
          type="text"
          placeholder="Insira seu peso"
          value={weight}
          maxLength={5}
          onChange={(event) => handleInputWeight(event)}
        />
      </div>
      <div className="button-line">
        <button className="clear" onClick={clearAll}>
          Limpar
        </button>
        <button className="calculate" onClick={calculate}>
          Calcular
        </button>
      </div>
    </div>
  );
}
