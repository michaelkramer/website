import React from "react";
import { IconThemes } from "./IconTheme";
import IconList from "./IconList";

export { IconThemes };

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
  return icon && <span>{icon}</span>;
};
export default IconApp;
