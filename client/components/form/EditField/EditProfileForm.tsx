import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Input } from "../FormComponents/Input";
import { SubmitBtn } from "../FormComponents/SubmitBtn";
import useFromData from "../../../hooks/useFormData";

function style() {
  return css`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-width: 300px;

    .field-label {
      span {
        margin-left: 1em;
      }
    }
  `;
}

function EditField({ onSubmit, inputHandler }) {
  return (
    <form css={[style]} onSubmit={onSubmit}>
      <Input
        label="Name"
        change={inputHandler("name")}
        placeholder=""
        type="text"
        placeholderStyle={css`
          color: var(--dark);
          font-size: var(--bodySize);
        `}
      />

      <Input
        label="Email"
        change={inputHandler("email")}
        placeholder=""
        type="text"
        placeholderStyle={css`
          color: var(--dark);
          font-size: var(--bodySize);
        `}
      />

      <Input
        label="Change Password"
        change={inputHandler("password")}
        placeholder="change password"
        type="password"
        placeholderStyle={css`
          font-size: var(--bodySize);
        `}
      />

      <SubmitBtn text="Submit" onClick={onSubmit} />
    </form>
  );
}
export default EditField;
