import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

import { menuItems } from "../Routes";

const { Title, Text, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Typography>
      <Title>Michael Kramer</Title>
      <Text code={true}>Simple website to display what I have done</Text>
      <Paragraph>Home</Paragraph>
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

export default HomePage;
