const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
       products: 'products@http://localhost:8081/remoteEntry.js',
      },
    }),

    // take out all .js file coming out from webpack and add it to html inex.html file
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
