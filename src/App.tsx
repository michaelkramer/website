import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Layout } from "./Layout";
import { MyRoutes } from "./Routes";
import { theme } from "./constants";
import { Provider } from "react-redux";
import { store } from "./State/store";

const antConfig = {
  prefixCls: "mk",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router>
          <Layout>
            <MyRoutes />
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
