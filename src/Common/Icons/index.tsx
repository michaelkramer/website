import React from "react";
import Icon from "@ant-design/icons";

import { IconTheme, IconThemeOptions } from "./IconTheme";
import User from "./User";

export { IconTheme, IconThemeOptions };

interface $Props {
  theme: any;
  name: string;
}

const getIcon = ({ theme, name }: $Props) => {
  switch (name) {
    case "User":
      return <User theme={theme} />;

    default:
      return <span>Icon</span>;
  }
};

const IconApp = (props: $Props) => {
  return <Icon>{getIcon(props)}</Icon>;
};
export default IconApp;
