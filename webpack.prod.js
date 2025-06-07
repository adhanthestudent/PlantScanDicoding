const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    login: "./src/features/login/loginPresenter.js",
    register: "./src/features/register/registerPresenter.js",
    about: "./src/features/about/aboutPresenter.js",
    identifier: "./src/features/identifier/identifier.js",
    main: "./src/index.js", // entry point utama
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // untuk caching
    clean: true,
    assetModuleFilename: "assets/images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/features/login/login.html",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/features/register/register.html",
      chunks: ["register"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/features/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "identifier.html",
      template: "./src/features/identifier/identifier.html",
      chunks: ["identifier"],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/model", to: "model" }],
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
  performance: {
    hints: false,
  },
};
