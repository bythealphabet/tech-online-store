import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const mobileGrid = css`
  display: grid;
  grid-template-columns:
    minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
    minmax(1em, 1fr);
`;

export const desktopGrid = css`
  grid-template-columns:
    minmax(5em, 1fr) repeat(12, minmax(50px, 125px))
    minmax(5em, 1fr);
`;

export const baseGrid = css`
  ${mobileGrid}
  @media (min-width: 900px) {
    ${desktopGrid}
  }
`;
