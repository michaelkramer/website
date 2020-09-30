import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { menuItems } from "../Routes";

const { Title, Text, Paragraph } = Typography;

const HomePage = () => {
  const classes = useStyles();
  return (
    <Typography>
      <Title>Michael Kramer</Title>
      <Text code={true}>Simple website to display what I have done</Text>
      <Paragraph className={classes.homeParagraph}>
        I am a devoted Full Stack Software Engineer who loves solving problems
        and learning new technologies. I have built products from idea to
        implementation and moved from one platform to another. I am excited to
        dive into a new experience.
      </Paragraph>
      {menuItems
        .filter((item) => item.url !== "/")
        .map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.url}>{item.title}</Link>
            </div>
          );
        })}
    </Typography>
  );
};

const useStyles = createUseStyles((_theme) => ({
  homeParagraph: { marginBottom: "24px" },
}));

export default HomePage;
