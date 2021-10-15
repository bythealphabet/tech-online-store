import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import scrollToTop from "./hooks/scrollToTop";

//NAVIGATION
import Header from "./container/navigation/header/Header";
import Footer from "./container/navigation/footer/Footer";

import Home from "./container/home/Home";

//USER
import Profile from "./container/user/Profile";
import Signup from "./container/user/auth/Signup";
import Signin from "./container/user/auth/Signin";
import Confirmation from "./container/user/auth/Confirmation";

const ScrollToTop = withRouter(scrollToTop);

function MainRouter() {
  const [active, setActive] = useState<boolean>(false);
  function isMenuActive(isactive: boolean) {
    setActive(isactive);
  }

  return (
    <div className="base-grid main-router-rows">
      <Header isMenuActive={isMenuActive} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user/:userId">
        <Profile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/user-auth-confirmation/:token">
        <Confirmation />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Footer />
    </div>
  );
}

export default MainRouter;
