import { IconTheme } from "../../Types";
import * as AI from "react-icons/ai";
import * as BI from "react-icons/bi";
import * as BS from "react-icons/bs";
import * as FC from "react-icons/fc";
import * as FA from "react-icons/fa";
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

  { name: "Idea", theme: IconTheme.antd, component: AI.AiOutlineBulb },
  { name: "Idea", theme: IconTheme.bi, component: BI.BiBulb },
  { name: "Idea", theme: IconTheme.fc, component: FC.FcIdea },

  { name: "Note", theme: IconTheme.antd, component: AI.AiOutlineFileText },
  { name: "Note", theme: IconTheme.bi, component: BI.BiNotepad },
  { name: "Note", theme: IconTheme.fc, component: FC.FcRules },

  { name: "Copy", theme: IconTheme.antd, component: AI.AiOutlineCopy },
  { name: "Copy", theme: IconTheme.bi, component: BI.BiCopy },
  { name: "Copy", theme: IconTheme.fc, component: FA.FaCopy },

  { name: "Cross", theme: IconTheme.antd, component: AI.AiOutlineClose },
  { name: "Cross", theme: IconTheme.bi, component: BI.BiX },
  { name: "Cross", theme: IconTheme.fc, component: FA.FaTimes },

  { name: "Check", theme: IconTheme.antd, component: AI.AiOutlineCheck },
  { name: "Check", theme: IconTheme.bi, component: BI.BiCheck },
  { name: "Check", theme: IconTheme.fc, component: FA.FaCheck },

  { name: "Bot", theme: IconTheme.fc, component: FA.FaRobot },
  { name: "Bot", theme: IconTheme.antd, component: AI.AiOutlineRobot },
  { name: "Bot", theme: IconTheme.bi, component: BS.BsRobot },
];

export default IconList;
