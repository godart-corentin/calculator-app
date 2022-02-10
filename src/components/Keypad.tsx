import { Key } from "./Key";

export const Keypad = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 bg-gray-200 p-4 dark:bg-gray-900">
      <Key value="AC" />
      <Key icon="backspace" />
      <Key value="%" />
      <Key
        icon="divide"
        className="bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      />
      <Key value="7" />
      <Key value="8" />
      <Key value="9" />
      <Key
        icon="multiply"
        className="bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      />
      <Key value="4" />
      <Key value="5" />
      <Key value="6" />
      <Key
        icon="subtract"
        className="bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      />
      <Key value="1" />
      <Key value="2" />
      <Key value="3" />
      <Key
        icon="plus"
        className="bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      />
      <div></div>
      <Key value="0" />
      <Key value="." />
      <Key
        icon="equals"
        className="bg-red-500 text-gray-100 hover:bg-red-400 dark:hover:bg-red-400"
      />
    </div>
  );
};
