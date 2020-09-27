const CracoLessPlugin = require("craco-less");
//const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = {
  plugins: [
    //{ plugin: reactHotReloadPlugin },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // "@primary-color": "#1DA57A",
              "@layout-body-background": "#fff",
              "@layout-header-background": "#fff",
              "@font-family":
                "'Comfortaa', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell','Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              "@code-family":
                "'Source Code Pro', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
              "@body-background": "#fff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
