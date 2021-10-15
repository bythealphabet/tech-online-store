import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import AvatarSvg from "../svgs/AvatarSvg";

function DropDown({ color = "green", children, contentOrigin }) {
  const style = css`
    position: relative;
    display: inline-block;

    :hover .dropdown-content {
      display: block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;

      transform: translateX(-50%);
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      a,
      button {
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
      <AvatarSvg color={color} />
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
export default DropDown;
