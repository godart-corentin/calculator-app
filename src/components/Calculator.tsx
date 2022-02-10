import { useState } from "react";
import { Keypad } from "./Keypad";
import { Result } from "./Result";

export const Calculator = () => {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<number>();
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const calculate = () => {
    let formattedOperation = "";
    for (const input of operation) {
      if (input === "x") {
        formattedOperation += "*";
      } else {
        formattedOperation += input;
      }
    }
    const res = eval(formattedOperation);
    setIsCalculated(true);
    setResult(res);
  };

  const onClickKey = (key: string) => {
    if (key === "equals") {
      calculate();
    } else {
      if (isCalculated) {
        setOperation("");
        setResult(undefined);
        setIsCalculated(false);
      }
      if (key === "backspace") {
        setOperation((op) => op.slice(0, -1));
      } else {
        setOperation((op) => op + key);
      }
    }
  };

  return (
    <div className="shadow-xl">
      <Result operation={operation} result={result} />
      <Keypad onClick={onClickKey} />
    </div>
  );
};
