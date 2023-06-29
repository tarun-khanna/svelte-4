const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: "svelte-loader",
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
