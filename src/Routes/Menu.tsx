import React from "react";
import { Link } from "react-router-dom";
import { ListItemIcon, ListItemText, MenuItem, MenuList, styled, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ROUTES } from "../constants";
import Icon from "../Common/Icons";
import { HomePage } from "../Pages/Home";
import { Resume } from "../Pages/Resume";
import { SideIdeas } from "../Pages/SideIdeas";
import { Notes } from "../Pages/Notes";
//! import ContactForm from "../Contact"; - this has been stashed
import { IconThemes } from "../Common/Icons";
import { useDispatch, useSelector } from "react-redux";
import { selectSettings } from "../State/Settings/selectors";
import { IMenuAppProps, MenuItemProps, MenuAppMode, StyledProps } from "../Types";
import { toggleIcon } from "../State/Settings/reducer";
import { EslintFacepalm } from "../Pages/SideIdeas/EslintFacepalm";
import { LoopTest } from "../Pages/SideIdeas/LoopTest";
import { GrpcCode } from "../Pages/SideIdeas/GrpcCode";
import { Note } from "../Pages/Notes/Note";
import { RLSCaseStudy } from "../Pages/CaseStudy/RLSCaseStudy";

const menuItems: MenuItemProps[] = [
  { url: ROUTES.HOME, title: "Home", component: HomePage, exact: true },
  {
    url: ROUTES.RESUME,
    title: "Resume",
    component: Resume,
    icon: "User",
  },
  { url: ROUTES.RLS, title: "Rls", icon: "Home", component: RLSCaseStudy },
  {
    url: ROUTES.SIDE, title: "Side ideas", icon: "Idea", component: SideIdeas, subItems: [
      { url: ROUTES.SIDE_ESLINT, title: "Eslint Facepalm", component: EslintFacepalm },
      { url: ROUTES.SIDE_LOOPTEST, title: "Loop Test", component: LoopTest },
      { url: ROUTES.SIDE_GRPC, title: "gRpc Code", component: GrpcCode }
    ]
  },
  {
    url: ROUTES.NOTES, title: "Notes", icon: "Note", component: Notes, subItems: [
      { url: ":id", title: "Name", component: Note },]
  },
  //! { url: "/contact", title: "Contact", component: ContactForm },
];

const MenuStyle = styled(Typography)(({ theme }: StyledProps) => ({
  fontSize: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(1),
}));

export const MenuApp = (props: IMenuAppProps) => {
  const dispatch = useDispatch();
  const { iconTheme } = useSelector(selectSettings);
  const menu = props.omitHome
    ? menuItems.filter((m) => m.url !== ROUTES.HOME)
    : menuItems;

  const menuListStyle = React.useMemo(() => {
    if (props.mode === MenuAppMode.horizontal) {
      return { display: "inline-flex" };
    }
  }, [props.mode]);

  return (
    <>
      <MenuList
        style={menuListStyle}
      >
        {menu.map((item: MenuItemProps) => (
          <MenuItem
            key={item.url}
            onClick={item.onClick}
          >
            <ListItemIcon>
              <Icon theme={iconTheme} name={item.icon} />
            </ListItemIcon>
            <ListItemText>
              {item.url ? <Link to={item.url}>{item.title}</Link> : item.title}
            </ListItemText>

          </MenuItem>
        ))}
      </MenuList>

      <MenuStyle variant="body1">
        I love Icons so play around
      </MenuStyle>
      <MenuStyle>
        <ToggleButtonGroup
          onChange={(e, value) => {
            dispatch(toggleIcon(value));
          }}
          value={iconTheme}
          exclusive
        >
          {IconThemes.map((theme) => (
            <ToggleButton
              key={theme.label}
              value={theme.value}
              name={theme.label}
            >
              <theme.icon />
            </ToggleButton >
          ))}
        </ToggleButtonGroup>
      </MenuStyle>
    </>
  );
};

export { menuItems };
