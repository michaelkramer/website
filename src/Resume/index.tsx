import React, { useContext } from "react";
import { Button } from "antd";
import GlobalProvider from "../Common/GlobalContext";
import { withStyles } from "../Common/Theme";
import Icon from "../Common/Icons";

const Resume = ({ classes }: any) => {
  const { iconTheme } = useContext(GlobalProvider.context);
  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <Button
          href={`${process.env.PUBLIC_URL}/Michael_Kramer.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          type="link"
          icon={<Icon theme={iconTheme} name={"PDF"} />}
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

export default withStyles(styles)(Resume);
