import { Button, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from "../Icons";
import { selectSettings } from "../../State/Settings/selectors";
import { StyledProps } from "../../Types";

interface Props {
  value: string
}

const DivStyled = styled("div")(({ theme }: StyledProps) => ({ textAlign: "right" }));

export const CopyButton = ({ value }: Props) => {
  const [copied, setCopied] = React.useState<string>("Copy");
  const { iconTheme } = useSelector(selectSettings);

  const handleOnClick = () => {
    setCopied("Copied!")
    setTimeout(() => {
      setCopied("Copy");
    }, 3000);
  }

  return (<DivStyled>
    <CopyToClipboard text={value}
      onCopy={handleOnClick}>
      <Button variant="text" size="small" endIcon={<Icon theme={iconTheme} name={"Copy"} />}>{copied}</Button>
    </CopyToClipboard>
  </DivStyled>);
}
