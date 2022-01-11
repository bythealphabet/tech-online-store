import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { nav } from "./NavBarStyles";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ navList = [], linkColor }) => {
  const { pathname } = useLocation();

  const base = (current: string) => {
    return css`
      @media (min-width: 900px) {
        :after {
          display: block;
          content: " ";
          width: 100%;
          height: 2px;
          border-bottom: 1px solid;
          transform: scaleX(${current === pathname ? 1 : 0});
          transition: transform 0.3s ease-in-out;
        }

        :hover::after {
          transform: scaleX(1);
        }
      }
    `;
  };

  return (
    <nav className="nav base-grid" css={nav(linkColor)}>
      <ul className="ul-styles">
        {navList.map(({ to, page }: { to: string; page: string }) => {
          return (
            <li className="li-styles" key={` ${to}${page}`} css={base(to)}>
              <Link className="a-style" to={to}>
                <p>{page}</p>
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
