import { Calculator } from "./components/Calculator";
import { Info } from "./components/Info";
import { Container, InfoContainer, Title } from "./App";

function App() {
  return (
    <Container>
      <Title>CALCULADORA IMC</Title>

      <Calculator />

      <InfoContainer>
        <Info />
      </InfoContainer>
    </Container>
  );
}

export default App;
