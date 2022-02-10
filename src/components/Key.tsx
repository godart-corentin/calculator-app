import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface KeyProps extends React.HTMLProps<HTMLDivElement> {
  value?: string;
  icon?: IconProp;
}

export const Key = ({ value, icon, className }: KeyProps) => {
  return (
    <div
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-gray-800 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800 ${
        className ? className : ""
      }`}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : value}
    </div>
  );
};
