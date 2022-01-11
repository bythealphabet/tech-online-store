import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Search({ position }) {
  const styles = css`
    display: flex;
    flex-direction: column;
    height: 40px;

    @media (min-width: 900px) {
      width: 100%;
      min-width: 300px;
    }

    .input {
      font-family: inherit;
      text-align: inherit;
      margin-bottom: 1em;
      padding: 0.8em;
      border: solid 1px #fff;
      transform: scale(1);
      transition: transform 0.35s ease;
      border-radius: 10px;

      :focus {
        outline: 0;
        background: #fff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.8) inset;
      }
    }
  `;
  return (
    <div className="input-box" css={[styles, position]}>
      <input type="hidden" display="hidden" />

      <input className="input" placeholder=" search" />
    </div>
  );
}
export default Search;
