import { useState } from "react";
import { Keypad } from "./Keypad";
import { Result } from "./Result";

export const Calculator = () => {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<number>();

  const calculate = () => {
    let formattedOperation = "";
    for (const input of operation) {
      if (input === "x") {
        formattedOperation += "*";
      } else {
        formattedOperation += input;
      }
    }
    /** TODO: Changer la fonction eval par une fonction custom (sécurité) */
    const res = eval(formattedOperation);
    setResult(res);
  };

  const reset = () => {
    setOperation("");
    setResult(undefined);
  };

  const onClickKey = (key: string) => {
    if (key === "equals") {
      calculate();
    } else {
      if (key === "backspace") {
        setOperation((op) => op.slice(0, -1));
        setResult(undefined);
      } else if (key === "AC") {
        reset();
      } else {
        setOperation((op) => op + key);
      }
    }
  };

  return (
    <div className="flex w-96 flex-col justify-center shadow-xl">
      <Result operation={operation} result={result} />
      <Keypad onClick={onClickKey} />
    </div>
  );
};
