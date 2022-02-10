import { Key } from "./Key";

export const Keypad = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 bg-gray-400 p-4 dark:bg-gray-900">
      <Key value="AC" />
      <Key value="Back" />
      <Key value="%" />
      <Key value="/" />
      <Key value="7" />
      <Key value="8" />
      <Key value="9" />
      <Key value="x" />
      <Key value="4" />
      <Key value="5" />
      <Key value="6" />
      <Key value="-" />
      <Key value="1" />
      <Key value="2" />
      <Key value="3" />
      <Key value="+" />
      <div></div>
      <Key value="0" />
      <Key value="." />
      <Key value="=" />
    </div>
  );
};
