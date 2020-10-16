import React, { useState, useContext } from "react";
import { Typography, Card, Button } from "antd";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { withStyles } from "../Common/Theme";
import GlobalProvider from "../Common/GlobalContext";
import Icon from "../Common/Icons";
import EslintFacepalmIcon from "../Common/Icons/eslint-facepalm";

const SideIdeas = ({ classes }: any) => {
  const [cardData, setCardData] = useState("");
  const { iconTheme } = useContext(GlobalProvider.context);
  const readFile = (file: string) => {
    if (cardData.length) {
      return setCardData("");
    }
    return axios.get(file).then((response: any) => setCardData(response.data));
  };
  return (
    <div className={classes.root}>
      <Typography>
        <Typography.Title>Small Side Projects I've done.</Typography.Title>
      </Typography>
      <Card
        hoverable
        className={classes.card}
        cover={
          <div>
            <EslintFacepalmIcon />
          </div>
        }
        actions={[
          <Button
            type="link"
            icon={<Icon theme={iconTheme} name={"Info"} />}
            onClick={() =>
              readFile(
                "https://raw.githubusercontent.com/michaelkramer/eslint-plugin-facepalm/master/README.md"
              )
            }
          >
            Info
          </Button>,
          <Button
            type="link"
            icon={<Icon theme={iconTheme} name={"Github"} />}
            href={"https://github.com/michaelkramer/eslint-plugin-facepalm"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>,
        ]}
      >
        <Card.Meta
          title="eslint-plugin-facepalm"
          description="eslint-plugins are really helpful, eslint-plugin-facepalm is designed
          to just present you with cleaner code. By warning you when you left
          some debug code."
          className={classes.meta}
        />
      </Card>
      {cardData && (
        <Typography className={classes.cardData}>
          <ReactMarkdown source={cardData} />
        </Typography>
      )}
    </div>
  );
};

const style = (theme?: any) => ({
  root: {
    padding: `0 ${theme.spacing * 2}px ${theme.spacing}px ${theme.spacing * 2
      }px`,
    width: "80vw",
    textAlign: "center",
  },
  card: {
    width: "300px",
    paddingTop: theme.spacing * 2,
  },
  meta: {
    textAlign: "left",
  },
  cardData: {
    marginTop: theme.spacing * 2,
    textAlign: "left",
    border: theme.border,
    padding: theme.spacing * 2,
  },
});

export default withStyles(style)(SideIdeas);
