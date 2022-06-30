import React from "react";
import { styled, Typography } from "@mui/material";
import { StyledProps } from "../Types";

const FooterStyle = styled(Typography)(({ theme }: StyledProps) => ({
}));

const FooterWrapper = styled("div")(({ theme }: StyledProps) => ({
  textAlign: "right",
  position: "fixed",
  bottom: 0,
  right: theme.spacing(6)
}));

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyle variant="body1">
        &copy; Copyright {new Date().getFullYear()}
      </FooterStyle>
    </FooterWrapper>
  );
};
