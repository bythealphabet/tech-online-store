import { signout } from "../../api/api-auth";
import cookie from "js-cookie";

const auth = {
  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (cookie.get("token")) {
      if (localStorage.getItem("user")) {
        return {
          token: cookie.get("token"),
          user: JSON.parse(localStorage.getItem("user")),
        };
      }
    } else return false;
  },

  authenticate(jwt) {
    if (typeof window !== "undefined") {
      cookie.set("token", jwt.token, { expires: 7 });
      localStorage.setItem("user", JSON.stringify(jwt.user));
    }
  },
  signout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      cookie.remove("token");
      signout().then((data) => {
        document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      });
    }
  },
  updateAuthUser(userUpdate) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user")) {
        let user = JSON.parse(localStorage.getItem("user"));
        user = userUpdate;
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
  },
};

export default auth;
