import { useState } from "react";
import { Keypad } from "./Keypad";
import { Screen } from "./Screen";

export const Calculator = () => {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<number>();

  const handleCalculation = () => {
    let formattedOperation = "";
    for (const input of operation) {
      if (input === "x") {
        formattedOperation += "*";
      } else {
        formattedOperation += input;
      }
    }
    /** Remarque: Tentative de recherche/création de fonction alternative à eval (sécurité) => échec car grosse perte de temps pour le projet */
    const res = parseFloat(eval(formattedOperation));
    // Utilisation de la fonction toPrecision pour éviter les résultats du type: (0.1+0.2 = 0.3xxxxxxxxxxxx)
    setResult(parseFloat(res.toPrecision(10)));
  };

  const reset = () => {
    setOperation("");
    setResult(undefined);
  };

  const onClickKey = (key: string) => {
    if (key === "equals") {
      handleCalculation();
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
      <Screen operation={operation} result={result} />
      <Keypad onClick={onClickKey} />
    </div>
  );
};
