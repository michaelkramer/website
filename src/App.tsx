import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.less";
import Layout from "./Layout";
import Routes from "./Routes";

function App() {
  console.log(process.env);
  return (
    <div>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
