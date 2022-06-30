import * as AI from "react-icons/ai";
import * as BI from "react-icons/bi";
import * as FC from "react-icons/fc";
import { IconTheme } from "../../Types";

export const IconThemes = [
  {
    label: IconTheme.antd,
    value: IconTheme.antd,
    icon: AI.AiOutlineAntDesign,
  },
  {
    label: IconTheme.fc,
    value: IconTheme.fc,
    icon: FC.FcApproval,
  },
  {
    label: IconTheme.bi,
    value: IconTheme.bi,
    icon: BI.BiCheckbox,
  },
];

export { AI, BI, FC };
