import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { colors } from "./colors";
import { baseTypography, styledTypography } from "./typography";
import { baseGrid, mobileGrid, desktopGrid } from "./grid";
import { buttons } from "./buttons";

export const theme = {
  buttons,
  typography: { ...baseTypography, ...styledTypography },
  colors,
  grid: {
    mobileGrid,
    desktopGrid,
    baseGrid,
  },
};

export const darkTheme = {};
