import React from "react";
import { Typography } from "antd";
import { withStyles } from "../Common/Theme";
import ListNotes from "./ListNotes";

const Notes = ({ classes }: any) => {
  return (
    <Typography className={classes.root}>
      <Typography.Title>Notes</Typography.Title>
      <ListNotes />
    </Typography>
  );
};
const styles = (theme?: any) => ({
  root: { marginLeft: theme.spacing, marginRight: theme.spacing * 2 },
});
export default withStyles(styles)(Notes);
