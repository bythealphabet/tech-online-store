import React, { createContext, useState } from "react";
import { jsx, css, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import { theme, darkTheme } from "../../styles/theme";
import { themeSaver } from "./theme-saver";

export const ThemeContext = createContext(themeSaver.whatTheme());

function ThemeContextProvider(props) {
  const [active, setActive] = useState(themeSaver.whatTheme());

  const toggleTheme = () => {
    themeSaver.setTheme(active);
    return active ? dark : theme;
  };

  return (
    <ThemeContext.Provider value={{ active, setActive }}>
      <ThemeProvider theme={toggleTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
