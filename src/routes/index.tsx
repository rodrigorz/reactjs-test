import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
