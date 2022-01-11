import { signout } from "../../api/api-auth";
import cookie from "js-cookie";
import { BlobOptions } from "buffer";

interface authTypes {
  isAuthenticated():
    | boolean
    | {
        token: string | boolean;
        user: {};
      };
  authenticate(jwt: { token: string; user: {} }): void;
  signout(): void;
  updateAuthUser(userUpdate: {}): void;
}

const auth: authTypes = {
  isAuthenticated(): boolean | { token: string | boolean; user: {} } {
    if (typeof window === "undefined") return false;
    const checkToken: string | undefined = cookie.get("token");
    const checkUser: {} = JSON.parse(localStorage.getItem("user") || "{}");

    let token: string | boolean = checkToken ? checkToken : false;
    let user: {} | boolean = checkUser ? checkUser : false;
    if (!token && !user) return false;

    return { token, user };
  },

  authenticate(jwt: { token: string; user: {} }) {
    if (typeof window === "undefined") return;

    cookie.set("token", jwt.token, { expires: 7 });
    localStorage.setItem("user", JSON.stringify(jwt.user));
  },

  signout(): void {
    if (typeof window === "undefined") return;

    localStorage.removeItem("user");
    cookie.remove("token");
    signout().then(() => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },

  updateAuthUser(userUpdate: {}) {
    if (typeof window == "undefined") return;
    let user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user) return;
    user = userUpdate;
    localStorage.setItem("user", JSON.stringify(user));
  },
};

export default auth;
