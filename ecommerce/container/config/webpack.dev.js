const { merge } = require("webpack-merge");

/*
merge fn allows us to take all the config that we wrote out in common file and merge 
it together with a configuration that we are about to write inside this development file
*/
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies, // automating this process so that we don't have to write it manually
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
