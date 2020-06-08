import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";

import CelebPage from "../../pages/celeb-page/CelebPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/celebs/:id" component={CelebPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
