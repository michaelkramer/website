import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Menu } from "../Routes";

interface $Props {
  children: any;
}

const LayoutComponent = ({ children }: $Props) => {
  const location = useLocation();

  return (
    <Layout>
      <Header />
      <Layout>
        {location.pathname === "/" && (
          <Layout.Content className="App">{children}</Layout.Content>
        )}
        {location.pathname !== "/" && (
          <>
            <Layout.Sider style={{ color: "white" }}>
              <Menu />
            </Layout.Sider>
            <Layout>
              <Layout.Content className="App">{children}</Layout.Content>
            </Layout>
          </>
        )}
      </Layout>

      <Footer />
    </Layout>
  );
};

export default LayoutComponent;
