import React, { useState, useEffect, useContext } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { useLocation, Link, useHistory } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import CartSvg from "../../../components/svgs/CartSvg";
import AvatarSvg from "../../../components/svgs/AvatarSvg";
import Search from "../../../components/search/Search";
import DealsBtn from "../../../components/buttons/DealsBtn/DealsBtn";
import {
  CompanyInfo,
  CompanyInfoBtn,
  Btn,
  SmallInfo,
} from "./companyInfo/CompanyInfo";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

export const navList = [
  { to: "/laptops", page: "Laptops" },
  { to: "/desktop", page: "Desktop PC's" },
  { to: "/networking", page: "Networking Devices" },
  { to: "/printer-scanners", page: "Printers & Scanners" },
  { to: "/pc-ports", page: "PC Ports" },
  { to: "/other-products", page: "All Other Products" },
  { to: "/repairs", page: "Repairs" },
  { to: "/information", page: "information" },
];

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [avatarInfo, setAvatarInfo] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const { auth, signOutHandler, setCategoryName } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setActive(false);
    setShowInfo(false);
    props.isMenuActive(false);
  }, [location]);

  const hamburgerHandler = () => {
    props.isMenuActive(!active);
    setActive((prev) => !prev);
  };

  async function signOut() {
    await signOutHandler();
    history.push("/");
  }

  const openAvatar = css`
    transform: scale(0);
  `;

  const header = css`
    display: grid;
    grid-template-rows: 40px repeat(2, calc((var(--headerHeight) - 40px) / 2));
    grid-column: 1 / -1;
    grid-row: 1;
    background-color: ${theme.colors.primary};

    /* @media (min-width: 900px) {
      grid-template-rows: 40px calc((var(--headerHeight) - 40px) / 2);
    } */

    .no-line {
      display: none;
    }

    .line {
      z-index: 10;
      width: 100%;
      height: 1px;
      background-color: black;
      border-bottom: solid 1px black;
      grid-column: 2 / -2;
      grid-row: 3;

      @media (min-width: 900px) {
        display: none;
      }
    }

    .nav-items {
      display: flex;
      grid-column: 2 / span 5;
      grid-row: 2;
      justify-self: flex-end;

      @media (min-width: 900px) {
        justify-content: flex-end;
        grid-column: 11 / -2;
        grid-row: 2;
        justify-self: flex-end;
      }

      > * {
        margin-left: 1em;
      }

      .header-signup-btn {
        text-decoration: none;
        justify-self: center;
        align-self: center;
        color: var(--white);

        :hover {
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.light};
        }
      }
      .user-auth {
        position: relative;
        display: flex;

        align-self: center;
        justify-self: flex-end;

        @media (min-width: 900px) {
          grid-column: 13;
          justify-self: flex-end;
        }

        a {
          text-decoration: none;

          justify-self: center;
          align-self: center;
          font-size: ${theme.typography.small};

          @media (min-width: 900px) {
            font-size: ${theme.typography.small};
          }
        }

        .user-options {
          z-index: 11;
          width: 180px;
          height: 150px;
          padding: 0.5em 1.5em;
          position: absolute;
          top: 0;
          left: 0;

          text-align: right;

          transform: translate(-120px, 28px);
          transition: 0.3s ease;
          ${avatarInfo ? null : openAvatar}

          border-radius: 5px;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          li {
            width: 100%;
            padding: 0.8em 1.6em;
            :hover {
              background: #ccc;
            }
          }

          .user-auth-btn {
            padding: 0;
            display: flex;
            justify-content: center;
            :hover {
              background: transparent;
            }

            button {
              :hover {
                background: var(--secondary);
                color: var(--white);
              }
            }
          }
        }
      }
    }
  `;

  console.log("showInfo,", showInfo);

  return (
    <header css={header} className="base-grid">
      <div className={`${active ? "line" : "no-line"}`}></div>
      <CompanyInfo
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        position={css`
          grid-column: 2;
          grid-row: 1;
        `}
      />
      <Btn setShowInfo={setShowInfo} showInfo={showInfo} />
      <SmallInfo />
      <CompanyInfoBtn showInfo={showInfo} />

      <Logo
        active={active}
        position={css`
          grid-column: 2;
          grid-row: 2;
          align-self: center;

          @media (min-width: 900px) {
            grid-column: 2;
            grid-row: 2 / span 2;
          }
        `}
      />
      <Hamburger
        active={active}
        setActive={hamburgerHandler}
        position={css`
          grid-column: 7;
          grid-row: 2;
          justify-self: flex-end;
        `}
      />
      <Menu
        position={css`
          @media (min-width: 900px) {
            grid-column: 1 / -1;
            grid-row: 3;
          }
        `}
        active={active}
        navList={navList}
      />

      <div className="nav-items">
        <DealsBtn
          position={css`
            grid-column: 4 / span 2;
            grid-row: 2;
            align-self: center;
            padding: 0.8em 1.6em;

            @media (min-width: 900px) {
              grid-column: 10 / span 2;
            }
          `}
        />

        {auth ? (
          <>
            <CartSvg
              position={css`
                grid-column: 6;
                grid-row: 2;
                align-self: center;
                justify-self: flex-end;

                @media (min-width: 900px) {
                  grid-column: -4;
                  justify-self: flex-end;
                }
              `}
            />

            <div className="user-auth">
              <AvatarSvg setAvatarInfo={setAvatarInfo} position={css``} />

              <ul
                className="user-options"
                onMouseLeave={() => setAvatarInfo(false)}
              >
                <li>
                  <Link to="/my-account">My Account</Link>
                </li>
                <li>
                  <Link to="/cart">My Wish List</Link>
                </li>
                <li className="user-auth-btn">
                  <button className="base-btn" onClick={signOut}>
                    {" "}
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link className="header-signup-btn base-btn" to="/signup">
            Sign up
          </Link>
        )}
      </div>

      <Search
        position={css`
          grid-column: 2 / -2;
          grid-row: 3;

          @media (min-width: 900px) {
            grid-column: 3 / span 8;
            grid-row: 2;
            align-self: center;
          }
        `}
      />
    </header>
  );
};

export default Header;
