type ResultProps = {
  operation: string;
  result: number | undefined;
};

export const Screen = ({ operation, result }: ResultProps) => {
  return (
    <div className="flex h-36 w-full flex-col justify-center overflow-x-hidden bg-gray-100 p-4 text-2xl dark:bg-gray-800">
      <p className="mt-3 self-end text-gray-800 dark:text-gray-100">
        {operation}
      </p>
      <p className="self-end text-gray-700 dark:text-gray-400">{result}</p>
    </div>
  );
};
