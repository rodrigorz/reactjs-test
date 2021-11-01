import React from "react";
import { Route, Switch } from "react-router";
import ListUsers from "../pages/ListUsers";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListUsers} />
    </Switch>
  );
};

export default Routes;
