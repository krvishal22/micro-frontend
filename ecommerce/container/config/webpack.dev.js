const { merge } = require("webpack-merge");

/*
merge fn allows us to take all the config that we wrote out in common file and merge 
it together with a configuration that we are about to write inside this development file
*/
const commonConfig = require("./webpack.common");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
