import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "react-jss";

import "./App.less";
import { Theme } from "./Common/Theme";
import Layout from "./Layout";
import Routes from "./Routes";

const antConfig = {
  prefixCls: "mk",
};

function App() {
  return (
    <ConfigProvider {...antConfig}>
      <ThemeProvider theme={Theme}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
