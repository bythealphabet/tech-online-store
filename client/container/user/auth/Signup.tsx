import React, { useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import AuthFormComponent from "../../../components/Form/AuthFormComponent";
import SubmitSuccess from "../../../components/Form/SubmitSucces/SubmitSuccess";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { usePost } from "../../../hooks/useFetch";
import { Link, useHistory, Redirect } from "react-router-dom";
import { create } from "../../../api/api-user";

function Signup() {
  const { auth } = useContext(AuthContext);

  if (auth) {
    return <Redirect to="/" />;
  }

  const style = css`
    display: grid;
    grid-template-rows: minmax(500px, auto);
    grid-column: 1 / -1;

    .succes {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      align-self: center;
      justify-self: center;
    }
  `;

  const history = useHistory();
  const [data, onSubmit, message, success, error] = usePost();

  async function submit(data) {
    onSubmit(create, data);
  }

  return (
    <main className="base-grid" css={[style]}>
      {success ? (
        <SubmitSuccess
          message={`To complete your Subscribtion, please click on the
                confirmation link we have send to ${message}`}
        />
      ) : (
        <AuthFormComponent
          onSubmit={submit}
          position={css`
            grid-column: 1 / -1;
          `}
        />
      )}
    </main>
  );
}
export default Signup;
