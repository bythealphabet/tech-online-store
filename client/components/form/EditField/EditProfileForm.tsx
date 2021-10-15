import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Input } from "../FormComponents/Input";
import { SubmitBtn } from "../FormComponents/SubmitBtn";

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

function EditField({ name = "lucas", email = "lucas@bythealphabet.com" }) {
  return (
    <form css={[style]}>
      <Input
        label="Name"
        change={() => ""}
        placeholder={name}
        type="text"
        placeholderStyle={css`
          color: var(--dark);
          font-size: var(--bodySize);
        `}
      />

      <Input
        label="Email"
        change={() => ""}
        placeholder={email}
        type="text"
        placeholderStyle={css`
          color: var(--dark);
          font-size: var(--bodySize);
        `}
      />

      <Input
        label="Password"
        change={() => ""}
        placeholder="change password"
        type="password"
        placeholderStyle={css`
          color: var(--dark);
          font-size: var(--bodySize);
        `}
      />

      <SubmitBtn text="Update Profile" />
    </form>
  );
}
export default EditField;
