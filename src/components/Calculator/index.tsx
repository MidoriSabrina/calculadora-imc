import { ChangeEvent, SetStateAction, useState } from "react";
import {
  Button,
  Container,
  Input,
  InputContainer,
  Visor,
  VisorBottom,
  VisorTop,
} from "./styles";

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
    if( imc > 30) return 'Obesidade';
    if( imc >= 24.9) return 'Sobrepeso';
    if( imc >= 18.5) return 'Normal';
    return 'Magreza';
  }

  const calculate = () => {
    if(height == '' || weight == '') setResultStatus('Preencha todos os campos')
    else {
      const imc = parseFloat(weight) / ((parseFloat(height)/100)** 2);
      const status = verifyStatusImc(imc);
  
      setResultStatus(status)
      setResultNumber((imc).toFixed(1) + ' kg/m2')
    }
  };

  return (
    <Container>
      <Visor>
        <VisorTop>
          <p className="resultStatus">{resultStatus}</p>
        </VisorTop>
        <VisorBottom>
          <p className="resultNumber">{resultNumber}</p>
        </VisorBottom>
      </Visor>
      <InputContainer>
        <p>Altura (cm)</p>
        <Input
          placeholder="Insira sua altura"
          value={height}
          maxLength={3}
          onChange={(event) => handleInputHeight(event)}
        />
      </InputContainer>
      <InputContainer>
        <p>Peso (kg)</p>
        <Input
          placeholder="Insira seu peso"
          value={weight}
          maxLength={5}
          onChange={(event) => handleInputWeight(event)}
        />
      </InputContainer>
      <div className="buttonLine">
        <Button background="#8ECAE6" color="#0C0C0C" onClick={clearAll}>
          Limpar
        </Button>
        <Button background="#219EBC" color="#FCFCFC" onClick={calculate}>
          Calcular
        </Button>
      </div>
    </Container>
  );
}
