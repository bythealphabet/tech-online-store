import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

export function SubmitBtn({
  text = "Submit",
  submit = () => console.log("Clicked"),
  signin = false,
}) {
  const {
    buttons: { base },
    colors: { primary, white, secondary },
  } = useTheme();

  const styles = css`
    width: 100%;
    max-width: 420px;
    background: ${signin ? primary : secondary};
    color: ${white};
    border: none;
    padding: 0.8em;
  `;

  return (
    <button className="btn" onClick={submit} css={[base, styles]}>
      {text}
    </button>
  );
}
