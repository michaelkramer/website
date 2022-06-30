import React from "react";
import { useLocation } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { MenuApp } from "../Routes";
import { Container, Paper, Grid } from "@mui/material";

interface $Props {
  children: any;
}

export const Layout = ({ children }: $Props) => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      {location.pathname === "/" && (
        <div className="App">{children}</div>
      )}
      {location.pathname !== "/" && (
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div style={{ color: "white" }}>
              <MenuApp />
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="App">{children}</div>
          </Grid>
        </Grid>
      )}


      <Footer />
    </Container>
  );
};

//export default LayoutComponent;
