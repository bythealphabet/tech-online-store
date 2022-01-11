import React from "react";
import { jsx, css, ThemeProvider } from "@emotion/react";
import { theme } from "../client/styles/theme";
import GlobalStyles from "../client/styles/GlobalStyles";

const EmotionThemeProvider = (storyFn) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  </>
);

export default EmotionThemeProvider;
