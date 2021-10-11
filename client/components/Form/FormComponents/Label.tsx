import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

function Label({ label = "Your Name" }) {
  const {
    typography: { buttonText },
  } = useTheme();

  return (
    <label className="label" htmlFor={label} css={buttonText}>
      {label}
    </label>
  );
}
export default Label;
