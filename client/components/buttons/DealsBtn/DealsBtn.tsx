import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

function DealsBtn({ position }) {
  const {
    colors: { secondary, white },
    buttons: { base },
  } = useTheme();

  const styles = css`
    ${base}

    background: ${secondary};
    color: #fff;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;

    :hover {
      background-color: ${white};
      color: ${secondary};
    }
  `;

  return (
    <button className="deals" css={[styles, position]}>
      Our Deals
    </button>
  );
}
export default DealsBtn;
