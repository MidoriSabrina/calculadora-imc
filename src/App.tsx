import { Calculator } from "./components/Calculator";
import { Info } from "./components/Info";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <p className="title">CALCULADORA IMC</p>

      <Calculator />

      <div className="info">
        <Info />
      </div>
    </div>
  );
}

export default App;
