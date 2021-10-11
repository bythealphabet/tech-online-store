import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const nav = css`
  z-index: 11;
  display: grid;
  grid-template-rows: 300px;

  grid-column: 1 / -1;
  grid-row: 3 / span 4;

  background: var(--darkBlue);

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
      padding: 0.8em;
      font-size: 1rem;
      font-weight: 300;

      /* margin-right: 1.5em; */

      border: none;
      text-align: center;
      text-transform: lowercase;
      /* border-right: 0.5px solid var(--dark); */

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
    color: var(--white);

    @media (min-width: 900px) {
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

export const buttonStyleAddPath = css`
  @media (min-width: 900px) {
    background: transparent;
    padding: 0.5em 1.2em;
    border: solid 0.5px var(--green);
    border-radius: 5px;
    color: var(--green);
  }
`;

export const buttonStyle = css`
  @media (min-width: 900px) {
    border: solid 0.5px var(--green);
    border-radius: 5px;
    background: var(--green);
    padding: 0.5em 1.2em;
    transition: 0.5s ease;
    color: var(--white);

    :hover {
      ${buttonStyleAddPath}
    }
  }
`;

export const linkStyle = css`
  @media (min-width: 900px) {
    :after {
      display: block;
      content: " ";
      width: 100%;
      border-bottom: 0.5px solid;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    :hover::after {
      transform: scaleX(1);
    }
  }
`;
