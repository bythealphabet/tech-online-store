import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { colors, colorTypes } from "./colors";
import {
  baseTypography,
  styledTypography,
  typographyTypes,
} from "./typography";
import { baseGrid, mobileGrid, desktopGrid } from "./grid";
import { buttons } from "./buttons";

declare module "@emotion/react" {
  export interface Theme {
    buttons: {};
    typography: typographyTypes;
    colors: colorTypes;
    grid: {};
  }
}

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
