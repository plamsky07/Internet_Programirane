import { useMemo, useState } from "react";
import InputComponent from "./InputComponent";
import ResultComponent from "./ResultComponent";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");

  const { result, error } = useMemo(() => {
    if (a === "" || b === "") return { result: null, error: "" };

    const numA = Number(a);
    const numB = Number(b);

    if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
      return { result: null, error: "Грешка: въведи валидни числа!" };
    }

    if (op === "/" && numB === 0) {
      return { result: null, error: "Грешка: деление на 0 е невъзможно!" };
    }

    let res;
    switch (op) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        res = numA / numB;
        break;
      default:
        return { result: null, error: "Грешка: неизвестна операция!" };
    }

    return { result: res, error: "" };
  }, [a, b, op]);

  return (
    <div className="container">
      <h1>Калкулатор (Lifting State Up)</h1>

      <InputComponent
        a={a}
        b={b}
        op={op}
        onChangeA={setA}
        onChangeB={setB}
        onChangeOp={setOp}
      />

      <ResultComponent result={result} error={error} />
    </div>
  );
}