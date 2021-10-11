import React from "react";
import { jsx, css, Global, useTheme } from "@emotion/react"; /** @jsx jsx */

function GlobalStyles() {
  const theme = useTheme();
  const {
    colors: { primary, secondary, accent, dark, gray, light, white },
    buttons: { base: baseBtn },
    grid: { baseGrid },
    typography: {
      title1,
      title2,
      title3,
      subtitle,
      body,
      small,
      link,
      preTitle,
      size: {
        header1,
        header2,
        header3,
        body: bodySize,
        small: smallSize,
        mini,
      },
      lineHeight: { height1 },
    },
  } = theme;
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --heroHeight: 800px;
          --headerHeight: 150px;
          --footerHeight: 100px;
          --primary: ${primary};
          --secondary: ${secondary};
          --accent: ${accent};
          --white: ${white};
          --dark: ${dark};
          --gray: ${gray}
          --light: ${light};
          --header1: ${header1};
          --header2: ${header2};
          --header3: ${header3};
         
        }

        body,
        html {
          background-color: var(--light);
          color: var(--dark);
          font-family: "Roboto", sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          height: 100%;
          width: 100%;

        }

        // #root {
        // 	overflow-x: hidden;
        // 	position: relative;
        // 	height: 100%;
        // }

        img {
          object-fit: cover;
          max-height: 100%;
          display: block;
        }

        ul {
          list-style: none;
        }

        a {
         ${link}
          cursor: pointer;
          color: ${dark};
        }

        /////////////* TYPOGRAPHY *////////////////

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
          font-weight: 300;
        }

        .title-1{
          ${title1}
        }

        .title-2{
          ${title2}
        }


       /////////////* END TYPOGRAPHY *//////////////// 



        .base-btn{
          ${baseBtn}
        }
        .base-grid {
          ${baseGrid}
        }
      `}
    />
  );
}
export default GlobalStyles;
