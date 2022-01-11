import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export interface typographyTypes {
  fontSize: number;
  fontFamily: string;
  fontWeight: { light: number; regular: number; bold: number };
  size: {
    header1: string;
    header2: string;
    header3: string;
    body: string;
    small: string;
    mini: string;
  };
  lineHeight: {
    height1: string;
  };
  letterSpacing: {
    spacing1: string;
    spacing2: string;
  };
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  body: string;
  small: string;
  preTitle: string;
  buttonText: string;
  link: string;
}

export const baseTypography = {
  fontSize: 16,
  fontFamiliy: "font-family: 'Roboto', sans-serif",
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  size: {
    header1: "4rem",
    header2: "2.5rem",
    header3: "1.5",
    body: "1rem",
    small: "0.875rem",
    mini: "0.625rem",
  },
  lineHeight: {
    height1: "1.4em",
  },
  letterSpacing: {
    spacing1: "-0.02em",
    spacing2: "0.03em",
  },
};

export const styledTypography = {
  title1: css`
    font-weight: ${baseTypography.fontWeight.bold};
    font-size: ${baseTypography.size.header1};
    letter-spacing: ${baseTypography.letterSpacing.spacing1};
  `,
  title2: css`
    font-weight: ${baseTypography.fontWeight.bold};
    font-size: ${baseTypography.size.header2};
    letter-spacing: ${baseTypography.letterSpacing.spacing1};
  `,
  title3: css`
    font-weight: ${baseTypography.fontWeight.bold};
    font-size: ${baseTypography.size.header3};
    letter-spacing: ${baseTypography.letterSpacing.spacing1};
  `,
  subtitle: css`
    font-weight: ${baseTypography.fontWeight.regular};
    font-size: ${baseTypography.size.header3};
  `,
  body: css`
    font-weight: ${baseTypography.fontWeight.regular};
    font-size: ${baseTypography.size.body};
    line-height: ${baseTypography.lineHeight.height1};
  `,
  small: css`
    font-weight: ${baseTypography.fontWeight.regular};
    font-size: ${baseTypography.size.small};
  `,
  preTitle: css`
    font-weight: ${baseTypography.fontWeight.bold};
    font-size: ${baseTypography.size.mini};
    letter-spacing: ${baseTypography.letterSpacing.spacing2};
  `,
  buttonText: css`
    font-weight: ${baseTypography.fontWeight.bold};
    font-size: ${baseTypography.size.body};
    letter-spacing: ${baseTypography.letterSpacing.spacing2};
  `,
  link: css`
    font-weight: ${baseTypography.fontWeight.bold}; ;
  `,
};
