import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import AuthProvider from "./context/AuthContext/AuthContext";
import ThemeProvider from "./context/themeContext/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <GlobalStyles />
          <MainRouter />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default hot(App);
