import { theme, ThemeContext } from "./theme";

type ThemeProp = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeProp) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
