import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const onToggleTheme = () => {
    setTheme?.(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={onToggleTheme}
      className="absolute top-4 right-4 cursor-pointer"
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon="sun" color="#0f172a" />
      ) : (
        <FontAwesomeIcon icon="moon" color="#f1f5f9" />
      )}
    </div>
  );
};
