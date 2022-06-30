import axios from "axios";
import React from "react";
import ReactMarkdown from "react-markdown";

export interface Props {
  data?: string,
  url?: string,
  imageBasePath?: string
}

export const ConvertMarkDown = ({ data, url, imageBasePath }: Props) => {
  const [cardData, setCardData] = React.useState<string>();

  const readFile = async (u: string): Promise<void> => {
    const response = await axios.get<string>(u);
    setCardData(response.data);
  };

  const convertImage = ((src) => {
    if (!/http.+/i.test(src)) {
      return `${imageBasePath}/${src}`;
    }
    return src;
  })

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

  return <ReactMarkdown children={cardData} transformImageUri={convertImage} />
}
