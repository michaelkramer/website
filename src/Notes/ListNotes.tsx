import React, { useState } from "react";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { withStyles } from "../Common/Theme";

const notes = [
  {
    name:
      "So you changed your .gitignore but the files are still being pushed??",
    md: `${process.env.PUBLIC_URL}/notes/git-change-gitignore.md`,
  },
  {
    name: "Say you accidentally pushed your .env files 🤦‍♂️",
    md: `${process.env.PUBLIC_URL}/notes/git-undo-env.md`,
  },
  {
    name: "How to deploy to gh-pages",
    md: `${process.env.PUBLIC_URL}/notes/github-pages.md`,
  },
  {
    name: "Version Control",
    md: `${process.env.PUBLIC_URL}/notes/version-control.md`,
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
        {notes && (
          <ul>
            {" "}
            {notes.map((note, idx) => {
              return (
                <li
                  key={idx}
                  className={classes.listItem}
                  onClick={() => readFile(note.md)}
                >
                  <Button>{note.name}</Button>
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <ReactMarkdown source={d} />
        </div>
      </div>
    </div>
  );
};

const styles = (theme?: any) => ({
  root: {
    textAlign: "left",
  },
  listItem: {
    marginBottom: `${theme.spacing}px !important`,
  },
});
export default withStyles(styles)(ListNotes);
