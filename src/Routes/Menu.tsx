import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Radio, Typography } from "antd";
import { ROUTES } from "../constants";
import Icon from "../Common/Icons";
import Home from "../Home";
import Resume from "../Resume";
import EmptyPage from "../EmptyPage";
import Notes from "../Notes";
//! import ContactForm from "../Contact"; - this has been stashed
import { IconTheme, IconThemeOptions } from "../Common/Icons";

interface MenuItem {
  url: string;
  title: string;
  exact?: boolean;
  icon?: string;
  onClick?: any;
  component?: any; // () => JSX.Element |
}

const menuItems: MenuItem[] = [
  { url: ROUTES.HOME, title: "Home", component: Home, exact: true },
  {
    url: ROUTES.RESUME,
    title: "Resume",
    component: Resume,
    icon: "User",
  },
  { url: ROUTES.RLS, title: "Rls", icon: "User" },
  { url: ROUTES.SIDE, title: "Side ideas", component: EmptyPage },
  { url: ROUTES.NOTES, title: "Notes", component: Notes },
  //! { url: "/contact", title: "Contact", component: ContactForm },
];

const menuStyle = {
  fontSize: "12px",
  padding: "0 16px",
  marginTop: "4px",
  marginBottom: "8px",
};

interface IMenuAppProps extends React.HTMLAttributes<HTMLBaseElement> {
  mode?:
    | "vertical"
    | "horizontal"
    | "vertical-left"
    | "vertical-right"
    | "inline"
    | undefined;
  omitHome?: boolean;
}

const MenuApp = (props: IMenuAppProps) => {
  const [iconTheme, setIconTheme] = useState<IconTheme>(IconTheme.antd);
  const location = useLocation();
  const menu = props.omitHome
    ? menuItems.filter((m) => m.url !== ROUTES.HOME)
    : menuItems;
  return (
    <>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        theme="light"
        mode={props.mode ?? "vertical"}
        className={props.className}
      >
        {menu.map((item: MenuItem) => (
          <Menu.Item
            key={item.url}
            onClick={item.onClick}
            icon={item.icon && <Icon theme={iconTheme} name={item.icon} />}
          >
            {item.url ? <Link to={item.url}>{item.title}</Link> : item.title}
          </Menu.Item>
        ))}
      </Menu>

      <Typography.Text style={menuStyle}>
        I love Icons so play around
      </Typography.Text>
      <div style={menuStyle}>
        <Radio.Group
          options={IconThemeOptions()}
          onChange={(e) => {
            setIconTheme(e.target.value);
          }}
          value={iconTheme}
          optionType="button"
        />
      </div>
    </>
  );
};

export { menuItems };

export default MenuApp;
