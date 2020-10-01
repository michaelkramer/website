import React from "react";
import { Typography } from "antd";
import { withStyles } from "../Common/Theme";
import MenuApp from "../Routes/Menu";

const { Title, Text } = Typography;

const HomePage = ({ classes }: any) => {
  return (
    <Typography>
      <Title>Michael Kramer</Title>
      <Text code={true}>Simple website to display what I have done</Text>
      <div className={classes.homeParagraph}>
        I am a devoted Full Stack Software Engineer who loves solving problems
        and learning new technologies. I have built products from idea to
        implementation and moved from one platform to another. I am excited to
        dive into a new experience.
      </div>
      <MenuApp mode="horizontal" className={classes.menu} omitHome={true} />
    </Typography>
  );
};

const style = (theme?: any) => ({
  homeParagraph: {
    margin: `${theme.spacing * 2}px auto`,
    width: "80vw",
    textAlign: "center",
  },
  menu: { textAlign: "center" },
});

export default withStyles(style)(HomePage);
