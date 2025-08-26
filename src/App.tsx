import axios from "axios";
import { useState } from "react";
import "./App.css";

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      const match = display.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/);
      if (match) {
        const [_, num1, op, num2] = match;
        axios
          .post("http://localhost:5000/calculate", {
            num1,
            num2,
            operation: op,
          })
          .then((res) => setResult(res.data.result))
          .catch(() => setResult("Error"));
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{display || "0"}</div>
        <div className="result">{result !== "" ? result : ""}</div>
        <div className="buttons">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
