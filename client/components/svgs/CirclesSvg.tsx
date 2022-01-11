import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

function CirclesSvg({ position }) {
  const theme = useTheme();
  return (
    <svg
      width="60"
      height="9"
      viewBox="0 0 60 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={position}
    >
      <g id="Component 17">
        <ellipse
          id="Ellipse 14"
          cx="55.3846"
          cy="4.5"
          rx="4.61538"
          ry="4.5"
          transform="rotate(-180 55.3846 4.5)"
          fill={theme.colors.primary}
        />
        <ellipse
          id="Ellipse 15"
          cx="38.4616"
          cy="4.5"
          rx="4.61538"
          ry="4.5"
          transform="rotate(-180 38.4616 4.5)"
          fill={theme.colors.primary}
        />
        <ellipse
          id="Ellipse 16"
          cx="21.5385"
          cy="4.5"
          rx="4.61539"
          ry="4.5"
          transform="rotate(-180 21.5385 4.5)"
          fill="white"
        />
        <ellipse
          id="Ellipse 17"
          cx="4.61539"
          cy="4.5"
          rx="4.61538"
          ry="4.5"
          transform="rotate(-180 4.61539 4.5)"
          fill={theme.colors.primary}
        />
      </g>
    </svg>
  );
}
export default CirclesSvg;
