import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";

const Header = () => {
  const location = useLocation();
  return (
    <Layout.Header>
      {location.pathname !== "/" && <h3>Header</h3>}
    </Layout.Header>
  );
};

export default Header;
