import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";

import { IconTheme } from "./IconTheme";

interface $Props {
  theme?: IconTheme | string;
}

const User = ({ theme }: $Props) => {
  switch (theme) {
    case IconTheme.bi:
      return <BiUser />;
    case IconTheme.fc:
      return <FcBusinessman />;
    default:
      return <AiOutlineUser />;
  }
};

export default User;
