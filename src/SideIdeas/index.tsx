import React, { useContext } from "react";
import { Typography, Card, Button, Space } from "antd";
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { withStyles } from "../Common/Theme";
import GlobalProvider from "../Common/GlobalContext";
import Icon from "../Common/Icons";
import EslintFacepalmIcon from "../Common/Icons/eslint-facepalm";
import LoopTest from "./LoopTest";
import EslintFacepalm from "./EslintFacepalm"

const SideIdeas = ({ classes }: any) => {
  const history = useHistory();
  const { iconTheme } = useContext(GlobalProvider.context);

  let { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Typography>
        <Typography.Title>Small Side Projects I've done.</Typography.Title>
      </Typography>
      <Space>
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
              onClick={() => history.push(`${url}/eslint`)}
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
        <Card
          hoverable
          className={classes.card}

          actions={[
            <Button
              type="link"
              icon={<Icon theme={iconTheme} name={"Info"} />}
              onClick={() => history.push(`${url}/looptest`)}
            >
              Info
            </Button>,

          ]}
        >
          <Card.Meta
            title="Loop Test"
            description="Fun Loop testing"
            className={classes.meta}
          />
        </Card>
      </Space>
      <Switch>
        {/* <Route exact path={path}>

        </Route> */}
        <Route path={`${path}/eslint`}>
          <EslintFacepalm />
        </Route>
        <Route path={`${path}/looptest`}>
          <LoopTest />
        </Route>
      </Switch>

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
