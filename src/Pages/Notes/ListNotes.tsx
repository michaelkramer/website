import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const notes = [
  {
    name:
      "So you changed your .gitignore but the files are still being pushed??",
    md: "git-change-gitignore.md",
  },
  {
    name: "Say you accidentally pushed your .env files 🤦‍♂️",
    md: 'git-undo-env.md',
  },
  {
    name: "How to deploy to gh-pages",
    md: "github-pages.md",
  },
  {
    name: "Version Control",
    md: "version-control.md",
  },
  {
    name: "Heroku Commands",
    md: "heroku-commands.md",
  },
  {
    name: "Setting up jwt",
    md: "jwt-setup.md",
  },
  {
    name: "WSL Commands",
    md: "wsl_commands.md",
  },
  {
    name: "gRpc Base Client",
    md: "baseGrpcClient.ts",
  },
];

export const ListNotes = ({ classes = { root: "", listItem: "" } }: any) => {
  const history = useNavigate();
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
                  onClick={() => history(note.md)}
                >
                  <Button>{note.name}</Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
