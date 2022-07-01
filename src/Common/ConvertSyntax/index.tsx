import { styled } from '@mui/material';
import axios from "axios";
import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { StyledProps } from "../../Types";
import { CopyButton } from "../CopyButton";

export interface Props {
  data?: string,
  url?: string,
  language?: string,
  slim?: boolean
}

const PreStyled = styled("div")(({ theme }: StyledProps) => ({
  maxHeight: '150px',
  overflowY: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2]
}));

export const ConvertSyntax = ({ data, url, slim, language = "typescript" }: Props) => {
  const [cardData, setCardData] = React.useState<string>();

  const readFile = async (u: string): Promise<void> => {
    const response = await axios.get<string>(u);
    setCardData(response.data);
  };

  React.useEffect(() => {
    if (data) {
      setCardData(data);
    } else if (url) {
      readFile(url);
    } else {
      setCardData("No information");
    }
    return () => { };
  }, [url, data]);

  return <>
    <CopyButton value={cardData} />
    {slim && <PreStyled>
      <SyntaxHighlighter language={language} showLineNumbers customStyle={{ margin: 0 }}>{cardData}</SyntaxHighlighter>
    </PreStyled>}
    {!slim && <SyntaxHighlighter language={language} showLineNumbers>{cardData}</SyntaxHighlighter>}

  </>
}
