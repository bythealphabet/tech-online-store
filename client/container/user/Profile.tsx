import React, { useContext, useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { read } from "../../api/api-user";
import { Redirect, useParams, Link, useHistory } from "react-router-dom";
import EditField from "../../components/form/EditField/EditProfileForm";

function style() {
  return css`
    display: grid;
    grid-template-rows: 50px 75px auto 200px;
    grid-column: 1 / -1;

    .bread-crums {
      grid-column: 2/ -2;
      grid-row: 1;
      align-self: center;
    }

    .header {
      grid-column: 2 / -2;
      grid-row: 2;
    }

    .user-profile {
      display: grid;
      grid-column: 2 / -2;
      grid-row: 3;
    }
  `;
}

function Profile() {
  const { auth } = useContext(AuthContext);
  const { userId } = useParams();
  const history = useHistory();

  if (!auth) {
    return <Redirect to="/signin" />;
  }

  const [user, message, error] = useFetch(read, { userId, token: auth.token });

  if (!user || error) {
    return (
      <>
        <div className="section">
          <p className="subtitle">{message}</p>
        </div>
      </>
    );
  }

  return (
    <main className=" profile-page base-grid" css={style()}>
      <p className="bread-crums">
        home <span>&#62;</span> My Profile
      </p>
      <h1 className="header">My Profile</h1>

      <section className="user-profile">
        <EditField {...user} />
      </section>

      <section className="compare-product"></section>
      <section className="wish-list"></section>
    </main>
  );
}
export default Profile;
