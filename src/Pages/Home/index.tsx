import { styled, Typography } from "@mui/material";
import React from "react";
import { MenuApp } from "../../Routes/Menu";
import { StyledProps, MenuAppMode } from "../../Types";

const TitleParagraph = styled(Typography)(({ theme }: StyledProps) => ({
  textAlign: "center",
  margin: theme.spacing(4)
}));

const HomeParagraph = styled(Typography)(({ theme }: StyledProps) => ({
  margin: `${theme.spacing(2)} auto`,
  textAlign: "center",
}));

const CodeParagraph = styled("span")(({ theme }: StyledProps) => ({
  margin: "0 0.2em",
  padding: "0.2em 0.4em 0.1em",
  fontSize: "85%",
  fontFamily: `"Source Code Pro",source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace`,
  background: "hsla(0,0%,58.8%,.1)",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "hsla(0,0%,39.2%,.2)",
  borderRadius: theme.shape.borderRadius
}));

export const HomePage = () => {
  return (
    <div >
      <TitleParagraph variant="h3">Michael Kramer</TitleParagraph>
      <div style={{ textAlign: "center" }}><CodeParagraph>Simple website to display what I have done</CodeParagraph></div>
      <HomeParagraph variant="body1">
        I am a devoted Full Stack Software Engineer who loves solving problems
        and learning new technologies. I have built products from idea to
        implementation and moved from one platform to another. I am excited to
        dive into a new experience.
      </HomeParagraph>
      <div style={{ textAlign: "center" }}><MenuApp mode={MenuAppMode.horizontal} omitHome={true} /></div>
    </div>
  );
};
