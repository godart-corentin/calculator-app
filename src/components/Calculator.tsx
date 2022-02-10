import { useState } from "react";
import { Keypad } from "./Keypad";
import { Screen } from "./Screen";

import { CompleteCalculation, History } from "../types/history";

export const Calculator = () => {
  const [history, setHistory] = useState<History>([]);
  const [calculation, setCalculation] = useState<string>("");
  const [result, setResult] = useState<number>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  /** History */
  const addToHistory = (data: CompleteCalculation) => {
    const newHistory = [...history];
    newHistory.push(data);
    setHistory(newHistory);
  };

  /** Calculation  */
  const handleCalculation = () => {
    let formattedOperation = "";
    for (const char of calculation) {
      if (char === "x") {
        formattedOperation += "*";
      } else {
        formattedOperation += char;
      }
    }
    /** Remarque: Tentative de recherche/création de fonction alternative à eval (sécurité) => échec car grosse perte de temps pour le projet */
    try {
      const res = parseFloat(eval(formattedOperation));
      // Utilisation de la fonction toPrecision pour éviter les résultats du type: (0.1+0.2 = 0.3xxxxxxxxxxxx)
      const parsedResult = parseFloat(res.toPrecision(10));
      setResult(parsedResult);
      setHasError(false);
      addToHistory({ calculation, result: parsedResult });
      setIsEditable(false);
    } catch (err) {
      setHasError(true);
    }
  };

  const reset = () => {
    setCalculation("");
    setResult(undefined);
    setHasError(false);
    setIsEditable(true);
  };

  const onClickKey = (key: string) => {
    if (key === "AC") {
      reset();
    } else {
      if (isEditable) {
        if (key === "equals") {
          handleCalculation();
        } else {
          if (key === "backspace") {
            setCalculation((curr) => curr.slice(0, -1));
            setResult(undefined);
          } else {
            setCalculation((curr) => curr + key);
          }
        }
      }
    }
  };

  return (
    <div className="flex w-96 flex-col justify-center shadow-xl">
      <Screen
        calculation={calculation}
        result={result}
        error={hasError}
        history={history}
      />
      <Keypad onClick={onClickKey} />
    </div>
  );
};
