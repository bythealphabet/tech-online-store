import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function DropDown({ children, content }) {
  const style = css`
    position: relative;
    display: inline-block;

    :hover .dropdown-content {
      display: block;
    }

    :hover .dropbtn {
      background-color: #3e8e41;
    }

    .dropbtn {
      background-color: #4caf50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 11;

      a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        :hover {
          background-color: #f1f1f1;
        }
      }
    }
  `;

  return (
    <div className="dropdown" css={style}>
      {content()}
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
export default DropDown;
