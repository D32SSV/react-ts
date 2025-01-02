import { createContext } from "react";

export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#aaa",
  },
  secondary: {
    main: "#f50057",
  },
};

export const ThemeContext = createContext(theme);
