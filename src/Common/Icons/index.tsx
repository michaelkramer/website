import React from "react";
import Icon from "@ant-design/icons";
import { IconTheme, IconThemes } from "./IconTheme";
import IconList from "./IconList";

export { IconTheme, IconThemes };

interface $Props {
  theme: any;
  name: string;
}

const getIcon = ({ theme, name }: $Props) => {
  const newIcon = IconList.find(
    (item) => item.name === name && item.theme === theme
  );
  if (newIcon && newIcon.component) {
    return <newIcon.component />;
  }
  return null;
};

const IconApp = (props: $Props) => {
  const icon = getIcon(props);
  return icon && <Icon>{icon}</Icon>;
};
export default IconApp;
