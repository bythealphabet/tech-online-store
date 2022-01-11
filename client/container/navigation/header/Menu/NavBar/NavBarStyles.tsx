import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const nav = (linkColor) => css`
  z-index: 50;
  display: grid;
  grid-template-rows: 300px;

  grid-column: 1 / -1;
  grid-row: 3 / span 4;

  @media (min-width: 900px) {
    background: transparent;

    grid-template-rows: 55px;
    grid-row: 1;
    align-self: flex-start;
  }

  .ul-styles {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    grid-column: 2 / -2;
    grid-row: 1;

    @media (min-width: 900px) {
      width: 100%;

      flex-direction: row;
      align-items: flex-start;

      grid-column: 3 / -2;
      align-self: center;
      justify-self: flex-end;
      justify-content: flex-start;
    }
  }

  .li-styles {
    /* width: 100%; */

    @media (min-width: 900px) {
      padding: 0.8em 0.4em;
      margin: 0 0.8em;
      font-size: var(--link);
      font-weight: 300;
      color: var(--white);

      border: none;
      text-align: center;
      text-transform: lowercase;

      :hover {
        background: transparent;
      }

      :first-of-type {
        padding-left: 0;
      }
    }
  }

  .a-style {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    text-transform: capitalize;
    color: ${linkColor};

    @media (min-width: 900px) {
      color: var(--white);
      text-align: center;
      font-weight: bold;
    }
    .small-arrow {
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
`;
