import React, { useState, useEffect, createContext, ReactNode } from "react";
import authFile from "./auth-helper";

const { isAuthenticated, authenticate, signout, updateAuthUser } = authFile;

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
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated);
  }, [update]);

  {
    let value;
    value = {
      auth,
      signInHandler,
      signOutHandler,
      updateUser,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  async function updateUser(data: {
    _id: string;
    photo: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  }) {
    await updateAuthUser(data);

    await setAuth((prev) => {
      console.log("prev", prev);
      prev.user = data;
      return prev;
    });

    await setUpdate((prev) => !prev);

    return;
  }

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
