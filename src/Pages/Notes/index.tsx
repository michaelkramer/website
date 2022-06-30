import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

import { ListNotes } from "./ListNotes";

export const Notes = ({ classes = { root: "" } }: any) => {
  const checkOutlet = useOutlet();
  return (
    <Typography className={classes.root}>
      <Typography variant="h3">Notes</Typography>
      <ListNotes />
      {checkOutlet && <Paper>
        <Box m={2} p={1}>
          <Outlet />
        </Box>
      </Paper>}
    </Typography>
  );
};
const styles = (theme?: any) => ({
  root: { marginLeft: theme.spacing, marginRight: theme.spacing * 2 },
});

