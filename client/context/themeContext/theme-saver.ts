export const themeSaver = {
  whatTheme() {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("theme")) {
      return JSON.parse(localStorage.getItem("theme"));
    }

    return false;
  },
  setTheme(theme) {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  },
};
