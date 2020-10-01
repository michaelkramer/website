import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";

const Header = () => {
  const location = useLocation();
  return (
    <Layout.Header>
      {location.pathname !== "/" && <span>&nbsp;</span>}
    </Layout.Header>
  );
};

export default Header;
