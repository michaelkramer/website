import React, { useContext } from "react";
import Icon from "../../Common/Icons";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSettings } from "../../State/Settings/selectors";

export const Resume = ({ classes = { root: "", button: "", img: "" } }: any) => {
  const { iconTheme } = useSelector(selectSettings);
  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <Button
          component="a"
          href={`${process.env.PUBLIC_URL}/Michael_Kramer.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          startIcon={<Icon theme={iconTheme} name={"PDF"} />}
        >
          Download as PDF
        </Button>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/Michael_Kramer_01.jpg`}
          alt="Michael Kramer"
          className={classes.img}
        />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/Michael_Kramer_02.jpg`}
          alt="Michael Kramer"
          className={classes.img}
        />
      </div>
    </div>
  );
};

const styles = (theme?: any) => ({
  root: { marginRight: theme.spacing * 2 },
  button: { textAlign: "right" },
  img: { width: "100%" },
});

