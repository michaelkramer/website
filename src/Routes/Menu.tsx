import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { ROUTES } from "../constants";

import Home from "../Home";
import Resume from "../Resume";
import EmptyPage from "../EmptyPage";
interface MenuItem {
  url: string;
  title: string;
  exact?: boolean;
  icon?: string;
  onClick?: any;
  component?: () => JSX.Element;
}

const menuItems: MenuItem[] = [
  { url: ROUTES.HOME, title: "Home", component: Home, exact: true },
  { url: ROUTES.RESUME, title: "Resume", component: Resume },
  { url: ROUTES.RLS, title: "Rls" },
  { url: ROUTES.SIDE, title: "Side ideas" },
  { url: ROUTES.NOTES, title: "Notes" },
  { url: "/empty", title: "Empty", component: EmptyPage },
];

const MenuApp = () => {
  const location = useLocation();
  return (
    <Menu defaultSelectedKeys={[location.pathname]} theme="light">
      {menuItems.map((item: MenuItem) => (
        <Menu.Item key={item.url} onClick={item.onClick}>
          {item.url ? <Link to={item.url}>{item.title}</Link> : item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export { menuItems };

export default MenuApp;
