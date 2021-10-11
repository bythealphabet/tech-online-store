import React from "react";
import { jsx, css, keyframes, useTheme } from "@emotion/react"; /** @jsx jsx */

function Hamburger({ active, setActive, position }) {
  const theme = useTheme();

  const mainBurgerStyles = css`
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 900px) {
      grid-column: -1;
      background-color: transparent;
    }
  `;

  const hamburger = css`
    width: 30px;
    height: 25px;
    border: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      z-index: 10;
      background: ${active ? "#000" : "#fff"};
      border: solid 0.5px ${active ? "#000" : "#fff"};
      border-radius: 3px;
      display: block;
      height: 0.2em;
    }

    @media (min-width: 900px) {
      display: none;
    }
  `;
  const topBun = keyframes`
	  	0% {
			transform: translate(0, ${active ? 0 : 9}px) rotate(${active ? 0 : 45}deg);
		}
		60% {
			transform: translate(0, 9px);
		}

		100% {
			transform: translate(0, ${active ? 8.5 : 0}px) rotate(${active ? 45 : 0}deg);
		}
	`;

  const meat = css`
    opacity: ${active ? 0 : 1};
  `;

  const bottomBun = keyframes`
		0% {
			transform: translate(0, ${active ? 0 : -9}px) rotate(${active ? 0 : -45}deg);
		}
		60% {
			transform: translate(0, -9px);
		}

		100% {
			transform: translate(0, ${active ? -8.5 : 0}px) rotate(${active ? -45 : 0}deg);
		}
	`;

  return (
    <div
      className="burger-box"
      css={[mainBurgerStyles, position]}
      onClick={setActive}
    >
      <div className="burger" css={hamburger}>
        <span
          css={css`
            animation: ${topBun} 0.2s ease forwards;
          `}
        ></span>
        <span css={meat}></span>
        <span
          css={css`
            animation: ${bottomBun} 0.2s ease forwards;
          `}
        ></span>
      </div>
    </div>
  );
}
export default Hamburger;
