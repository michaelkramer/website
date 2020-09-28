import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.less";
import Layout from "./Layout";
import Routes from "./Routes";

const antConfig = {
  prefixCls: "mk",
};

function App() {
  return (
    <ConfigProvider {...antConfig}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
