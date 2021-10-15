import React, { useState, useEffect, useContext } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { useLocation, Link, useHistory } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import CartSvg from "../../../components/svgs/CartSvg";
import AvatarDropDown from "../../../components/dropdown/AvatarDropDown";
import DropDown from "../../../components/dropdown/DropDown";
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

const Header = ({ isMenuActive }: { isMenuActive: Function }) => {
  const [active, setActive] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const location = useLocation();
  const theme = useTheme();
  const { auth, signOutHandler } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setActive(false);
    setShowInfo(false);
    isMenuActive(false);
  }, [location]);

  const hamburgerHandler = () => {
    isMenuActive(!active);
    setActive((prev) => !prev);
  };

  function signOut(): void {
    signOutHandler();
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
    background-color: ${theme?.colors?.primary};

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

    .company-info {
      grid-column: 1 / -1;
      grid-row: 1;
      background: var(--dark);

      .header-dropdown {
        grid-column: 2 / span 3;
        align-self: center;
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
        z-index: 10;
        display: flex;

        align-self: center;
        justify-self: flex-end;

        button {
          width: 100%;
        }

        a,
        button {
          text-decoration: none;

          justify-self: center;
          align-self: center;
          font-size: ${theme.typography.small};

          @media (min-width: 900px) {
            font-size: ${theme.typography.small};
          }
        }
      }
    }
  `;

  return (
    <header css={header} className="base-grid">
      <div className={`${active ? "line" : "no-line"}`}></div>
      <div className="company-info base-grid">
        <div className="header-dropdown">
          <DropDown content={() => <Btn />}>
            <CompanyInfo />
          </DropDown>
        </div>
        <SmallInfo />
      </div>

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
              <AvatarDropDown color={theme.colors.light}>
                <Link to={`/user/${auth?.user?._id}`}>My Account</Link>
                <Link to="/cart">My Wish List</Link>
                <button className="base-btn" onClick={signOut}>
                  {" "}
                  Sign Out
                </button>
              </AvatarDropDown>
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
