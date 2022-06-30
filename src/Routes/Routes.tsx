import React from "react";
import { Route, Routes } from "react-router-dom";

import { EmptyPage } from "../Pages/EmptyPage";
import { menuItems } from "./Menu";

export const MyRoutes = () => {
  return (
    <Routes>
      {menuItems.map((menuItem, index) => {
        const Component = menuItem.component || EmptyPage;
        if (menuItem.subItems && menuItem.subItems.length > 0) {
          return (

            <Route key={index} path={menuItem.url} element={<Component />}>
              {menuItem.subItems.map((menu) => {
                const SubComponent = menu.component || EmptyPage;
                return <Route key={menu.url} path={menu.url} element={<SubComponent />} />
              })}
            </Route>
          );
        }
        return (
          <Route key={index} path={menuItem.url} element={<Component />} />
        );
      })}
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
};
