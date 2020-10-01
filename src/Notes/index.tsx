import React from "react";
import { Typography } from "antd";

import ListNotes from "./ListNotes";
const Notes = () => {
  return (
    <Typography>
      <Typography.Title>Notes</Typography.Title>
      <ListNotes />
    </Typography>
  );
};

export default Notes;
