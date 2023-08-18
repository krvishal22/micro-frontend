const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    // take out all .js file coming out from webpack and add it to html inex.html file
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
