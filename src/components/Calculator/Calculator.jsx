import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("+");
  const [result, setResult] = useState(0);

  const handleChangeA = (event) => {
    setA(event.target.value);
  };

  const handleChangeB = (event) => {
    setB(event.target.value);
  };

  const handleChangeOp = (event) => {
    setOp(event.target.value);
  };

  const handleCalc = () => {
    switch (op) {
      case "+":
        setResult(parseInt(a) + parseInt(b));
        break;
      case "-":
        setResult(parseInt(a) - parseInt(b));
        break;
      case "*":
        setResult(parseInt(a) * parseInt(b));
        break;
      case "/":
        setResult(parseInt(a) / parseInt(b));
        break;
      default:
        setResult("Invalid operator");
    }
  };

  return (
    <>
      <input
        type="text"
        className="a"
        onChange={handleChangeA}
        placeholder="a"
        id="inputText"
      />
      <br />
      <input
        type="text"
        className="b"
        onChange={handleChangeB}
        placeholder="b"
        id="inputText"
      />
      <br />
      <input
        type="radio"
        name="group"
        id=""
        value="+"
        onClick={handleChangeOp}
      />{" "}
      <span>+</span>
      <input
        type="radio"
        name="group"
        id=""
        value="-"
        onClick={handleChangeOp}
      />{" "}
      <span>-</span>
      <input
        type="radio"
        name="group"
        id=""
        value="*"
        onClick={handleChangeOp}
      />{" "}
      <span>*</span>
      <input
        type="radio"
        name="group"
        id=""
        value="/"
        onClick={handleChangeOp}
      />{" "}
      <span>/</span>
      <br />
      <button onClick={handleCalc}>Clac</button>
      <br />
      <span>Result is: {result}</span>
    </>
  );
}

export default Calculator;
