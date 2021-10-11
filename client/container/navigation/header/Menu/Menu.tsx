import React from "react";
import { jsx, css, keyframes, useTheme } from "@emotion/react"; /** @jsx jsx */
import NavBar from "./NavBar/NavBar";
import MobileMenu from "./MobileMenu/MobileMenu";
import useWindowSize from "../../../../hooks/useWindowSize";

const byTheAlphabet = ({ active, navList, position }) => {
  const {
    colors: { white },
  } = useTheme();
  const windowSize = useWindowSize();
  const closeAnimations = keyframes`
	  	0% {
			transform: translateX(0);
			opacity: 1;
		}
		10% {
			transform: translateX(20%);
			opacity: .8;
		}

		20% {
			transform: translateX(40%);
			opacity: .6;
		}
		50% {
			transform: translateX(60%);
			opacity: .4;
		}
		80% {
			transform: translateX(80%);
			opacity: .2;
		}

		100% {
			transform: translateX(100%);
			opacity: 0;
		}
	`;

  const openAnimation = keyframes`
	  	0% {
			transform: translateX(100%);
			opacity: .0;
		}
		20% {
			transform: translateX(80%);
			opacity: .0;
		}

		40% {
			transform: translateX(60%);
			opacity: .0;
		}
		60% {
			transform: translateX(40%);
			opacity: .6;
		}
		80% {
			transform: translateX(20%);
			opacity: .8;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	`;

  const open = css`
    animation: ${openAnimation} 0.2s ease forwards;
  `;

  const close = css`
    animation: ${closeAnimations} 0.2s ease forwards;
  `;

  const styles = css`
    z-index: 9;
    position: fixed;
    overflow-y: scroll;
    background-color: ${white};

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    transition: transform 0.525s ease-in-out;

    display: grid;
    grid-template-rows: 40px 80px;

    @media (max-width: 900px) {
      ${active ? open : close}
    }

    @media (min-width: 900px) {
      grid-template-rows: 40px;
      position: initial;
      background: transparent;
      overflow-y: hidden;
      transform: translateX(0);
      border: none;
      opacity: 1;
    }
  `;

  return (
    <section className="menu base-grid" css={[styles, position]}>
      {<NavBar active={active} navList={navList} />}
      {windowSize.width < 900 ? <MobileMenu /> : null}
    </section>
  );
};

export default byTheAlphabet;
