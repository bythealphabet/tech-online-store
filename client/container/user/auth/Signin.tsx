import React, { useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import AuthFormComponent from "../../../components/Form/AuthFormComponent";
import SubmitSuccess from "../../../components/Form/SubmitSucces/SubmitSuccess";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { usePost } from "../../../hooks/useFetch";
import { Link, useHistory, Redirect } from "react-router-dom";
import { signin } from "../../../api/api-auth";

function SignIn() {
  const { auth, signInHandler } = useContext(AuthContext);

  if (auth) {
    return <Redirect to="/" />;
  }

  const history = useHistory();
  const [data, onSubmit, message, success, error] = usePost();

  async function submit(data) {
    try {
      const userData = await onSubmit(signin, data);
      await signInHandler(userData);
      await history.push("/");
    } catch (err) {
      console.log("Sign In Error", err);
    }
  }

  const style = css`
    display: grid;
    grid-template-rows: minmax(500px, auto);

    grid-column: 1 / -1;
  `;

  return (
    <main className="base-grid" css={[style]}>
      {success ? (
        <SubmitSuccess />
      ) : (
        <AuthFormComponent
          signin
          onSubmit={submit}
          position={css`
            grid-column: 1 / -1;
          `}
        />
      )}
    </main>
  );
}
export default SignIn;
