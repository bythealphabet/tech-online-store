import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

import {
  nav,
  ulStyles,
  liStyles,
  aStyles,
  buttonStyleAddPath,
  buttonStyle,
  linkStyle,
} from "./NavBarStyles";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ navList = [] }) => {
  const location = useLocation();
  const { pathname } = location;
  const theme = useTheme();

  const buttonInNav = ({ link, index, button }) => {
    if (button) {
      return index == 1
        ? pathname.includes("products")
          ? buttonStyleAddPath
          : buttonStyle
        : pathname === link.to
        ? currentPageLink
        : linkStyle;
    }

    return pathname === link.to ? currentPageLink : linkStyle;
  };

  const currentPageLink = css`
    color: green;
    :after {
      display: block;
      content: " ";
      width: 100%;
      border-bottom: 0.5px solid;
    }
  `;

  return (
    <nav className="nav base-grid" css={nav}>
      <ul className="ul-styles">
        {navList.map((link, index) => {
          return (
            <li className="li-styles" key={`${(link.to, link.page)}`}>
              <Link className="a-style" to={link.to}>
                <p>{link.page}</p>
                <div className="small-arrow">&#62;</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
