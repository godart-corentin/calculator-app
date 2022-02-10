import { useCallback, useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Keypad } from "./Keypad";
import { Screen } from "./Screen";
import { CompleteCalculation, History } from "../types/history";
import { useTheme } from "../context/ThemeContext";

export const Calculator = () => {
  const { setTheme } = useTheme();

  const [history, setHistory] = useState<History>([]);
  const [calculation, setCalculation] = useState<string>("");
  const [result, setResult] = useState<number | IconProp>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  /** History */
  const addToHistory = (data: CompleteCalculation) => {
    const newHistory = [...history];
    newHistory.push(data);
    setHistory(newHistory);
  };

  /** Calculation  */
  const handleCalculation = (
    onSuccess: (result: number | IconProp) => void
  ) => {
    if (calculation === "713705") {
      setTheme?.("light");
      onSuccess("sun");
    } else {
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
        onSuccess(parsedResult);
      } catch (err) {
        setHasError(true);
      }
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
          handleCalculation((result) => {
            setResult(result);
            setHasError(false);
            addToHistory({ calculation, result });
            setIsEditable(false);
          });
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

  /** On Key press (big switch) */
  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      let key = e.key;
      if (isEditable) {
        switch (key) {
          case "Backspace": {
            setCalculation((curr) => curr.slice(0, -1));
            setResult(undefined);
            break;
          }
          case "Enter": {
            handleCalculation((result) => {
              setResult(result);
              setHasError(false);
              addToHistory({ calculation, result });
              setIsEditable(false);
            });
            break;
          }
          case "0": {
            setCalculation((curr) => curr + "0");
            break;
          }
          case "1": {
            setCalculation((curr) => curr + "1");
            break;
          }
          case "2": {
            setCalculation((curr) => curr + "2");
            break;
          }
          case "3": {
            setCalculation((curr) => curr + "3");
            break;
          }
          case "4": {
            setCalculation((curr) => curr + "4");
            break;
          }
          case "5": {
            setCalculation((curr) => curr + "5");
            break;
          }
          case "6": {
            setCalculation((curr) => curr + "6");
            break;
          }
          case "7": {
            setCalculation((curr) => curr + "7");
            break;
          }
          case "8": {
            setCalculation((curr) => curr + "8");
            break;
          }
          case "9": {
            setCalculation((curr) => curr + "9");
            break;
          }
          case "/": {
            setCalculation((curr) => curr + "/");
            break;
          }
          case "*": {
            setCalculation((curr) => curr + "x");
            break;
          }
          case "-": {
            setCalculation((curr) => curr + "-");
            break;
          }
          case "+": {
            setCalculation((curr) => curr + "+");
            break;
          }
          case ".": {
            setCalculation((curr) => curr + ".");
            break;
          }
          default: {
            break;
          }
        }
      }
    },
    [calculation]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);

    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

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
