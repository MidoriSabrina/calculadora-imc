import { useState } from "react";
import { Container, InfoButton, InfoContent } from "./styles";

export function Info() {
  const [open, setOpen] = useState(false);

  const handleInfoOpen = () => {
    setOpen(!open)
  };

  return (
    <Container>
      <InfoContent isOpen={open}>
        <p>Magreza &lt; 18,5 kg/m²</p>
        <p>18,5 kg/m² &lt; Normal &lt; 24,9 kg/m² </p>
        <p>24,9 kg/m² &lt; Sobrepeso &lt; 30 kg/m²</p>
        <p> 30 kg/m² &lt; Obesidade</p>
      </InfoContent>
      <InfoButton onClick={handleInfoOpen}>?</InfoButton>
    </Container>
  );
};