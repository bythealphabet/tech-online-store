import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

function LeaveReviewBtn({ position }) {
  const theme = useTheme();
  const styles = css`
    ${theme?.buttons?.base}
    font-size: .8rem;
    background: ${theme?.colors?.primary};
    color: #fff;

    ${position}
  `;
  return (
    <button className="deals" css={styles}>
      Leave Us a Review
    </button>
  );
}
export default LeaveReviewBtn;
