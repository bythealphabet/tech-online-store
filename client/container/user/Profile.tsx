import React, { useContext, useState } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { read, update } from "../../api/api-user";
import { Redirect, useParams, Link, useHistory } from "react-router-dom";
import EditField from "../../components/form/EditField/EditProfileForm";
import { usePost } from "../../hooks/useFetch";
import Avatar from "../../components/avatar/Avatar";
import useFromData from "../../hooks/useFormData";

function style(active) {
  const opacity = css`
    opacity: 1;
  `;
  const noOpacity = css`
    opacity: 2;
  `;
  return css`
    display: grid;
    grid-template-rows: 50px 75px 500px 200px;
    grid-column: 1 / -1;

    .header {
      grid-column: 2 / -2;
      grid-row: 2;
    }

    .profile-info {
      grid-column: 2 / span 3;
      grid-row: 3;
    }

    .update {
      grid-column: 6 / span 4;
      grid-row: 3;
      ${active ? opacity : noOpacity}
    }
  `;
}

function Profile() {
  const [active, setActive] = useState(false);
  const theme = useTheme();
  const { auth } = useContext(AuthContext);
  const {
    token,
    user: { email, name },
  } = auth;
  const { userId } = useParams();

  const formObj = {
    name,
    email,
    password: "",
    subscriber: false,
  };
  const [user, inputHandler] = useFromData(formObj);
  const [fetchedData, onSubmit] = usePost();

  if (!auth) {
    return <Redirect to="/signin" />;
  }

  function submit(e) {
    e.preventDefault();

    onSubmit(update, {
      user,
      token: auth.token,
      userId,
    });

    console.log("fetchData", fetchedData);
  }

  return (
    <main className=" profile-page base-grid" css={style(active)}>
      <h1 className="header">My Profile</h1>

      <div className="profile-info">
        <Avatar color={theme.colors.dark} />
        <p className="profile-name">name: {name}</p>
        <p className="profile-email">email: {email}</p>
        <button className="base-btn" onClick={() => setActive((prev) => !prev)}>
          {active ? "Cancel Update Profile" : "Update Profile"}
        </button>
      </div>

      {active && (
        <div className="update">
          <EditField
            inputHandler={inputHandler}
            onSubmit={submit}
            setActive={setActive}
          />
        </div>
      )}
    </main>
  );
}
export default Profile;
