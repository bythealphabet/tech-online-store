import React, { useState, createContext, ReactNode } from "react";
import authFile from "./auth-helper";

const { isAuthenticated, authenticate, signout } = authFile;

type AuthContextProps = {
  auth: boolean | {};
  signInHandler: Function;
  signOutHandler: Function;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<
    boolean | { token: string | boolean; user: {} }
  >(isAuthenticated);

  {
    let value;
    value = {
      auth,
      signInHandler,
      signOutHandler,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  // async function updateUser(data: {
  //   _id: string;
  //   photo: string;
  //   name: string;
  //   email: string;
  //   seller: boolean;
  // }) {
  //   const { _id, photo, name, email, seller } = data;

  //   // const userUpdateData: {
  //   //   _id: string;
  //   //   photo: string;
  //   //   name: string;
  //   //   email: string;
  //   //   seller: boolean;
  //   // } = { _id, photo, name, email, seller };

  //   await updateAuthUser(data);
  //   console.log("data", data);

  //   await setAuth((prev) => {
  //     prev.user = data;
  //     return prev;
  //   });

  //   return;
  // }

  async function signInHandler(data: { token: string; user: any }) {
    await authenticate(data);
    await setAuth(data);

    return;
  }

  function signOutHandler(): void {
    signout();
    setAuth(false);
  }
}

export default AuthProvider;
