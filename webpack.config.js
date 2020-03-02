const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-react-tools",
      template: "htmlTemplate.html",
      filename: "index.html"
    })
  ]
};
