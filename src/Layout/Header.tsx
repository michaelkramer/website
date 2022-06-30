import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

export const Header = () => {
  const location = useLocation();
  return (
    <Box>
      {location.pathname !== "/" && <span>&nbsp;</span>}
    </Box>
  );
};
