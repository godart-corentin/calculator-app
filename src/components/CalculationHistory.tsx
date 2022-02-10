import { History } from "../types/history";

type CalculationHistoryProps = {
  history: History;
};

export const CalculationHistory = ({ history }: CalculationHistoryProps) => {
  return (
    <div className="flex h-36 w-full flex-col overflow-x-hidden overflow-y-scroll p-4">
      {history.map((item, key) => (
        <div key={key} className="flex w-full flex-col">
          <p className="mt-3 self-end text-gray-800 dark:text-gray-100">
            {item.calculation}
          </p>
          <p className="self-end text-gray-700 dark:text-gray-400">
            {item.result}
          </p>
        </div>
      ))}
    </div>
  );
};
