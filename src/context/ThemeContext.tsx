import { createContext, useState, useEffect, FC, useContext } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme && (localTheme === "light" || localTheme === "dark")) {
      return localTheme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

interface IThemeContext {
  theme: Theme;
  setTheme?: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({});

export const ThemeProvider: FC<{}> = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const setNewTheme = (newTheme: Theme) => {
    const doc = window.document.documentElement;
    const isDark = newTheme === "dark";

    doc.classList.remove(isDark ? "light" : "dark");
    doc.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    setNewTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
