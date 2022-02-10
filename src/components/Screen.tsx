import { useState } from "react";
import { History } from "../types/history";
import { CalculationHistory } from "./CalculationHistory";

type ResultProps = {
  calculation: string;
  result: number | undefined;
  error: boolean;
  history: History;
};

export const Screen = ({
  calculation,
  result,
  error,
  history,
}: ResultProps) => {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  return (
    <div className="relative h-36 w-full bg-gray-100 text-2xl dark:bg-gray-800">
      {showHistory ? (
        <CalculationHistory history={history} />
      ) : (
        <div className="flex h-full w-full flex-col justify-center overflow-x-hidden p-4">
          <p className="mt-3 self-end text-gray-800 dark:text-gray-100">
            {calculation}
          </p>
          {error ? (
            <p className="self-end text-red-500">ERROR</p>
          ) : (
            <p className="self-end text-gray-700 dark:text-gray-400">
              {result}
            </p>
          )}
        </div>
      )}
      <p className="absolute left-0 bottom-1 w-full text-center text-base text-gray-600 dark:text-gray-500">
        <span
          className="cursor-pointer"
          onClick={() => setShowHistory((curr) => !curr)}
        >
          {showHistory ? "Close History" : "View History"}
        </span>
      </p>
    </div>
  );
};
