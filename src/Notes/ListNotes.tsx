import React, { useState } from "react";
//import { Collapse } from "antd";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { withStyles } from "../Common/Theme";
import note1 from "./git-01";
const notes = [
  {
    name: "Git Refresh .gitignore files",
    md: `${process.env.PUBLIC_URL}/notes/git-01.md`,
    comp: note1,
  },
  {
    name: "Test",
    md: `${process.env.PUBLIC_URL}/notes/test.md`,
  },
];

const ListNotes = ({ classes }: any) => {
  const [d, setD] = useState("");
  const readFile = (file: string) => {
    return axios.get(file).then((response: any) => setD(response.data));
  };
  return (
    <div className={classes.root}>
      <h3>List of Notes</h3>
      <div>
        {!notes && <div>None</div>}
        {notes &&
          notes.map((note, idx) => {
            return (
              <div key={idx} onClick={() => readFile(note.md)}>
                <div>{note.name}</div>
              </div>
            );
          })}
        <div>
          <ReactMarkdown source={d} />
        </div>
      </div>
    </div>
  );
};

const styles = (theme?: any) => ({
  root: { textAlign: "left" },
});
export default withStyles(styles)(ListNotes);
