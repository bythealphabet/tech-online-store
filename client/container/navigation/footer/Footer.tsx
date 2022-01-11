import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import NavBar from "../header/Menu/NavBar/NavBar";
import { navList } from "../header/Header";
import FacebookIcon from "../../../components/svgs/FacebookIconSvg";
import IGIcon from "../../../components/svgs/IGIcon";
import paymentMethodsImg from "../../../assets/img/payment-method.png";

function Footer() {
  const theme = useTheme();

  const footerStyles = css`
    min-height: var(--footerHeight);
    background-color: ${theme.colors.black};
    color: #fff;
    grid-column: 1 / -1;
    grid-row: 3;

    @media (min-width: 900px) {
      display: grid;
      ${theme.grid.desktopGrid}
      grid-template-rows: repeat(3, minmax(100px, auto))
    }

    section {
      border-bottom: 1px #ccc solid;
      padding-bottom: 2em;
      margin: 2em;
    }

    .newsletter-signup {
      display: flex;
      flex-direction: column;
      text-align: center;

      @media (min-width: 900px) {
        grid-column: 2 / span 4;
        text-align: left;
      }

      h3 {
        font-weight: bold;
        font-size: 1.3rem;
      }

      h3,
      p {
        @media (min-width: 900px) {
          align-self: flex-start;
        }
      }

      form {
        border-radius: 40px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 60px;

        @media (min-width: 900px) {
          max-width: 400px;
          align-self: flex-start;
        }

        input,
        button {
          border-radius: 10px;
          border-style: none;
          height: 40px;
          padding: 0.6em 1em;

          grid-row: 1;
          align-self: center;
        }

        input {
          grid-column: 1 / -1;
          background: #fff;

          :focus {
            outline: 0;
            background: #fff;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
          }
        }

        button {
          grid-column: 2;
          cursor: pointer;
          color: #fff;
          text-transform: uppercase;
          background: ${theme?.colors?.primary};
          border-radius: 0 10px 10px 0;
        }
      }
    }

    .footer-nav {
      @media (min-width: 900px) {
        grid-column: 2 / -2;
        grid-row: 2;
      }
    }
    .social-icons {
      display: flex;
      @media (min-width: 900px) {
        grid-column: 7 / -2;
        grid-row: 3;
        height: 60px;
      }
      svg {
        margin-right: 0.5em;
      }
      p {
        margin-left: auto;
        font-size: 0.8rem;
        justify-self: flex-end;
      }
    }

    .payment-method {
      display: flex;
      justify-content: center;

      @media (min-width: 900px) {
        grid-column: 2 / span 4;
        grid-row: 3;
        height: 60px;
      }
    }
  `;

  return (
    <footer className="footer" css={footerStyles}>
      <section className="newsletter-signup">
        <h3>Sign Up To Our Newsletter.</h3>
        <p>Be the first to hear about the latest offers.</p>
        <form className="form">
          <input
            type="text"
            placeholder="Enter your email..."
            required
            style={{ boxShadow: "none" }}
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="footer-nav">
        <NavBar navList={navList} linkColor={theme.colors.white} />
      </section>
      <section className="payment-method">
        <img src={paymentMethodsImg} alt="" />
      </section>
      <section className="social-icons">
        <FacebookIcon />
        <IGIcon />
        <p>Copyright © 2020 Raptronic. Ltd.</p>
      </section>
    </footer>
  );
}
export default Footer;
