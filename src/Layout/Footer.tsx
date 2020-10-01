import React from "react";
import { Layout, Typography } from "antd";
import { withStyles } from "../Common/Theme";

const Footer = ({ classes }: any) => {
  return (
    <Layout.Footer>
      <Typography.Paragraph className={classes.footer}>
        &copy; Copyright {new Date().getFullYear()}
      </Typography.Paragraph>
    </Layout.Footer>
  );
};

const style = () => ({
  footer: { textAlign: "right" },
});

export default withStyles(style)(Footer);
