import React from "react";
import { Route, Switch } from "react-router";
import EditUser from "../pages/EditUser";
import ListUsers from "../pages/ListUsers";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListUsers} />
      <Route path="/:id" component={EditUser} />
    </Switch>
  );
};

export default Routes;
