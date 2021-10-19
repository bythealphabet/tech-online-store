import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { styledTypography } from "./typography";

export const buttons = {
  base: css`
    display: inline-block;
    padding: 0.5em 1.2em;
    font-size: 0.8rem;
    font-weight: bold;
    border: solid 0.2em var(--dark);
    background: var(--white);
    cursor: pointer;
    border-radius: 0.25em;
    ${styledTypography.small}

    :hover,:focus {
      color: var(--accent);
      background: var(--dark);
    }
  `,
};
