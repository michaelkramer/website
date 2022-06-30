import axios from "axios";
import React from "react";

import ReactMarkdown from "react-markdown";

export const GrpcCode = () => {
  const [cardData, setCardData] = React.useState("");

  const readFile = (file: string) => {
    if (cardData.length) {
      return setCardData("");
    }
    return axios.get(file).then((response: any) => setCardData(response.data));
  }

  React.useEffect(() => {
    readFile(
      `${process.env.PUBLIC_URL}/notes/grpc.md`
    );
    return () => {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    <div>Grpc Code</div>
    <div>
      Setting up a gRpc Client Class
    </div>
    <div>
      <div>BaseGrpcClient</div>
      <div>
        <ReactMarkdown children={cardData} />
      </div>
    </div>
  </div >
};

