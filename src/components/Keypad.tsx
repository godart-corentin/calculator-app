import { Key } from "./Key";

type KeypadProps = {
  onClick: (key: string) => void;
};

export const Keypad = ({ onClick }: KeypadProps) => {
  return (
    <div className="grid w-full grid-cols-4 grid-rows-5 gap-4 bg-gray-200 p-4 dark:bg-gray-900">
      <Key value="AC" onKeyClick={onClick} />
      <Key value="backspace" icon="backspace" onKeyClick={onClick} />
      <Key value="%" onKeyClick={onClick} />
      <Key
        value="/"
        icon="divide"
        onKeyClick={onClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      />
      <Key value="7" onKeyClick={onClick} />
      <Key value="8" onKeyClick={onClick} />
      <Key value="9" onKeyClick={onClick} />
      <Key
        value="x"
        icon="multiply"
        onKeyClick={onClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      />
      <Key value="4" onKeyClick={onClick} />
      <Key value="5" onKeyClick={onClick} />
      <Key value="6" onKeyClick={onClick} />
      <Key
        value="-"
        icon="subtract"
        onKeyClick={onClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      />
      <Key value="1" onKeyClick={onClick} />
      <Key value="2" onKeyClick={onClick} />
      <Key value="3" onKeyClick={onClick} />
      <Key
        value="+"
        icon="plus"
        onKeyClick={onClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      />
      <div></div>
      <Key value="0" onKeyClick={onClick} />
      <Key value="." onKeyClick={onClick} />
      <Key
        value="equals"
        icon="equals"
        onKeyClick={onClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-500 text-gray-100 hover:bg-red-400 dark:hover:bg-red-400"
      />
    </div>
  );
};
