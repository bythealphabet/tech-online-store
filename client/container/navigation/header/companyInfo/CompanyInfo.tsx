import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import Logo from "../Logo/Logo";
import FacebookIcon from "../../../../components/svgs/FacebookIconSvg";
import IGIcon from "../../../../components/svgs/IGIcon";

export function CompanyInfo({ showInfo, setShowInfo, position }) {
  const move = css`
    transform: translateY(0);
  `;

  const appear = css`
    opacity: 1;
    z-index: 11;
  `;

  const style = css`
    z-index: -1;
    display: grid;
    grid-template-columns: 1em 1fr 1em;
    grid-template-rows: 1fr 3fr;

    @media (min-width: 900px) {
      grid-template-columns: 1em 300px 1em;
      grid-template-rows: 1fr 3fr;
    }

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: 0;
    transition: opacity 1.5s ease;
    ${showInfo ? appear : null}

    /* grid-column: 1 / -1; */

    .background {
      z-index: -1;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.8) 100%
      );
      background-blend-mode: multiply, multiply;

      ${showInfo ? appear : null}
    }

    .content-box-info {
      z-index: 12;
      display: grid;
      grid-template-columns: 1em 1fr 1em;
      grid-template-rows: 100px 100px 100px 100px;
      background-color: rgba(255, 255, 255, 0.95);

      grid-column: 2;
      grid-row: 1;

      @media (min-width: 900px) {
        /* grid-column: 5; */
      }

      transform: translateY(-120%);
      transition: 1.5s ease;
      ${showInfo ? move : null}

      .opening-hours,
      .adress-info,
      .phone-number {
        padding: 1em;
        grid-column: 2 / -2;
      }

      .opening-hours {
        grid-row: 2;

        .opening-hours-header {
          font-size: 1;
        }
      }

      .adress-info {
        grid-row: 3;
      }

      .phone-number {
        grid-row: 4;
      }
    }
  `;
  return (
    <div className="company-info" css={style}>
      <div className="background" onClick={() => setShowInfo(false)}></div>
      <div className="content-box-info" onMouseLeave={() => setShowInfo(false)}>
        <Logo
          active={true}
          position={css`
            grid-column: 2;
            grid-row: 1;
            align-self: flex-end;
          `}
        />
        <div className="opening-hours">
          <p className="opening-hours-header">🕘 We are open:</p>
          <p>Mon-Sat: 9:00 AM - 5:30 Pm</p>
          <p>Fr: 9:00 AM - 6:00 Pm</p>
        </div>
        <div className="adress-info">
          <p> 📍Caracasbaaiweg #120 </p>
          <p> 🇨🇼 Curacao Dutch Caribbean </p>
        </div>
        <div className="phone-number">
          <p>Phones:(599) 334-4322 </p>
          <p> info@rapthetronic </p>
        </div>
      </div>
    </div>
  );
}

export function CompanyInfoBtn({ setShowInfo }) {
  const {
    colors: { black },
  } = useTheme();

  const style = css`
    z-index: 10;
    grid-column: 1 / -1;
    grid-row: 1;
    background-color: ${black};
  `;
  return <div className="base-grid header-info" css={[style]}></div>;
}

export const SmallInfo = () => {
  const {
    colors: { white, black, primary },
    buttons: { base },
  } = useTheme();
  return (
    <div
      className="contact-info"
      css={css`
        z-index: 11;
        grid-column: 6 / -2;
        grid-row: 1;
        align-self: center;
        font-size: 0.8rem;
        display: flex;
        justify-content: flex-end;
        color: ${white};

        @media (min-width: 900px) {
          grid-column: 11 / -2;
          grid-row: 1;
        }

        p {
          font-weight: bolder;
          text-align: right;
          word-spacing: 0;

          @media (min-width: 900px) {
            font-size: 0.9rem;
            text-align: left;
          }
        }

        .social-icons {
          display: none;

          @media (min-width: 900px) {
            display: inline-block;
            margin-left: 1em;
          }

          svg {
            @media (min-width: 900px) {
              margin-left: 1em;
            }
          }
        }
      `}
    >
      <p>Call us: 516-8764</p>
      <div className="social-icons">
        <FacebookIcon />
        <IGIcon />
      </div>
    </div>
  );
};

export const Btn = ({ setShowInfo, showInfo }) => {
  const {
    colors: { white, black, primary },
    buttons: { base },
  } = useTheme();

  return (
    <button
      onClick={() => setShowInfo((prev) => !prev)}
      css={css`
        z-index: 11;
        max-width: 210px;
        ${base}
        background-color:${black};
        padding: 0.4em 0.7em;
        color: ${white};
        font-size: 0.7rem;
        grid-column: 2 / span 3;
        grid-row: 1;
        align-self: center;
        transition: transform 1s ease-in-out;

        ${showInfo
          ? css`
              color: ${black};
              background-color: ${white};
            `
          : css``}

        ::after {
          display: block;
          content: " ";
          width: 90%;
          border-bottom: 0.5px solid;
          ${showInfo
            ? css`
                transform: scaleX(1);
              `
            : css`
                transform: scaleX(0);
              `}

          transition: transform 0.3s ease-in-out;
        }

        @media (min-width: 900px) {
          font-size: 0.9rem;
          font-weight: lighter;
          border: none;
          text-align: left;
          padding-left: 0;
          border-radius: 0;

          grid-column: 2 / span 4;
          grid-row: 1;
        }

        :hover::after {
          @media (min-width: 900px) {
            transform: scaleX(1);
          }
        }

        span {
          font-weight: bold;
        }
      `}
    >
      <span>Mon - Sat:</span> 9:00am - 6:00pm{" "}
    </button>
  );
};
