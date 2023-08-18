const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
      shared: {
        faker: {
          singleton: true,
        }
      },
    }),

    // take out all .js file coming out from webpack and add it to html inex.html file
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
