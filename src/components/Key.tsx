type KeyProps = {
  value: string;
};

export const Key = ({ value }: KeyProps) => {
  return (
    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-gray-800 hover:bg-gray-700 dark:text-gray-100">
      {value}
    </div>
  );
};
