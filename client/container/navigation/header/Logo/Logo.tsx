import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function Logo({ active, position }) {
  const theme = useTheme();

  const style = css`
    overflow: hidden;
    z-index: 10;
    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: left bottom;

    @media (min-width: 900px) {
      transform: scale(1.5);
    }
  `;

  return (
    <Link to="/" css={[style, position]}>
      <svg viewBox="0 1 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z"
          fill={`${active ? theme.colors.primary : "#fff"}`}
        />
      </svg>
    </Link>
  );
}
export default Logo;
