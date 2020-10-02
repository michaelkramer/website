import React from "react";
import { Collapse } from "antd";
import { withStyles } from "../Common/Theme";

const notes = [
  {
    name: "Git Refresh .gitignore files",
    md: `${process.env.PUBLIC_URL}/notes/git-01.md`,
  },
];

const ListNotes = ({ classes }: any) => {
  return (
    <div className={classes.root}>
      <h3>List of Notes</h3>
      <Collapse>
        {notes.map((note, idx) => {
          return (
            <Collapse.Panel header={note.name} key={idx}>
              <div>{note.md}</div>
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

const styles = (theme?: any) => ({
  root: { textAlign: "left" },
});
export default withStyles(styles)(ListNotes);
