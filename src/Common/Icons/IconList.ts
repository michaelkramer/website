import { IconTheme } from "./IconTheme";
import * as AI from "react-icons/ai";
import * as BI from "react-icons/bi";
import * as FC from "react-icons/fc";
import { IconType } from "react-icons/lib";

interface $Icon {
  name: string;
  theme: IconTheme;
  component?: IconType;
}

const IconList: $Icon[] = [
  { name: "User", theme: IconTheme.antd, component: AI.AiOutlineUser },
  { name: "User", theme: IconTheme.bi, component: BI.BiUser },
  { name: "User", theme: IconTheme.fc, component: FC.FcBusinessman },

  { name: "PDF", theme: IconTheme.antd, component: AI.AiOutlineFilePdf },
  { name: "PDF", theme: IconTheme.bi, component: BI.BiFile },
  { name: "PDF", theme: IconTheme.fc, component: FC.FcDocument },

  { name: "Home", theme: IconTheme.antd, component: AI.AiOutlineHome },
  { name: "Home", theme: IconTheme.bi, component: BI.BiHome },
  { name: "Home", theme: IconTheme.fc, component: FC.FcHome },
];

export default IconList;
