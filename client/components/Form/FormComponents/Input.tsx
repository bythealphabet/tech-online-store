import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { inputStyles } from "./formStyle";
import Label from "./Label";

export const Input = ({
  change,
  label = "Default",
  placeholder = "write here",
  type = "text",
  value,
}) => {
  const inputValue = (e) => change(e.target.value);

  return (
    <div css={inputStyles}>
      <Label label={label} />
      <input
        id={label}
        className="input"
        onChange={inputValue}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};
