import React from "react";
import { Route, Switch } from "react-router-dom";

import EmptyPage from "../EmptyPage";
import { menuItems } from "./Menu";

const Routes = () => {
  return (
    <Switch>
      {menuItems.map((menuItem, index) => {
        const Component = menuItem.component || EmptyPage;

        return (
          <Route exact={menuItem.exact} key={index} path={menuItem.url}>
            <Component />
          </Route>
        );
      })}
      <Route path="*">
        <EmptyPage />
      </Route>
    </Switch>
  );
};

export default Routes;
